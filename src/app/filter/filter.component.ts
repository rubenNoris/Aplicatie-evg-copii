import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  public filterItems: any[] = [
    { classes: 'filterDiv all ext act toti scolari gim', visible: true },
    // Adaugă restul elementelor aici, cu structura similară
  ];
  public currentFilter = 'all';

  filterSelection(filter: string): void {
    this.currentFilter = filter;
    if (filter === 'all') {
      filter = '';
    }

    this.filterItems.forEach((item) => {
      item.visible = filter === '' || item.classes.includes(filter);
    });
  }

  setActive(btnIndex: number): void {
    this.filterItems.forEach((item, index) => {
      item.active = btnIndex === index;
    });
  }
}
