import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  images = [
    'assets/images/slider/Image 1.png',
    'assets/images/slider/Image 2.png',
    'assets/images/slider/Image 3.png'
  ]
  currentImage = {index: 0, url: this.images[0]};

  constructor() { }

  ngOnInit(): void {
    this.initSlider()
  }

  initSlider(): void {
    window.setInterval(() => this.setImage(), 10000)
  }

  setImage(index?: number | any): void {
    index = index ? index : this.currentImage.index + 1;
    if (index < 0 || index > 2) index = 0;
    this.currentImage.index = index;
    this.currentImage.url = this.images[index];
    document.getElementsByTagName('img')[0].style.animationPlayState = 'running'
  }
}
