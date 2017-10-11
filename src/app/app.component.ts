import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navList = [
    { name: 'Home', icon: 'home', urls: '/'},
    { name: 'Claim', icon: 'home', urls: '/'},
    { name: 'Product', icon: 'home', urls: '/'},
    { name: 'Admin', icon: 'home', urls: '/'}
  ];
}
