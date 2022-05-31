import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [CustomerService]
})
export class CreateComponent implements OnInit {
  customer: Customer;
  status: string = '';
  message: string = '';
  loading: boolean = false;
  close_popup: boolean = false;

  constructor(private customerService: CustomerService) {
    this.customer = new Customer(0, '', '', '', '');
  }

  ngOnInit(): void {
  }

  saveCustomer() {
    this.customerService.createCustomer(this.customer).subscribe({
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
