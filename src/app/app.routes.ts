import { Routes } from '@angular/router';
import { Home } from './home/home';
import { BuscaFornecedores } from './busca-fornecedores/busca-fornecedores';
import { CadastroComprador } from './cadastro-comprador/cadastro-comprador';
import { CadastroFornecedor } from './cadastro-fornecedor/cadastro-fornecedor';
import { PainelFornecedor } from './painel-fornecedor/painel-fornecedor';
import { PerfilFornecedor } from './perfil-fornecedor/perfil-fornecedor';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'busca-fornecedores', component: BuscaFornecedores },
  { path: 'cadastro-comprador', component: CadastroComprador },
  { path: 'cadastro-fornecedor', component: CadastroFornecedor },
  { path: 'painel-fornecedor', component: PainelFornecedor },
  { path: 'perfil-fornecedor', component: PerfilFornecedor },
];
