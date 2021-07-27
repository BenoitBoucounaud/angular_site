export class Post {

    title: string;
    content: string;
    loveIt: number;
    created_at: Date;

    constructor(
        title: string,
        content: string,
        loveIt: number,
        created_at: Date
    ) {
        this.title = title;
        this.content = content;
        this.loveIt = loveIt;
        this.created_at = created_at
    }
}