import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, type Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { type Category, type CategoryResponse } from './category.model';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private readonly http = inject(HttpClient);
  private readonly categoriesUrl = `${environment.apiBaseUrl}/categories`;

  getAll(): Observable<readonly Category[]> {
    return this.http.get<readonly CategoryResponse[]>(this.categoriesUrl).pipe(
      map((categories) => categories.map((category) => this.toCategory(category))),
    );
  }

  private toCategory(category: CategoryResponse): Category {
    return {
      id: category.id,
      nome: category.nome,
      slug: category.slug,
      iconKey: category.iconKey,
      description: category.description?.trim() ?? '',
      subcategoryNames: (category.subcategories ?? [])
        .map((subcategory) => subcategory.nome.trim())
        .filter(Boolean),
    };
  }
}
