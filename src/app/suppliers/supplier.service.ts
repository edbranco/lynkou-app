import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { type Observable } from 'rxjs';
import { type Supplier } from './supplier.model';

@Injectable({ providedIn: 'root' })
export class SupplierService {
  private readonly http = inject(HttpClient);
  private readonly suppliersUrl = 'http://localhost:8080/suppliers';

  getAll(category: string, name: string): Observable<readonly Supplier[]> {
    let params = new HttpParams();

    if (category.trim()) {
      params = params.set('categorias', category.trim());
    }

    if (name.trim()) {
      params = params.set('termo', name.trim());
    }

    return this.http
      .get<readonly Supplier[]>(this.suppliersUrl, { params });
  }
}
