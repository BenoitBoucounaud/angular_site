export class Post {

    id: number;
    title: string;
    content: string;
    loveIt: number;
    created_at: Date;

    constructor(
        id: number,
        title: string,
        content: string,
        loveIt: number,
        created_at: Date,
    ) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.loveIt = loveIt;
        this.created_at = created_at;
    }
}