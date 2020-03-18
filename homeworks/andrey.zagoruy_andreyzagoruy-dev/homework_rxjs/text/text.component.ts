import { Component,  Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnChanges {

  text: string = '';
  @Input() word: string;

  ngOnChanges(changes) {
    if (!changes.word.currentValue) return;
    this.text += this.word + ' ';
  }

}
