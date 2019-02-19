import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { DoCheck } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { OnChanges } from '@angular/core';
import { AfterContentChecked } from '@angular/core';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements 
OnInit, 
AfterViewInit,
DoCheck,
AfterContentInit,
OnChanges,
AfterContentChecked,
OnDestroy
{
  title = 'Hello word';

  @Input() test: string = "Hello";

  constructor() {
    // setInterval(() => {
    //   console.log(this.title);
    // }, 1000);   
    // debugger;
    // console.log(this);
  }

  // onInput(event) {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);

    // this.title = event.target.value;
  // }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewCheked');
  }

}


