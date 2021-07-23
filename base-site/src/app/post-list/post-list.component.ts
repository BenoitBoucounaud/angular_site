import { Component, OnInit } from '@angular/core';
import { Post } from 'src/helpers/classes/post';
import * as posts from './../../ressources/jsons/posts.json'

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

    postsList: any = (posts as any).default.posts;
    simplePostList = new Array()

    constructor() {
        console.log(this.postsList)
        console.log(typeof this.postsList)
        this.getPosts()
    }

    ngOnInit(): void {
    }

    getPosts() {
        this.simplePostList = []
        this.postsList.forEach((post: any) => {
            let postObject = new Post(post.title, post.content, post.loveIt, post.created_at)
            this.simplePostList.push(postObject)
        }
        )
    }

}
