import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-fornecedor',
  imports: [RouterLink],
  templateUrl: './cadastro-fornecedor.html',
  styleUrl: './cadastro-fornecedor.css',
  encapsulation: ViewEncapsulation.None,
})
export class CadastroFornecedor {}
