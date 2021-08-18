import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Book } from '../models/book.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { DataSnapshot } from '@angular/fire/database/interfaces';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BooksService {

    books: Book[] = [];
    dbBooksObs!: Observable<any>;
    booksRef!: AngularFireList<any>;
    booksSubject = new Subject<Book[]>();

    lastId: number = 0;


    constructor(
        private db: AngularFireDatabase
    ) {
        this.getBooks();
    }

    getBooks() {
        this.booksRef = this.db.list('/books', ref => ref.orderByChild('id'));
        // transform a AngularFireList to a Array of object
        this.dbBooksObs = this.booksRef.snapshotChanges().pipe(
            map(changes =>
                changes.map(c => ({ ...c.payload.val() }))
            )
        );

        // take content of dbBooksObs to create a Typed Array
        this.dbBooksObs.subscribe(
            (result) => {
                this.books = result;
                if (this.books.length != 0)
                    this.lastId = this.books[this.books.length - 1].id
                this.emitBooks()
            },
            (error) => {
                console.log('Error ! : ' + error);
            }
        )
    }

    getSingleBook(id: number) {
        return this.db.list('/books/', ref => ref.orderByChild('id').equalTo(+id)).valueChanges();
    }

    emitBooks() {
        this.booksSubject.next(this.books);
    }

    createNewBook(newBook: Book) {
        this.lastId++;
        newBook.id = this.lastId;
        this.books.push(newBook);
        this.booksRef.push(newBook);
        this.emitBooks();
    }

    removeBook(book: Book) {
        const bookIndexToRemove = this.books.findIndex(
            (bookEl) => {
                if (bookEl === book) {
                    return true;
                }
                else
                    return false;
            }
        );
        this.books.splice(bookIndexToRemove, 1);
        // remove all books table and refil it with books not the best practice but avoid to use key
        this.db.list('/books').remove();
        this.books.forEach(book => {
            this.booksRef.push(book);
        });
        this.emitBooks();
    }

}
