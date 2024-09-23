import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  // @Input() isLoggedIn: boolean = false;

  constructor(private auth:AuthService){
  }

  get isLoggedIn(){
    return this.auth.isLoggedIn;
  }

  userLogout(){
    this.auth.logout()
    // this.isLoggedIn = false
  }

  SideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
}
