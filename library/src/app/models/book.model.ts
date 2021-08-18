export class Book {
    photo!: string;
    synopsis!: string;
    key!: string;
    constructor(public title: string, public author: string) {
    }
}