import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/models/Sale';
import { SalesService } from 'src/app/services/sales/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  sales: Sale[] = [];
  loading: boolean = false;
  close_popup: boolean = false;
  sale_to_delete: number = 0;

  constructor(private saleService: SalesService) { }

  ngOnInit(): void {
  }

  getSales() {
    this.loading = true;

    this.saleService.getSales().subscribe({
      next: (data) => {
        this.sales = data;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
      }
    });
  }

  nameStatus(status: string) {
    if(status == 'in_process') return 'En proceso';
    if(status == 'waiting') return 'En espera';
    if(status == 'finished') return 'Finalizado';

    return 'Sin estado';
  }

  popup(id: number) {
    this.sale_to_delete = id;
    this.close_popup = !this.close_popup;
  }

  deleteSale(id: number) {
    this.saleService.deleteSale(id).subscribe({
      next: (data) => {
        this.getSales();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
