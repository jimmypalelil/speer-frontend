import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuColor = new BehaviorSubject<MenuData>
  ({shouldExpand: false, bg: PageBackground.BLACK});

  constructor() { }

  toggleMenu(bg?: PageBackground) {
    bg = bg || PageBackground.BLACK; // defaults to black
    this.menuColor.next({shouldExpand: !this.menuColor.value.shouldExpand, bg})
  }

  setColors(bg: PageBackground) {
    this.menuColor.next({shouldExpand: false, bg})
  }
}

export enum PageBackground {
  RED,
  YELLOW,
  BLUE,
  BLACK
}

export type MenuData = {
  shouldExpand: boolean,
  bg: PageBackground
}
