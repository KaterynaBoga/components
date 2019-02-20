import {Component, Input, OnInit} from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { DoCheck } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { OnChanges } from '@angular/core';
import { AfterContentChecked } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, DoCheck, AfterContentInit, OnChanges, AfterContentChecked, OnDestroy, Input, AfterViewChecked {
  title = 'Hello word';

  @Input() test: string;
  constructor() {}

  ngOnInit(): void {
    console.log('ngOnInit', 1, 'вызывается один раз, выполняет инициализацию');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', 5, 'вызывается один раз после первого вызова ngAfterContentChecked()');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck', 2, 'вызывается при каждой проверке изменений свойств компонента');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit', 3, 'вызывается один раз после метода ngDoCheck()');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges', 0, 'вызывается до метода ngOnInit(), а также при любой переустановке или изменений значений свойств');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked', 4, 'вызывается после метода ngAfterContentInit() и каждый раз после ngDoCheck()');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewCheked', 6, 'вызывается много раз после проверка на изменения в представлении компонента');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy', 7, 'перед удалением компонента');
  }

}


