import { Component, OnInit } from '@angular/core';

// Services
import { SalesService } from 'src/app/services/sales/sales.service';
import { CustomerService } from 'src/app/services/customer/customer.service';

// Models
import { Sale } from 'src/app/models/Sale';
import { Customer } from 'src/app/models/Customer';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products/products.service';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [SalesService, CustomerService, ProductsService]
})
export class CreateComponent implements OnInit {
  // Variables
  loading: boolean = false;
  status: string = '';
  message: string = '';
  close: boolean = false;

  sale: Sale;
  user: any = JSON.parse(JSON.stringify(localStorage.getItem('user')));
  customers: Customer[] = [];

  products$: Observable<Product[]>;
  products_added: Product[] = [];

  products_list: Product[] = [];

  constructor(
    private saleService: SalesService,
    private customerService: CustomerService,
    private productService: ProductsService) {
    this.sale = new Sale(0, '', 0, '', this.user.id, 0);
    this.products$ = this.saleService.productsInSale$;
  }

  ngOnInit(): void {
    this.getCustomers();
    this.getProducts();
  }

  addProduct(product: Product) {
    this.saleService.addProduct(product);
    this.products_added = [...this.products_added, product];
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe({
      next: (data) => {
        this.customers = data;
      }
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products_list = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  nameStatus(status: string) {
    if(status == 'finalized') return 'Finalizado';
    if(status == 'production') return 'En producción';
    if(status == 'discontinued') return 'Descontinuado';

    return 'Sin estado';
  }

  createSale() {
    this.loading = true;

    this.sale.date = moment(this.sale.date).format('YYYY-MM-DD');

    this.saleService.createSale(this.sale).subscribe({
      next: (data) => {
        this.loading = false;
        this.status = 'success';
        this.message = 'La venta se ha creado correctamente.';
        this.sale = new Sale(0, '', 0, '', this.user.id, 0);

        setTimeout(() => {
          this.status = '';
          this.message = '';
        }, 5000);
      },
      error: (err) => {
        this.loading = false;
        this.status = 'error';
        this.message = 'Ha ocurrido un error al crear la venta.';

        setTimeout(() => {
          this.status = '';
          this.message = '';
        }, 5000);
      }
    });
  }

}
