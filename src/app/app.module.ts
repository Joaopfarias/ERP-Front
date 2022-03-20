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
import { TiposComponent } from './pages/repositorios/tipos/tipos.component';
import { RepositoriosRepositoriosComponent } from './pages/repositorios/repositorios-repositorios/repositorios-repositorios.component';
import { ConfiguracaoComissaoComponent } from './pages/comissao/configuracao-comissao/configuracao-comissao.component';
import { SolicitacoesComponent } from './pages/financeiro/solicitacoes/solicitacoes.component';
import { FaturamentoComponent } from './pages/financeiro/faturamento/faturamento.component';
import { BoletosComponent } from './pages/financeiro/boletos/boletos.component';
import { NotasCanceladasComponent } from './pages/financeiro/notas-canceladas/notas-canceladas.component';
import { ProjetosComponent } from './pages/orcamentos-gmp/projetos/projetos.component';
import { MargensLucroComponent } from './pages/orcamentos-gmp/margens-lucro/margens-lucro.component';
import { GruposSociaisComponent } from './pages/orcamentos-gmp/grupos-sociais/grupos-sociais.component';
import { GruposPrecoComponent } from './pages/orcamentos-gmp/grupos-preco/grupos-preco.component';
import { TiposPrecoComponent } from './pages/orcamentos-gmp/tipos-preco/tipos-preco.component';
import { TiposSociaisComponent } from './pages/orcamentos-gmp/tipos-sociais/tipos-sociais.component';
import { EncargosSociaisComponent } from './pages/orcamentos-gmp/encargos-sociais/encargos-sociais.component';
import { ReferenciaPrecoComponent } from './pages/orcamentos-gmp/referencia-preco/referencia-preco.component';
import { PlanilhaCustosComponent } from './pages/orcamentos-gmp/planilha-custos/planilha-custos.component';
import { FaturamentosComponent } from './pages/orcamentos-gmp/faturamentos/faturamentos.component';
import { ClientesComponent } from './pages/relatorios/clientes/clientes.component';
import { PlanoContaComponent } from './pages/relatorios/plano-conta/plano-conta.component';
import { CentrosCustoComponent } from './pages/relatorios/centros-custo/centros-custo.component';
import { RecolhimentoImpostosComponent } from './pages/relatorios/recolhimento-impostos/recolhimento-impostos.component';
import { ComissoesPrevistasComponent } from './pages/relatorios/comissoes-previstas/comissoes-previstas.component';
import { ComissoesFaturadasComponent } from './pages/relatorios/comissoes-faturadas/comissoes-faturadas.component';
import { FluxoDeCaixaComponent } from './pages/relatorios/fluxo-de-caixa/fluxo-de-caixa.component';
import { EntradasSaidasComponent } from './pages/relatorios/entradas-saidas/entradas-saidas.component';
import { BoletosNaoPagosComponent } from './pages/relatorios/boletos-nao-pagos/boletos-nao-pagos.component';
import { LancamentosNaoPagosComponent } from './pages/relatorios/lancamentos-nao-pagos/lancamentos-nao-pagos.component';
import { TotalizacaoDeFaturamentosComponent } from './pages/relatorios/totalizacao-de-faturamentos/totalizacao-de-faturamentos.component';
import { FilialComponent } from './pages/dashboard/sistema/filial/filial.component';
import { SindicatoComponent } from './pages/dashboard/sistema/sindicato/sindicato.component';
import { SegmentoProdutosComponent } from './pages/dashboard/gerais/segmento-produtos/segmento-produtos.component';
import { RedeComponent } from './pages/dashboard/gerais/rede/rede.component';
import { BandeiraComponent } from './pages/dashboard/gerais/bandeira/bandeira.component';
import { EstabelecimentoComponent } from './pages/dashboard/gerais/estabelecimento/estabelecimento.component';
import { GeraisClienteComponent } from './pages/dashboard/gerais/gerais-cliente/gerais-cliente.component';
import { FornecedorComponent } from './pages/dashboard/gerais/fornecedor/fornecedor.component';
import { CentrosCustosComponent } from './pages/dashboard/dashboard-financeiro/centros-custos/centros-custos.component';
import { GruposPlanoDeContasComponent } from './pages/dashboard/dashboard-financeiro/grupos-plano-de-contas/grupos-plano-de-contas.component';
import { SubgruposPlanoDeContasComponent } from './pages/dashboard/dashboard-financeiro/subgrupos-plano-de-contas/subgrupos-plano-de-contas.component';
import { PlanoDeContasComponent } from './pages/dashboard/dashboard-financeiro/plano-de-contas/plano-de-contas.component';
import { PerfilAprovacaoComponent } from './pages/dashboard/dashboard-financeiro/perfil-aprovacao/perfil-aprovacao.component';
import { ServicosNotasFiscaisComponent } from './pages/dashboard/dashboard-financeiro/servicos-notas-fiscais/servicos-notas-fiscais.component';
import { UnidadesNegociosComponent } from './pages/dashboard/dashboard-financeiro/unidades-negocios/unidades-negocios.component';
import { LocaisCobrancaComponent } from './pages/dashboard/dashboard-financeiro/locais-cobranca/locais-cobranca.component';
import { LancamentoBancarioComponent } from './pages/financeiro/contas-a-pagar/lancamento-bancario/lancamento-bancario.component';
import { ImportarComponent } from './pages/financeiro/contas-a-pagar/importar/importar.component';
import { AprovacaoComponent } from './pages/financeiro/contas-a-pagar/aprovacao/aprovacao.component';
import { PagamentoComponent } from './pages/financeiro/contas-a-pagar/pagamento/pagamento.component';
import { CnabContasAPagarComponent } from './pages/financeiro/contas-a-pagar/cnab-contas-a-pagar/cnab-contas-a-pagar.component';
import { RelatoriosLancamentosBancariosComponent } from './pages/relatorios/relatorios-lancamentos-bancarios/relatorios-lancamentos-bancarios.component';

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
    FuncionariosTiposDescansosComponent,
    TiposComponent,
    RepositoriosRepositoriosComponent,
    ConfiguracaoComissaoComponent,
    SolicitacoesComponent,
    FaturamentoComponent,
    BoletosComponent,
    NotasCanceladasComponent,
    ProjetosComponent,
    MargensLucroComponent,
    GruposSociaisComponent,
    GruposPrecoComponent,
    TiposPrecoComponent,
    TiposSociaisComponent,
    EncargosSociaisComponent,
    ReferenciaPrecoComponent,
    PlanilhaCustosComponent,
    FaturamentosComponent,
    ClientesComponent,
    PlanoContaComponent,
    CentrosCustoComponent,
    RecolhimentoImpostosComponent,
    ComissoesPrevistasComponent,
    ComissoesFaturadasComponent,
    FluxoDeCaixaComponent,
    EntradasSaidasComponent,
    BoletosNaoPagosComponent,
    LancamentosNaoPagosComponent,
    TotalizacaoDeFaturamentosComponent,
    FilialComponent,
    SindicatoComponent,
    SegmentoProdutosComponent,
    RedeComponent,
    BandeiraComponent,
    EstabelecimentoComponent,
    GeraisClienteComponent,
    FornecedorComponent,
    CentrosCustosComponent,
    GruposPlanoDeContasComponent,
    SubgruposPlanoDeContasComponent,
    PlanoDeContasComponent,
    PerfilAprovacaoComponent,
    ServicosNotasFiscaisComponent,
    UnidadesNegociosComponent,
    LocaisCobrancaComponent,
    LancamentoBancarioComponent,
    ImportarComponent,
    AprovacaoComponent,
    PagamentoComponent,
    CnabContasAPagarComponent,
    RelatoriosLancamentosBancariosComponent
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
