import {
  Component,
  OnInit,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './textInput.component.html',
  styleUrls: ['./textInput.component.sass'],
})

export class textInputComponent implements AfterViewInit {
  constructor(private _element: ElementRef) {}

  @ViewChild('textBox') textBox: ElementRef<HTMLTextAreaElement>;

  @Output() toggleTagListEvent = new EventEmitter<boolean>();

  @Output() sendText = new EventEmitter<string>();


  private requestShowTagList() {
    this.toggleTagListEvent.emit(true);
  }
  private requestHideTagList() {
    this.toggleTagListEvent.emit(false);
  }
  private sendTextValue () {
    this.sendText.emit(this.textBox.nativeElement.value)
  }

  textDataToApp() {
    const box = this.textBox.nativeElement.value;
    if (box.slice(-2) === ' @' || (box.length === 1 && box[0] === '@')) {
      this.requestShowTagList();
    } else if (box.slice(-1) === ' ' || !box.length) {
      this.requestHideTagList();
    }
    this.sendTextValue()
  }

  ngAfterViewInit(): void {}
}
