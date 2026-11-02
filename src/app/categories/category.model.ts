/** Estrutura recebida da API de categorias. */
export interface CategoryResponse {
  id: number;
  nome: string;
  slug: string;
  description?: string | null;
  iconKey: string;
  subcategories?: ReadonlyArray<CategorySubcategoryResponse> | null;
}

export interface CategorySubcategoryResponse {
  id?: number;
  nome: string;
}

/** Modelo normalizado para consumo pelos componentes da aplicação. */
export interface Category {
  id: number;
  nome: string;
  slug: string;
  iconKey: string;
  description: string;
  subcategoryNames: readonly string[];
}
