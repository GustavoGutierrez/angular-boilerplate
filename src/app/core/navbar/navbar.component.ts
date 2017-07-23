import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * Se borra la session y se redirecciona para el login o home publico
   */
  singOut(event:Event) {
    event.preventDefault();

    this.router.navigate(['/']);
  }

}
