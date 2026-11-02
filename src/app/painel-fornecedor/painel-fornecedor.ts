import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-painel-fornecedor',
  imports: [RouterLink],
  templateUrl: './painel-fornecedor.html',
  styleUrl: './painel-fornecedor.css',
  encapsulation: ViewEncapsulation.None,
})
export class PainelFornecedor {}
