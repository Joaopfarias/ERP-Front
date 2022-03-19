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
import { BoletoAvulsoComponent } from './pages/financeiro/boleto-avulso/boleto-avulso.component';
import { OrcamentoComponent } from './pages/financeiro/orcamento/orcamento.component';
import { ContasAPagarComponent } from './pages/financeiro/contas-a-pagar/contas-a-pagar.component';
import { ContasAReceberComponent } from './pages/financeiro/contas-a-receber/contas-a-receber.component';
import { CnabContasAReceberComponent } from './pages/financeiro/contas-a-receber/cnab-contas-a-receber/cnab-contas-a-receber.component';
import { ExtratoBancarioComponent } from './pages/financeiro/contas-a-receber/extrato-bancario/extrato-bancario.component';
import { SistemaComponent } from './pages/dashboard/sistema/sistema.component';
import { UsuariosComponent } from './pages/dashboard/sistema/usuarios/usuarios.component';
import { EmpresasComponent } from './pages/dashboard/sistema/empresas/empresas.component';
import { DepartamentosComponent } from './pages/dashboard/sistema/departamentos/departamentos.component';
import { CboComponent } from './pages/dashboard/sistema/cbo/cbo.component';
import { BancoComponent } from './pages/dashboard/sistema/banco/banco.component';
import { CommonModule } from '@angular/common';
import { GeraisComponent } from './pages/dashboard/gerais/gerais.component';
import { DashboardFinanceiroComponent } from './pages/dashboard/dashboard-financeiro/dashboard-financeiro.component';
import { TarefasComponent } from './pages/dashboard/gerais/tarefas/tarefas.component';
import { MotivosDescontoComponent } from './pages/dashboard/dashboard-financeiro/motivos-desconto/motivos-desconto.component';
import { CargosComponent } from './pages/orcamentos-gmp/cargos/cargos.component';
import { EstabelecimentosComponent } from './pages/relatorios/estabelecimentos/estabelecimentos.component';
import { NaturezaComponent } from './pages/repositorios/natureza/natureza.component';
import { ParametrizacaoComponent } from './pages/comissao/parametrizacao/parametrizacao.component';
import { LoginComponent } from './login/login.component';
import { KeyuserComponent } from './pages/dashboard/keyuser/keyuser.component';
import { FuncionariosComponent } from './pages/dashboard/funcionarios/funcionarios.component';
import { TiposFuncionariosComponent } from './pages/dashboard/funcionarios/tipos-funcionarios/tipos-funcionarios.component';
import { FuncionarioComponent } from './pages/dashboard/funcionarios/funcionario/funcionario.component';
import { DependenteComponent } from './pages/dashboard/funcionarios/dependente/dependente.component';
import { AfastamentoComponent } from './pages/dashboard/funcionarios/afastamento/afastamento.component';
import { ExameMedicoComponent } from './pages/dashboard/funcionarios/exame-medico/exame-medico.component';
import { PlanoSaudeComponent } from './pages/dashboard/funcionarios/plano-saude/plano-saude.component';
import { SistemaVinculosComponent } from './pages/dashboard/sistema/sistema-vinculos/sistema-vinculos.component';
import { FuncionariosVinculosComponent } from './pages/dashboard/funcionarios/funcionarios-vinculos/funcionarios-vinculos.component';
import { KeyuserFolhasComponent } from './pages/dashboard/keyuser/keyuser-folhas/keyuser-folhas.component';
import { KeyuserDesligamentosComponent } from './pages/dashboard/keyuser/keyuser-desligamentos/keyuser-desligamentos.component';
import { KeyuserPrazosContratosComponent } from './pages/dashboard/keyuser/keyuser-prazos-contratos/keyuser-prazos-contratos.component';
import { KeyuserSituacaoComponent } from './pages/dashboard/keyuser/keyuser-situacao/keyuser-situacao.component';
import { KeyuserTiposDescansosComponent } from './pages/dashboard/keyuser/keyuser-tipos-descansos/keyuser-tipos-descansos.component';
import { FuncionariosDesligamentosComponent } from './pages/dashboard/funcionarios/funcionarios-desligamentos/funcionarios-desligamentos.component';
import { FuncionariosFolhasComponent } from './pages/dashboard/funcionarios/funcionarios-folhas/funcionarios-folhas.component';
import { FuncionariosPrazosContratosComponent } from './pages/dashboard/funcionarios/funcionarios-prazos-contratos/funcionarios-prazos-contratos.component';
import { FuncionariosSituacaoComponent } from './pages/dashboard/funcionarios/funcionarios-situacao/funcionarios-situacao.component';
import { FuncionariosTiposDescansosComponent } from './pages/dashboard/funcionarios/funcionarios-tipos-descansos/funcionarios-tipos-descansos.component';

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
    SidemenuComponent,
    BoletoAvulsoComponent,
    OrcamentoComponent,
    ContasAPagarComponent,
    ContasAReceberComponent,
    CnabContasAReceberComponent,
    ExtratoBancarioComponent,
    SistemaComponent,
    UsuariosComponent,
    EmpresasComponent,
    DepartamentosComponent,
    CboComponent,
    BancoComponent,
    GeraisComponent,
    DashboardFinanceiroComponent,
    TarefasComponent,
    MotivosDescontoComponent,
    CargosComponent,
    EstabelecimentosComponent,
    NaturezaComponent,
    ParametrizacaoComponent,
    LoginComponent,
    KeyuserComponent,
    FuncionariosComponent,
    TiposFuncionariosComponent,
    FuncionarioComponent,
    DependenteComponent,
    AfastamentoComponent,
    ExameMedicoComponent,
    PlanoSaudeComponent,
    SistemaVinculosComponent,
    FuncionariosVinculosComponent,
    KeyuserFolhasComponent,
    KeyuserDesligamentosComponent,
    KeyuserPrazosContratosComponent,
    KeyuserSituacaoComponent,
    KeyuserTiposDescansosComponent,
    FuncionariosDesligamentosComponent,
    FuncionariosFolhasComponent,
    FuncionariosPrazosContratosComponent,
    FuncionariosSituacaoComponent,
    FuncionariosTiposDescansosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatBadgeModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
