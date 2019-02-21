import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.css']
})
export class SomeComponent implements OnInit {

  @Input() public someText: string = 'test';
  @Output() public textEmiter: EventEmitter<string> = new EventEmitter();
  @Output() public objectEmiter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}

  public onClick(input: HTMLInputElement) {
    const inputValue: string = input.value;

    this.sendOutputText(inputValue);
  }

  private sendOutputText(text: string): void {
    this.textEmiter.emit(text);
  }

  // public resetTextInput(): void {
  //   this.textEmiter.emit('');
  // }

  public sendObject(input: HTMLInputElement): void {
    const data = {
      name: 'Test',
      value: input.value
    };

    this.objectEmiter.emit(data);
  }

}
