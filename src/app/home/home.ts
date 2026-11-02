import { ChangeDetectionStrategy, Component, DestroyRef, ViewEncapsulation, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CategoryService } from '../categories/category.service';
import { type Category } from '../categories/category.model';

/** Página inicial da plataforma Lynkou. */
@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly categoryService = inject(CategoryService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly categories = signal<readonly Category[]>([]);
  readonly isLoadingCategories = signal(true);
  readonly hasCategoriesError = signal(false);
  selectedCategory = '';
  supplierName = '';

  constructor() {
    this.categoryService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (categories) => this.categories.set(categories),
        error: () => {
          this.hasCategoriesError.set(true);
          this.isLoadingCategories.set(false);
        },
        complete: () => this.isLoadingCategories.set(false),
      });
  }

  categoryDescription(category: Category): string {
    return category.subcategoryNames.length > 0
      ? category.subcategoryNames.join(', ')
      : category.description;
  }

  searchSuppliers(): void {
    void this.router.navigate(['/busca-fornecedores'], {
      queryParams: {
        categorias: this.selectedCategory.trim() || null,
        nome: this.supplierName.trim() || null,
      },
    });
  }
}
