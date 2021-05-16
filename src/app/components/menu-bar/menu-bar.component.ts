import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MenuData, MenuService, PageBackground} from "../../services/menu.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit, AfterViewInit {
  expanded = false;
  currentBg: BehaviorSubject<MenuData>
  currentClass: string = '';

  @ViewChild('mask') maskEl: ElementRef | undefined;
  @ViewChild('menu') menuEl: ElementRef | undefined;
  @ViewChild('menuContainer') menuContainerEl: ElementRef | undefined;

  constructor(private menuService: MenuService) {
    this.currentBg = menuService.menuColor;
  }

  ngAfterViewInit(): void {
    this.initMenuSub();

    // close menu on mouse leave event
    this.menuEl?.nativeElement.addEventListener('mouseleave', () => {
      this.expanded = false;
    })
  }

  ngOnInit(): void { }

  initMenuSub() {
    this.currentBg.subscribe(val => {
      const classes = {
        [PageBackground.RED]: 'bg-red',
        [PageBackground.YELLOW]: 'bg-yellow',
        [PageBackground.BLACK]: 'bg-black',
        [PageBackground.BLUE]: 'bg-blue',
      };

      if (this.menuContainerEl) {
        this.currentClass && this.menuContainerEl.nativeElement.classList.remove(this.currentClass);
        this.currentClass = classes[val.bg];
        this.menuContainerEl.nativeElement.classList.add(this.currentClass);
      }
    })
  }

  toggleMenu() {
    this.expanded = !this.expanded;
  }
}
