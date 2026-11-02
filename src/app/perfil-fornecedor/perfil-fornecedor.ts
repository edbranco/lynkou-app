import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil-fornecedor',
  imports: [RouterLink],
  templateUrl: './perfil-fornecedor.html',
  styleUrl: './perfil-fornecedor.css',
  encapsulation: ViewEncapsulation.None,
})
export class PerfilFornecedor {}
