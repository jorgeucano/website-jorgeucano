import {Component, OnDestroy, OnInit} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {IPhoto} from '../../interfaces/iphoto';
import {interval, Observable, Subscriber} from 'rxjs';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger('slider', [
      state('show',
        style({
          opacity: 1,
          transform: 'rotate(0deg)'
        })
      ),
      state('hide',
        style({
          opacity: 0,
          transform: 'rotate(180deg)'
        })
      ),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})

export class SliderComponent implements OnInit, OnDestroy {

  sliderShow = 'show';
  photos: Array<IPhoto> = [
    {href: '/home', alt: 'hola soy un alt', src: 'https://angular.io/assets/images/logos/angular/angular.svg'},
    {href: '/home', alt: 'hola soy un alt', src: 'https://angular.io/assets/images/logos/angular/angular.svg'},
    {href: '/home', alt: 'hola soy un alt', src: 'https://angular.io/assets/images/logos/angular/angular.svg'},
    {href: '/home', alt: 'hola soy un alt', src: 'https://angular.io/assets/images/logos/angular/angular.svg'}
  ];
  sliderInterval: any;
  selected: number = 0;

  constructor() { }

  ngOnInit() {
    this.sliderChange(this.selected, false);
    this._sliderInterval();
  }
  ngOnDestroy() {
    this.sliderInterval.complete();
  }

  private _sliderInterval() {
    const sliderInterval = interval(6000);
    this.sliderInterval = sliderInterval.subscribe(
      () => {
        this.sliderChange(this.selected, false);
      }
    );
  }

  sliderChange(selected: number, byClick: boolean) {
    if (byClick) {
      this.sliderInterval.complete();
      setTimeout(() => {
        this._sliderInterval();
      }, 5000);
    }
    this.sliderShow = 'hide';
    this.selected++;
    const paginator = this.photos.length;
    if (this.selected === paginator) {
      this.selected = 0;
    }
    setTimeout(() => {
      this.sliderShow = 'show';
    }, 500);
  }

}
