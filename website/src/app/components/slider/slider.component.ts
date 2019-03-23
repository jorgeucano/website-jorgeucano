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
      )
    ])
  ]
})

export class SliderComponent implements OnInit, OnDestroy {

  sliderShow = 'show';
  photos: Array<IPhoto> = [];
  sliderInterval: any;
  selected: number = 0;

  constructor() { }

  ngOnInit() {
    this.sliderChange(this.selected, false);
  }
  ngOnDestroy() {
    this.sliderInterval.complete();
  }

  private _sliderInterval() {
    const sliderInterval = interval(6000);
    this.sliderInterval = sliderInterval.subscribe(
      () => {
        this.selected++;
        const paginator = this.photos.length;

      }
    )
  }

  sliderChange(selected: number, byClick: boolean) {
    if (byClick) {

    }


  }

}
