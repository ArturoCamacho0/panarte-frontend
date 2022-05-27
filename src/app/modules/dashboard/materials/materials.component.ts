import { Component, OnInit } from '@angular/core';
import { MaterialsService } from 'src/app/services/materials/materials.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Material } from 'src/app/models/Material';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss'],
  providers: [MaterialsService, CategoryService]
})
export class MaterialsComponent implements OnInit {
  materials: Material[] = [];
  loading: boolean = false;
  close_popup: boolean = false;
  material_to_delete: number = 0;

  constructor(
    private materialService: MaterialsService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getMaterials();
  }

  getMaterials() {
    this.loading = true;

    this.materialService.getMaterials().subscribe({
      next: (data) => {
        this.materials = data;
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
    if(status == 'delivered') return 'Entregado';
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
    this.material_to_delete = id;
    this.close_popup = !this.close_popup;
  }

  deletematerial(id: number) {
    this.materialService.deleteMaterial(id).subscribe({
      next: () => {
        this.getMaterials();
        this.material_to_delete = 0;
        this.close_popup = !this.close_popup;
      }
    });
  }

}
