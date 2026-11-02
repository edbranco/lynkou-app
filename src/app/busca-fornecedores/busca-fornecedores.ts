import { ChangeDetectionStrategy, Component, DestroyRef, ViewEncapsulation, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { catchError, distinctUntilChanged, finalize, map, of, switchMap } from 'rxjs';
import { type Supplier } from '../suppliers/supplier.model';
import { SupplierService } from '../suppliers/supplier.service';

@Component({
  selector: 'app-busca-fornecedores',
  imports: [FormsModule, RouterLink],
  templateUrl: './busca-fornecedores.html',
  styleUrl: './busca-fornecedores.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuscaFornecedores {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly supplierService = inject(SupplierService);
  private readonly destroyRef = inject(DestroyRef);

  readonly suppliers = signal<readonly Supplier[]>([]);
  readonly category = signal('');
  supplierName = '';
  readonly isLoading = signal(true);
  readonly hasError = signal(false);

  constructor() {
    this.route.queryParamMap
      .pipe(
        map((params) => ({
          category: params.get('categorias') ?? '',
          name: params.get('nome') ?? '',
        })),
        distinctUntilChanged((previous, current) =>
          previous.category === current.category && previous.name === current.name,
        ),
        switchMap(({ category, name }) => {
          this.category.set(category);
          this.supplierName = name;
          this.isLoading.set(true);
          this.hasError.set(false);

          return this.supplierService.getAll(category, name).pipe(
            catchError(() => {
              this.suppliers.set([]);
              this.hasError.set(true);
              return of<readonly Supplier[]>([]);
            }),
            finalize(() => this.isLoading.set(false)),
          );
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((suppliers) => this.suppliers.set(suppliers));
  }

  searchSuppliers(): void {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        categorias: this.category().trim() || null,
        nome: this.supplierName.trim() || null,
      },
    });
  }
}
