import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsService, CategoryService]
})
export class ProductsComponent implements OnInit {
  products: any;
  loading: boolean = false;
  close_popup: boolean = false;
  product_to_delete: number = 0;

  constructor(
    private productService: ProductsService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;

    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
      }
    });
  }

  nameStatus(status: string) {
    if(status == 'finalized') return 'Finalizado';
    if(status == 'production') return 'En producción';
    if(status == 'discontinued') return 'Descontinuado';

    return 'Sin estado';
  }

  getCategory(id: number) {
    return this.categoryService.getCategory(id).subscribe({
      next: (data) => {
        const category = JSON.parse(JSON.stringify(data));
        return category.name;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  popup(id: number) {
    this.product_to_delete = id;
    this.close_popup = !this.close_popup;
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.getProducts();
        this.product_to_delete = 0;
        this.close_popup = !this.close_popup;
      }
    });
  }

}
