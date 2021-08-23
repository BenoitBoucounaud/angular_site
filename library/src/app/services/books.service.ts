import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { Book } from '../models/book.model';

@Injectable({
    providedIn: 'root'
})
export class BooksService {

    books: Book[] = [];
    dbBooksObs!: Observable<any>;
    booksRef!: AngularFireList<any>;
    booksSubject = new Subject<Book[]>();

    lastId: number = 0;

    uploadPercent: Observable<number> = new Observable<number>();
    downloadURL: Observable<string> = new Observable;

    constructor(
        private db: AngularFireDatabase,
        private afStorage: AngularFireStorage,
        private router: Router
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

        //remove photo in storage
        this.afStorage.refFromURL(book.photo).delete();
        this.books.splice(bookIndexToRemove, 1);
        // remove all books table and refil it with books not the best practice but avoid to use key
        this.db.list('/books').remove();
        this.books.forEach(book => {
            this.booksRef.push(book);
        });
        this.emitBooks();
    }

    //https://github.com/angular/angularfire/blob/master/docs/storage/storage.md
    uploadFile(file: File) {
        return new Promise(
            (resolve, reject) => {
                const filePath = 'image/' + Date.now().toString() + file.name;
                const fileRef = this.afStorage.ref(filePath);
                const task = this.afStorage.upload(filePath, file)
                    .snapshotChanges().pipe(
                        finalize(() => {
                            this.downloadURL = fileRef.getDownloadURL()
                            resolve(this.downloadURL)
                        })).subscribe();
            }
        );
    }

}
