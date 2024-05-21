import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements AfterViewInit {
  @ViewChild('accordionButton') accordionButton!: ElementRef<HTMLButtonElement>;

  constructor() {}

  ngAfterViewInit(): void {
    this.accordionButton.nativeElement.addEventListener('click', () => {
      const panel = this.accordionButton.nativeElement
        .nextElementSibling as HTMLElement;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = '';
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
      this.accordionButton.nativeElement.classList.toggle('active');
    });
  }
}
