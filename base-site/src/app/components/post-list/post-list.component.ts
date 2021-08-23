import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/Post.model';
import { PostsServices } from 'src/app/services/posts.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

    simplePostList = new Array();
    postList: any[] = [];

    posts: Post[] = [];
    postsSub: Subscription = new Subscription;

    constructor(private router: Router, private postsService: PostsServices) {
        // posts from json ressource
        this.simplePostList = postsService.getPosts();
    }

    ngOnInit(): void {
        //posts from server
        this.postsService.getPostsFromServer();
        this.postsSub = this.postsService.postListSubject.subscribe(
            (posts: Post[]) => {
                console.log(posts)
                this.posts = posts
            }
        );
        this.postsService.emitPostListSubject();
    }

    createNewPost() {
        this.router.navigate(['/new-post']);
    }

}
