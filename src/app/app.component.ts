import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // standalone: true,
})
export class AppComponent {
  isOpen = false;
  isOpen1 = false

  closePopover() {
    this.isOpen = false;
    this.isOpen1 = false;
  }

  handleBackdropClick() {
    this.closePopover();
  }
}
