import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [ProductsService, CategoryService]
})
export class CreateComponent implements OnInit {
  loading: boolean = false;
  categories: any;
  product: any;
  status: string = '';
  message: string = '';
  category_name = '';
  close_popup: boolean = false;

  constructor(private productService: ProductsService, private categoryService: CategoryService) {
    this.product = {
      name: '',
      price: null,
      stock: null,
      status: '',
      category_id: 0
    };
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  saveProduct(){
    this.loading = true;

    this.productService.createProduct(this.product).subscribe({
      next: (data) => {
        console.log(data);
        this.loading = false;
        this.status = 'success';
        this.message = 'El producto se ha creado exitosamente';

        setTimeout(() => {
          this.status = '';
          this.message = '';
        }, 5000);
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
        this.status = 'error';
        this.message = 'No se ha podido crear el producto';

        setTimeout(() => {
          this.status = '';
          this.message = '';
        }, 5000);
      }
    });
  }

  saveCategory() {
    this.loading = true;

    const data = JSON.parse(`{"name": "${this.category_name}"}`);

    this.categoryService.createCategory(data).subscribe({
      next: (data) => {
        console.log(data);
        this.getCategories();
        this.category_name = '';
        this.loading = false;
        this.status = 'success';
        this.message = 'La categoría se ha creado exitosamente';

        setTimeout(() => {
          this.status = '';
          this.message = '';
        }, 5000);
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
        this.status = 'error';
        this.message = 'No se ha podido crear la categoría';

        setTimeout(() => {
          this.status = '';
          this.message = '';
        }, 5000);
      }
    });
  }
}
