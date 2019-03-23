import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {IPhoto} from '../../interfaces/iphoto';
import {interval} from 'rxjs';
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
          transform: 'rotate(360deg)'
        })
      ),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})

export class SliderComponent implements OnInit, OnDestroy {

  // logica del componente
  sliderShow = 'show';
  photosShow = [];
  selected: number = 0;
  sliderInterval: any;

  // logica de datos y muestras
  @Input('photos') photos: Array<IPhoto> = [];
  @Input('cantOfImageShow') cantOfImageShow: number = 2;


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
        this.selected++;
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
    const _seletect = selected * this.cantOfImageShow;
    const paginator = this.photos.length / this.cantOfImageShow;
    if (_seletect === paginator) {
      this.selected = 0;
    }
    this.photosShow = [];
    for (let i = 0; i < this.cantOfImageShow; i++) {
      const pointer = selected + i;
      this.photosShow.push(this.photos[pointer]);
    }

    setTimeout(() => {
      this.sliderShow = 'show';
    }, 500);
  }

}
