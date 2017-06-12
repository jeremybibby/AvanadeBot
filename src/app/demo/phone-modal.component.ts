import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'phone-modal',
  templateUrl: './phone-modal.component.html',
  styleUrls: [ './phone-modal.component.css' ]
})
export class PhoneModalComponent {

  public visible = false;
  public visibleAnimate = false;

  constructor(
    private router: Router
  ){}

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
      this.router.navigate(['/getSupport', 'Elisa']);
    }
  }
}