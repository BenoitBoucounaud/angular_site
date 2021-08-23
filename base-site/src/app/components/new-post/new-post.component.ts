import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post.model';
import { PostsServices } from 'src/app/services/posts.service';

@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

    postForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private postsService: PostsServices,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.postForm = this.formBuilder.group({
            title: ['', Validators.required],
            content: ['', Validators.required]
        })
    }

    onSubmitForm() {
        const formValue = this.postForm.value;
        const newPost = new Post(
            0,
            formValue['title'],
            formValue['content'],
            0,
            new Date()
        )
        this.postsService.addPost(newPost);
        this.router.navigate(['/post-list']);
    }
}
