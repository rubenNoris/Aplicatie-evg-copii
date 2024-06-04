import { Component } from '@angular/core';

@Component({
  selector: 'app-your-component',
  templateUrl: './your-component.component.html',
  styleUrls: ['./your-component.component.css'],
})
export class YourComponent {
  adminCode: string = 'Codul de admin';
  isCodeValid: boolean = false;
  isCodeIncorrect: boolean = false;

  checkCode(): void {
    const validCode = '1234';
    if (this.adminCode.toLowerCase() === validCode) {
      this.isCodeValid = true;
      this.isCodeIncorrect = false;
    } else {
      this.isCodeIncorrect = true;
      this.isCodeValid = false;
    }
  }
}
