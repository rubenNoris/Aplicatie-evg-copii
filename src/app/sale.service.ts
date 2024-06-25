// import { Component, OnInit } from '@angular/core';
// import { SaleService } from './sale.service';

// @Component({
//   selector: 'app-sales-component',
//   templateUrl: './sales-component.component.html',
//   styleUrls: ['./sales-component.component.css'],
// })
// export class SalesComponent implements OnInit {
//   sales: any = [];

//   constructor(private saleService: SaleService) {}

//   ngOnInit() {
//     this.loadSales();
//   }

//   loadSales() {
//     this.saleService.getSales().subscribe(
//       (data) => {
//         this.sales = data;
//       },
//       (error) => {
//         console.log('Error: ', error);
//       }
//     );
//   }

//   addSale(saleData: any) {
//     this.saleService.addSale(saleData).subscribe(
//       (result) => {
//         console.log('Sale Added', result);
//         this.loadSales(); // Reîncarcă lista pentru a afișa noul sale
//       },
//       (error) => {
//         console.log('Error: ', error);
//       }
//     );
//   }
// }
