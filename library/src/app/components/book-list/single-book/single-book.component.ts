import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
    selector: 'app-single-book',
    templateUrl: './single-book.component.html',
    styleUrls: ['./single-book.component.scss']
})
export class SingleBookComponent implements OnInit {

    book!: Book;

    constructor(private route: ActivatedRoute, private booksService: BooksService,
        private router: Router) { }

    ngOnInit() {
        this.book = new Book('', '');
        const key = this.route.snapshot.params['key'];
        this.booksService.getSingleBook(key).subscribe(
            (book: any[]) => {
                this.book = book[0];
            }
        );
    }

    onBack() {
        this.router.navigate(['/books']);
    }

}
