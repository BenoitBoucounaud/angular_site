export class Book {
    photo!: string;
    synopsis!: string;
    id: number = 0;
    constructor(public title: string, public author: string) {
    }
}