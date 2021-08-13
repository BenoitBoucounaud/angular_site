import { Component, OnInit } from '@angular/core';
import { PostsServices } from 'src/app/services/posts.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

    simplePostList = new Array()

    constructor(postsService: PostsServices) {
        // getPosts return a array of Post
        this.simplePostList = postsService.getPosts()
    }

    ngOnInit(): void {
    }

}
