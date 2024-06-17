import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  filter: string = '';
  accordions: any[] = [
    {
      id: 1,
      title: '1. laudati ',
      content: ` /: /:Lăudaţi pe Isus! Lăudaţi pe Isus! Cu braţ puternic El domneşte.
      Lăudaţi pe Isus! Lăudaţi pe Isus! Suntem poporul ce-l iubeşte:/ Suntem
      poporul Celui ce-a înviat El este Rege!Isus ne-a salvat Şi din nou va spun
      :/`,
      tags: ['tag1', 'tag2'],
      isOpen: false,
    },
    {
      id: 2,
      title: 'Acordeon 2',
      content: 'Conținut pentru Acordeon 2',
      tags: ['tag2', 'tag3'],
      isOpen: false,
    },
    // Alte acordeoane...
  ];

  toggleAccordion(accordion: any): void {
    if (!this.isFilteredOut(accordion)) {
      accordion.isOpen = !accordion.isOpen;
      this.accordions.forEach((a) => {
        if (a !== accordion) a.isOpen = false;
      });
    }
  }

  setFilter(filter: string): void {
    this.filter = filter.toLowerCase();
  }

  isFilteredOut(accordion: any): boolean {
    if (!this.filter) return false;
    return !accordion.tags.includes(this.filter);
  }
}
