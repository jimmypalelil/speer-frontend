import {Component, OnInit} from '@angular/core';
import {MenuService, PageBackground} from "../../../../services/menu.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  currentPageIndex: number = 0;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.setMenuColor();
    window.onscroll = () => this.setMenuColor()
  }

  setMenuColor() {
    const bgs = [PageBackground.BLACK, PageBackground.RED, PageBackground.BLACK]
    const index = Math.floor(window.scrollY / window.innerHeight)
    if (index !== this.currentPageIndex) {
      this.currentPageIndex = index;
      this.menuService.setColors(bgs[index])
    }
  }

}
