import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { buffer, filter } from 'rxjs/operators';

import { isCharacter, not, isSpace } from './helpers'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  currentWord: string = '';
  keyUp$: Observable<Event> = null;
  keyUpSubscribtion: Subscription = null;

  constructor(public cd: ChangeDetectorRef) {
    this.wordHandler = this.wordHandler.bind(this);
  }

  ngOnInit() {
    this.keyUp$ = fromEvent(document, 'keyup');
    this.listenKeys();
  }

  ngOnDestroy() {
    this.keyUpSubscribtion.unsubscribe();
  }

  listenKeys() {
    this.keyUpSubscribtion = this.keyUp$
      .pipe(
        filter(isCharacter),
        filter(not(isSpace)),
        buffer(
          this.keyUp$.pipe(
            filter(isSpace)
          )
        )
      )
      .subscribe(this.wordHandler);
  }

  wordHandler(keyboardEvents: KeyboardEvent[]) {
    if (!keyboardEvents.length) return;
    this.currentWord = '';
    keyboardEvents.forEach(({ key }) => {
      this.currentWord += key;
    });
    this.cd.detectChanges();
  }

}
