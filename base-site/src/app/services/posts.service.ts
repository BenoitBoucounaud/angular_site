import { Post } from '../models/Post.model';
import * as posts from './../../ressources/jsons/posts.json';

export class PostsServices {

    postsList: any = (posts as any).default.posts;
    simplePostList = new Array()

    /**
     * we create a array of Post to normalise it     * 
     */
    getPosts(): Array<Post> {
        this.simplePostList = []
        this.postsList.forEach((post: any) => {
            let postObject = new Post(post.title, post.content, post.loveIt, post.created_at)
            this.simplePostList.push(postObject)
        })
        return this.simplePostList
    }
}