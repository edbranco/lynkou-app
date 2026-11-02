import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro-comprador',
  imports: [RouterLink],
  templateUrl: './cadastro-comprador.html',
  styleUrl: './cadastro-comprador.css',
  encapsulation: ViewEncapsulation.None,
})
export class CadastroComprador {}
