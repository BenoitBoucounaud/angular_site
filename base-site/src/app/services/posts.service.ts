import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/Post.model';
import * as posts from './../../ressources/jsons/posts.json';

@Injectable()
export class PostsServices {

    posts: any = (posts as any).default.posts;
    simplePostList: any[] = new Array();

    postList: Post[] = [];
    postListSubject = new Subject<Post[]>();
    lastId: number = 0;

    constructor(private httpClient: HttpClient) {
    }
    /**
     * Posts from json ressource
     */
    getPosts(): Array<Post> {
        this.simplePostList = []
        this.posts.forEach((post: any) => {
            let postObject = new Post(post.id, post.title, post.content, post.loveIt, post.created_at)
            this.simplePostList.push(postObject)
        })
        return this.simplePostList
    }

    /**
     * Posts from server
     */
    getPostsFromServer() {
        //reset post list
        this.postList = [];
        this.httpClient
            .get<any[]>('https://angular-site-database-default-rtdb.europe-west1.firebasedatabase.app/posts.json?orderBy="id"')
            .subscribe(
                (response: any) => {
                    console.log(response)

                    if (response instanceof Array) {
                        response.forEach(
                            (post: Post) => {
                                // const newPost = new Post(post.title, post.content, post.loveIt, post.created_at);
                                // this.postList.push(newPost);
                                this.postList.push(post);
                            }
                        )
                    }
                    else {
                        const newPost = new Post(response.id, response.title, response.content, response.loveIt, response.created_at);
                        this.postList.push(newPost);
                    }

                    if (this.postList.length > 0)
                        this.lastId = this.postList[this.postList.length - 1].id
                    this.emitPostListSubject();
                },
                (error) => {
                    console.log('Error ! : ' + error);
                }
            );
    }

    emitPostListSubject() {
        this.postListSubject.next(this.postList);
    }

    addPost(post: Post) {
        //update id
        this.lastId++;
        post.id = this.lastId;

        //add post to list
        this.postList.push(post);

        //add list to server
        this.httpClient
            .put('https://angular-site-database-default-rtdb.europe-west1.firebasedatabase.app/posts.json', this.postList)
            .subscribe(
                () => {
                    console.log('Saved !');
                },
                (error) => {
                    console.log('Error ! : ' + error);
                }
            );
        this.emitPostListSubject();
    }

    deletePost(post: Post) {

        //get post to delete
        this.httpClient
            .get('https://angular-site-database-default-rtdb.europe-west1.firebasedatabase.app/posts.json?orderBy="id"&equalTo=' + post.id)
            .subscribe(
                (resp) => {
                    // rest delete it
                    const url = 'https://angular-site-database-default-rtdb.europe-west1.firebasedatabase.app/posts/'
                        + Object.keys(resp)[0] + '.json';

                    this.httpClient
                        .delete(url)
                        .subscribe(
                            () => {
                                console.log('deleted !');
                            },
                            (error) => {
                                console.log('Error ! : ' + error);
                            }
                        );
                },
                (error) => {
                    console.log('Error ! : ' + error);
                }
            );

        this.postList = this.postList.filter(obj => obj !== post);
        this.emitPostListSubject();
    }

    updatePost(post: Post) {
        this.deletePost(post);
        this.addPost(post);
    }

}