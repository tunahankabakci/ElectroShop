import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  navWidh: string
  elem: HTMLElement
  ngOnInit(): void {
  }

  showOrHideResponsiveNav() {
    this.elem = document.getElementById('responsive-nav');
    this.navWidh = window.getComputedStyle(document.getElementById('responsive-nav')).width
    if (this.navWidh == "0px") {
      this.elem.setAttribute("style", "-webkit-transform: translateX(0%);-ms-transform: translateX(0%);transform: translateX(0%);width: 100%;");
    } else {
      this.elem.setAttribute("style", "-webkit-transform: translateX(-100%);-ms-transform: translateX(-100%);transform: translateX(-100%);width: 0%;");
    }
  }
}
