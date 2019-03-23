import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  menu = [
    {
      name: 'home',
      link: '/home',
      disable: false,
      color: 'accent'
    },
    {
      name: 'video',
      link: '/video',
      disable: false,
      color: 'accent'
    },
    {
      name: 'blog',
      link: '/blog',
      disable: false,
      color: 'accent'
    },
    {
      name: 'cfp',
      link: '/cfp',
      disable: false,
      color: 'accent'
    },
  ];

  route: Observable<any>;
  url: string = '/home';

  constructor(private router: Router) {
  }

  ngOnInit() {
      this.router.events.subscribe(url => {
        const _url = (<any>url).url;
        if (_url !== undefined) {
          this.url = _url;
        }
      });
  }

}
