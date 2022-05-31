import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  loading: boolean = false;
  customer_to_delete: number = 0;
  close_popup: boolean = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe({
      next: (customers) => {
        this.customers = customers;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  popup(id: number) {
    this.customer_to_delete = id;
    this.close_popup = !this.close_popup;
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe({
      next: (data) => {
        this.customer_to_delete = 0;
        this.close_popup = !this.close_popup;
        this.getCustomers();
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
