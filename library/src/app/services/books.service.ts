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


    constructor(
        private db: AngularFireDatabase
    ) {
        this.getBooks();
    }

    getBooks() {
        this.booksRef = this.db.list('/books');
        this.dbBooksObs = this.booksRef.snapshotChanges().pipe(
            map(changes =>
                changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
            )
        );

        // this.dbBooksObs = this.db.list('/books').valueChanges(); // return a AngularFireList
        // take content of AngularFireList to create a Typed List
        this.dbBooksObs.subscribe(
            (result) => {
                this.books = result;
                this.emitBooks()
            },
            (error) => {
                console.log('Error ! : ' + error);
            }
        )
    }

    getSingleBook(key: string) {
        return this.db.list('/books/', ref => ref.orderByChild('key').equalTo(key)).valueChanges();
    }

    emitBooks() {
        this.booksSubject.next(this.books);
    }

    saveBooks() {
        this.db.list('/books').remove();
        this.books.forEach(book => {
            this.booksRef.push(book);
        });
    }

    createNewBook(newBook: Book) {
        this.books.push(newBook);
        this.saveBooks();
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
        this.saveBooks();
        this.emitBooks();
    }

}
