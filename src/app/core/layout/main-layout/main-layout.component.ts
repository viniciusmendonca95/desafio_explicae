import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {
  @ViewChild('sidenav') side: MatSidenav;
  mode: string = 'push';
  menuIsOpen: boolean = false;
  appitems = [
    {
      label: 'Mega-Sena',
      icon: 'attach_money',
      link: '/main/megasena',
    },
    {
      label: 'File Upload',
      icon: 'cloud_upload',
      link: '/main/fileupload',
    },
    {
      label: 'API',
      icon: 'data_usage',
      link: '/main/api',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  selecionarItem(event: any) {
    this.side.toggle();
  }

  menuOpened() {
    this.menuIsOpen = true;
  }

  menuClosed() {
    this.menuIsOpen = false;
  }
}
