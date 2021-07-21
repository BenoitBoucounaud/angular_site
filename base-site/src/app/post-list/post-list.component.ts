import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

    posts = []

    constructor() { }

    ngOnInit(): void {
    }

    // TODO : make a getter who catch each post from posts.json
    // it will catch each post, transform it in a Post class and add it in posts
}
