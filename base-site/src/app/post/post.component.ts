import { NONE_TYPE } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/services/posts.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    @Input() post: Post = {
        "title": "",
        "content": "",
        "loveIt": 0,
        "created_at": new Date("11/23/2020 14:07")
    };

    constructor() {
    }

    ngOnInit(): void {
    }

    // on a time we gonna do it directly on the json file
    updateLikes(action: 'add' | 'delete') {
        if (action == 'add')
            this.post.loveIt++
        else
            this.post.loveIt--
    }
}

