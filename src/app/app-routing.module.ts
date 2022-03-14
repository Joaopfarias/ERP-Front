import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ComissaoComponent } from './pages/comissao/comissao.component';
import { DashboardFinanceiroComponent } from './pages/dashboard/dashboard-financeiro/dashboard-financeiro.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GeraisComponent } from './pages/dashboard/gerais/gerais.component';
import { SistemaComponent } from './pages/dashboard/sistema/sistema.component';
import { ESocialComponent } from './pages/e-social/e-social.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';
import { OrcamentosGMPComponent } from './pages/orcamentos-gmp/orcamentos-gmp.component';
import { ParametrosESocialComponent } from './pages/parametros-e-social/parametros-e-social.component';
import { ParametrosComponent } from './pages/parametros/parametros.component';
import { RecursosHumanosComponent } from './pages/recursos-humanos/recursos-humanos.component';
import { ReinfComponent } from './pages/reinf/reinf.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { RepositoriosComponent } from './pages/repositorios/repositorios.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'e-social',
    component: ESocialComponent
  },
  {
    path: 'reinf',
    component: ReinfComponent
  },
  {
    path: 'repositorios',
    component: RepositoriosComponent
  },
  {
    path: 'comissao',
    component: ComissaoComponent
  },
  {
    path: 'financeiro',
    component: FinanceiroComponent
  },
  {
    path: 'orcamentos-gmp',
    component: OrcamentosGMPComponent
  },
  {
    path: 'relatorios',
    component: RelatoriosComponent
  },
  {
    path: 'recursos-humanos',
    component: RecursosHumanosComponent
  },
  {
    path: 'parametros',
    component: ParametrosComponent
  },
  {
    path: 'parametros-e-social',
    component: ParametrosESocialComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'sidemenu',
    component: SidemenuComponent
  },
  {
    path: 'dashboard/sistema',
    component: SistemaComponent
  },
  {
    path: 'dashboard/gerais',
    component: GeraisComponent
  }, 
  {
    path: 'dashboard/financeiro',
    component: DashboardFinanceiroComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
