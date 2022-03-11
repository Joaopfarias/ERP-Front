import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ESocialComponent } from './pages/e-social/e-social.component';
import { ReinfComponent } from './pages/reinf/reinf.component';
import { RepositoriosComponent } from './pages/repositorios/repositorios.component';
import { ComissaoComponent } from './pages/comissao/comissao.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { ParametrosComponent } from './pages/parametros/parametros.component';
import { RecursosHumanosComponent } from './pages/recursos-humanos/recursos-humanos.component';
import { ParametrosESocialComponent } from './pages/parametros-e-social/parametros-e-social.component';
import { OrcamentosGMPComponent } from './pages/orcamentos-gmp/orcamentos-gmp.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ESocialComponent,
    ReinfComponent,
    RepositoriosComponent,
    ComissaoComponent,
    FinanceiroComponent,
    RelatoriosComponent,
    ParametrosComponent,
    RecursosHumanosComponent,
    ParametrosESocialComponent,
    OrcamentosGMPComponent,
    HeaderComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
