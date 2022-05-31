import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss'],
  providers: [CustomerService]
})
export class ModifyComponent implements OnInit {
  customer: Customer;
  status: string = '';
  message: string = '';
  loading: boolean = false;
  close_popup: boolean = false;

  constructor(private customerService: CustomerService, private router: Router) {
    this.customer = new Customer(0, '', '', '', '');
  }

  ngOnInit(): void {
    this.getCusomter();
  }

  getCusomter() {
    this.customer.id = Number(this.router.url.split('/')[3]);

    this.customerService.getCustomer(this.customer.id).subscribe({
      next: (data) => {
        this.customer = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


  saveCustomer() {
    this.customerService.updateCustomer(this.customer).subscribe({
      next: (data) => {
        this.loading = false;
        this.status = 'success';
        this.message = 'El cliente se ha creado exitosamente';

        setTimeout(() => {
          this.status = '';
          this.message = '';
        }, 5000);
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
        this.status = 'error';
        this.message = 'No se ha podido crear el cliente';

        setTimeout(() => {
          this.status = '';
          this.message = '';
        }, 5000);
      }
    });
  }
}
