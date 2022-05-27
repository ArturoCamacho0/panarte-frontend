import { Component, OnInit } from '@angular/core';

// Services
import { CategoryService } from 'src/app/services/category/category.service';
import { MaterialsService } from 'src/app/services/materials/materials.service';
import { ProviderService } from 'src/app/services/provider/provider.service';

// Models
import { Category } from 'src/app/models/Category';
import { Material } from 'src/app/models/Material';
import { Provider } from 'src/app/models/Provider';
import { Direction } from 'src/app/models/Direction';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [MaterialsService, CategoryService, ProviderService]
})
export class CreateComponent implements OnInit {
  // Variables
  loading: boolean = false;
  material: Material;
  status: string = '';
  message: string = '';

  // Variables for categories
  categories: Category[] = [];
  category: Category;
  close_popup_c: boolean = false;

  // Variables for providers
  close_popup_p: boolean = false;
  provider: Provider;
  providers: Provider[] = [];

  // Variables for direction-provider
  direction: Direction;

  constructor(
    private categoryService: CategoryService,
    private materialService: MaterialsService,
    private providerService: ProviderService) {
    // Initialize data
    this.material = new Material(0, '', 0, '', 0, 0);
    this.direction = new Direction(0, '', '', '', '', '', '');
    this.provider = new Provider(0, '', '', '', this.direction);
    this.category = new Category(0, '');
  }

  ngOnInit(): void {
    this.getCategories();
    this.getProviders();
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

  getProviders() {
    this.providerService.getProviders().subscribe({
      next: (data) => {
        this.providers = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  saveMaterial(){
    this.loading = true;

    this.materialService.createMaterial(this.material).subscribe({
      next: (data) => {
        console.log(data);
        this.loading = false;
        this.status = 'success';
        this.message = 'El material se ha creado exitosamente';

        setTimeout(() => {
          this.status = '';
          this.message = '';
        }, 5000);
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
        this.status = 'error';
        this.message = 'No se ha podido crear el material';

        setTimeout(() => {
          this.status = '';
          this.message = '';
        }, 5000);
      }
    });
  }


  saveProvider() {
    this.loading = true;

    this.providerService.createProvider(this.provider).subscribe({
      next: (data) => {
        console.log(data);
        this.close_popup_p = false;
        this.direction = new Direction(0, '', '', '', '', '', '');
        this.provider = new Provider(0, '', '', '', this.direction);
        this.loading = false;
        this.status = 'success';
        this.message = 'El proveedor se ha creado exitosamente';
        this.getProviders();

        setTimeout(() => {
          this.status = '';
          this.message = '';
        }, 5000);
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
        this.status = 'error';
        this.message = 'No se ha podido crear el proveedor';

        setTimeout(() => {
          this.status = '';
          this.message = '';
        }, 5000);
      }
    });
  }

  saveCategory() {
    this.loading = true;

    this.categoryService.createCategory(this.category).subscribe({
      next: () => {
        this.close_popup_c = false;
        this.category = new Category(0, '');
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
