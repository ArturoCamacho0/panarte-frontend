import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss'],
  providers: [ProductsService, CategoryService]
})
export class ModifyComponent implements OnInit {
  loading: boolean = false;
  categories: any;
  product: any;
  status: string = '';
  message: string = '';
  category_name = '';
  close_popup: boolean = false;
  id: string = '';

  constructor(
    private productService: ProductsService,
    private categoryService: CategoryService,
    private router: Router
  ) {
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
    this.getProduct();
  }

  getProduct() {
    this.id = this.router.url.slice(21, this.router.url.length);

    this.productService.getProduct(parseInt(this.id)).subscribe({
      next: (response) => {
        this.product = JSON.parse(JSON.stringify(response));
      },
      error: (error) => {
        console.log(error);
      }
    });
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

    this.productService.updateProduct(this.product, parseInt(this.id)).subscribe({
      next: (data) => {
        console.log(data);
        this.loading = false;
        this.status = 'success';
        this.message = 'El producto se ha actualizado exitosamente';

        setTimeout(() => {
          this.status = '';
          this.message = '';
        }, 5000);
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
        this.status = 'error';
        this.message = 'No se ha podido actualizar el producto';

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
