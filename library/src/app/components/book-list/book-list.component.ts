import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

    books: Book[] = [];
    booksSubscription: Subscription = new Subscription;

    constructor(private booksService: BooksService, private router: Router) { }

    ngOnInit() {
        this.booksSubscription = this.booksService.booksSubject.subscribe(
            (books: Book[]) => {
                this.books = books;
            }
        );
        this.booksService.emitBooks();
    }

    onNewBook() {
        this.router.navigate(['/books', 'new']);
    }

    onDeleteBook(book: Book) {
        this.booksService.removeBook(book);
    }

    onViewBook(id: number) {
        this.router.navigate(['/books', 'view', id]);
    }

    ngOnDestroy() {
        this.booksSubscription.unsubscribe();
    }
}

