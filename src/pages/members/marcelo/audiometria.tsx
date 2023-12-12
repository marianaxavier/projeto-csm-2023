import React from 'react';
import { Ear, EyeTest, TesteComFone, TesteSemFone, Zeiss1, Zeiss2, Zeiss3 } from '../../../assets/members/marcelo/audiometria';

const Audiometria = () => {
  return (
    <body style={{textAlign: 'justify', width: '1280px'}}>
      <div className="container">
        <header className="blog-header py-3">
          <div
            className="row flex-nowrap justify-content-between align-items-center"
          >
            <div className="col-4 pt-1">ESTI019 – Processamento Multimídia</div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              Marcelo Goulart Salinas Vega RA: 11201921598
            </div>
          </div>
        </header>
      </div>

      <main className="container">
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div className="col-md-10 px-0">
            <h1 className="display-4 fst-italic">
              ESTI019 – Processamento Multimídia Exercício de Audiometria e Visual
            </h1>
            <p className="lead my-3">
              Objetivos: Caracterizar a acuidade visual e características
              psicoacústicas de diferentes pessoas sob diferentes condições e
              comparar os resultados obtidos.
            </p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <div
              className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
            >
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">Áudio</strong>
                <h3 className="mb-0">Teste de Audição</h3>
                <p className="card-text mb-auto">
                  Teste gratuito criado por Stéphane Pigeon, que buscava uma forma
                  de avaliar sua recuperação auditiva online, e após não encontrar
                  uma solução adequada, optou por criar seu próprio teste.
                </p>
                <a
                  href=" http://hearingtest.online/"
                  className="stretched-link"
                  target="_blank"
                  >Faça também</a
                >
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  src={Ear}
                  alt="esquema-ouvido"
                  width="200"
                  height="250"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
            >
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">Visão</strong>
                <h3 className="mb-0">Teste de Visão</h3>
                <p className="mb-auto">
                  Teste de acuidade visual desenvolvido pela ZEISS, para tentar
                  detectar de forma ampla problemas visuais que podem necessitar
                  consulta com um de seus especialistas.
                </p>
                <a
                  href="https://visionscreening.zeiss.com/en-INT"
                  className="stretched-link"
                  target="_blank" rel="noreferrer"
                  >Faça também</a
                >
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  src={EyeTest}
                  alt="esquema-olho"
                  width="200"
                  height="250"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">Relatório</h3>

            <article className="blog-post">
              <h2 className="blog-post-title">Introdução</h2>
              <p className="blog-post-meta">by Marcelo</p>

              <p>
                Por meio desta página tenho como objetivo divulgar os resultados e
                considerações sobre os resultados obtidos dos testes de Acuidade
                Visual da ZEISS e do teste de Audiometria desenvolvido e
                disponibilizado por Stéphane Pigeon, comparando diferentes condições
                de execução dos testes e para que outros possam comparar com seus
                próprios resultados.
              </p>
              <hr />
              <p>
                O teste de audiometria de Stéphane Pidgeon busca avaliar a audição
                do usuário avaliando tanto sua percepção de intensidade sonora em
                diferentes frequências audíveis, mostrando que podem haver
                diferenças na capacidade de reconhecer sons de modo relacionado a
                sua frequência.
              </p>
              <p>O teste de acuidade visual da ZEISS ...</p>
              <h2>Realização dos Testes</h2>
              <p>Passo a passo para a realização de cada um dos testes</p>
              <p>
                Nesta secção inicial tentarei explicar de forma sucinta todas as
                etapas necessárias para acessar e completar cada um dos testes de
                forma adequada, de forma a facilitar esse procedimento para outros
                que buscam replicar este experimento, de forma a possibilitar a
                comparação de testes realizados sob as mesmas condições.
              </p>
              <h3>Audiometria</h3>
              <p>
                Para a realização deste teste será de extremamente importância estar
                em um ambiente silencioso e calmo, pois ruídos mesmo pequenos podem
                interferir na nossa percepção de som, e até mesmo mascarar sons de
                baixa intensidade. Um exemplo disso seria comparar nossa percepção
                de uma música quando escutamos ela no rádio do carro, e se a
                escutarmos com um fone de ouvidos, em casa, durante a madrugada,
                quando o ruído externo é muito menor.
              </p>
              <h4>Materiais Necessários:</h4>
              <ul>
                <li>
                  Conexão com a internet (Preferencialmente um computador ou laptop)
                </li>
                <li>Fones de ouvido</li>
                <li>Capacidade de imprimir página com o gráfico de resultados</li>
              </ul>
              <p>Etapas do procedimento:</p>
              <ol>
                <li>Acessar a página web do teste</li>
                <li>Calibrar volume do seu dispositivo</li>
                <li>Realização do Teste</li>
                <li>Obtenção dos Resultados</li>
              </ol>
              <p>Agora de forma mais detalhada:</p>
              <dl>
                <dt>Acessar a página web do teste</dt>
                <dd>
                  Basta abrir seu navegador de preferência e acessar a página
                  <a href="https://hearingtest.online/" target="_blank" rel="noreferrer"
                    >https://hearingtest.online/</a
                  >
                </dd>
                <dt>Calibrar volume do seu dispositivo</dt>
                <dd>
                  Para isto, encontre a seção '1. Calibrate your sound levels'
                  (Calibre seu nível de som) Onde encontrará um botão com um ícone
                  de duas mãos e uma legenda 'Calibration File'(Arquivo de
                  calibração).
                </dd>
                <dd>
                  Coloque seu fone de ouvido e clique no botão. Escutará um som de
                  uma pessoa esfregando as mãos. Agora retire seu fone e tente
                  replicar o som, esfregando suas mãos próximo ao seu nariz. Aqui
                  está seu primeiro diagnóstico: se não conseguir ouvir o barulho
                  dessa ação, sua perda auditiva pode ser considerada SEVERA.
                </dd>
                <dd>
                  Se chegou até aqui, podemos proseguir com o teste. Busque
                  aproximar o volume do som do botão com o som de calibração com o
                  som realizado por você ao esfregar as mãos. Após esta etapa,
                  podemos começar o teste.
                </dd>
                <dt>Realização do Teste</dt>
                <dd>
                  Realize o teste primeiramente utilizando o áudio do seu
                  dispositivo, salve seus resultados e depois refaça o teste, agora
                  com fone de ouvido de boa qualidade.
                </dd>
                <dd>
                  Logo abaixao da seção de calibração, você poderá encontrar o teste
                  de fato. Ele é composto por uma série de colunas com botões, onde
                  cada coluna representa uma frequência, em ordem crescente, e cada
                  fileira de botões representa um nível de intensidade sonora.
                </dd>
                <dd>
                  Para realização do teste, será necessário para cada coluna clicar
                  nos botões, em ordem de cima para baixo, até encontrar o som de
                  intensidade mais baixa que conseguir ouvir. Repita o processo para
                  as outras duas categorias que pode encontrar embaixo da grade de
                  botões: apenas ouvido esquerdo e apenas ouvido direito.
                </dd>
                <dt>Obtendo Resultados</dt>
                <dt></dt>
                <dd>
                  Agora que encontrou as intensidades sonoras mínimas perceptíveis,
                  encontre a seção '3. Review your personal audiogram', onde poderá
                  clicar em overview para visualizar as faixas de frequência e
                  intensidade sonora de ocorrências do dia a dia, como toques de
                  telefone, conversas, pássaros, etc.
                </dd>
                <dd>
                  Clique na opção 'Print - Save - Bookmark' e utilize seu método
                  preferido (print da tela, imprimir a página web como pdf) para
                  salvar seus resultados.
                </dd>
              </dl>
              <h4>Resultados Obtidos:</h4>
              <figure>
                <img
                  src={TesteSemFone}
                  className="img-thumbnail rounded"
                  alt="resultados sem fone"
                />
                <img
                  src={TesteComFone}
                  className="img-thumbnail rounded"
                  alt="resultados com fone"
                />
                <figcaption className="figure-caption">
                  Esquerda: Resultados do teste realizado sem fones de ouvido.
                </figcaption>
                <figcaption className="figure-caption">
                  Direita: Resultados do teste realizado com fones de ouvido.
                </figcaption>
              </figure>
              <h5>Análise:</h5>
              <p>
                Podemos ver que o teste sem fones de ouvido indicou leve perda de
                audição para diversas frequências, enquanto que o teste com fones de
                ouvido indicou perda apenas para frequências mais baixas.
              </p>
              <p>
                Essa diferença pode ser explicada em geral pela má qualidade de
                sistemas de som embarcados em laptops em comparação com fones de
                ouvido dedicados, que muitas vezes podem não reproduzir sons de
                forma adequada para determinadas frequências, que talvez possa ser
                atribuída a uma forma de baratear o custo de produção deste tipo de
                sistema com pouco impacto no usuário final, já que usuários que se
                importariam com a qualidade so som provavelmente possuem fones de
                ouvido de alta qualidade.
              </p>
              <p>
                Com estas considerações, podemos ainda concluir que existe de fato
                uma leve perda auditiva para as faixas de frequência mais baixas, já
                que foram um resultado comum em ambos os testes.
              </p>

              <h3>Acuidade Visual</h3>
              <p>
                Este teste criado pela ZEISS se propoe a medir diversas
                características da visão humana, como acuidade visual, contraste,
                percepção de cores, astigmatismo e campo de visão. Para realização
                deste teste é importante ter uma tela com alto brilho, em um
                ambiente claro e configurar de forma adequada o tamanho do conteúdo
                a ser exibido na tela.
              </p>
              <h4>Materiais Necessários:</h4>
              <ul>
                <li>
                  Conexão com a internet (Preferencialmente um computador ou laptop)
                </li>
                <li>
                  Um cartão para referência de tamanho do conteúdo a ser exibido
                </li>
                <li>Capacidade de imprimir página com os resultados</li>
              </ul>
              <p>Etapas do procedimento:</p>
              <ol>
                <li>Acessar a página web do teste</li>
                <li>Preparo para o teste</li>
                <li>Realizar Testes</li>
                <li>Obter Resultados</li>
              </ol>
              <p>Agora de forma mais detalhada:</p>
              <dl>
                <dt>Acessar a página web do teste</dt>
                <dd>
                  Basta abrir seu navegador de preferência e acessar a página
                  <a href="https://visionscreening.zeiss.com/en-INT" target="_blank" rel="noreferrer"
                    >https://visionscreening.zeiss.com/en-INT</a
                  >
                </dd>
                <dt>Preparo para o teste</dt>
                <dd>
                  Siga as etapas descritas a seguir:
                  <ol>
                    <li>Maximizar o brilho de seu dispositivo</li>
                    <li>
                      Ajustar tamanho do conteúdo de acordo com o cartão que tem em
                      mãos
                    </li>
                    <li>Use óculos/lentes, se precisar</li>
                    <li>Mantenha distância de um braço da tela</li>
                  </ol>
                </dd>
                <dt>Realização de Testes:</dt>
                <dd>
                  Serão realizados 5 testes sequenciais. Siga as instruções escritas
                  na tela conforme apareçam. Os testes terão como etapas:
                  <ol>
                    <li>
                      Escolha a seção que falta do círculo exibido na parte
                      superior. Ele ficará progressivamente menor.
                    </li>
                    <li>
                      Escolha a seção que falta do círculo exibido na parte
                      superior. Ele ficará progressivamente mais claro.
                    </li>
                    <li>
                      Diga qual o número que está escrito no círculo, se houver.
                    </li>
                    <li>
                      Diga se as linhas parecem iguais ao olhar para o centro do
                      círculo.
                    </li>
                    <li>
                      Olhe para o ponto e diga se as linhas e zonas parecem iguais,
                      e se alguma parte aparenta estar faltando.
                    </li>
                  </ol>
                  Durante o exame, será necessário alternar entre os olhos esquerdo
                  e direito, mas será informada a hora de trocar qual olho está
                  sendo testado.
                </dd>
              </dl>
              <h4>Resultados Obtidos:</h4>
              <figure>
                <img
                  src={Zeiss1}
                  className="img-thumbnail rounded"
                  alt="resultados"
                />
                <img
                  src={Zeiss2}
                  className="img-thumbnail rounded"
                  alt="resultados"
                />
                <img
                  src={Zeiss3}
                  className="img-thumbnail rounded"
                  alt="resultados"
                />
                <figcaption className="figure-caption">
                  Resultados dos testes individuais
                </figcaption>
              </figure>
              <h5>Análise:</h5>
              <p>
                Podemos ver que o teste indicou boa Acuidade, visão de Contraste,
                visão de cores, e não indicou sinais de astigmatismo. Porém, foi
                diagnosticada uma perda no campo de visão do olho direito.
              </p>
              <p>
                Um ponto importante que vale a pena ser mencionado é que o próprio
                teste indica que não é um diagnóstico médico, então não é totalmente
                confiável, mas esse resultado pode indicar a necessidade de
                agendamento de uma consulta com um especialista.
              </p>
            </article>
            <hr />
          </div>

          <div className="col-md-4">
            <div className="position-sticky" style={{top: '2rem'}}>
              <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">Minha experiência</h4>
                <p className="mb-0">
                  Este relatório retrata minha experiência com os testes de
                  capacidade auditiva de Stéphane Pigeon e acuidade visual da ZEISS,
                  assim como sintetiza os resultados de forma a torná-los mais
                  facilmente interpretáveis.
                </p>
              </div>

              <div className="p-4">
                <h4 className="fst-italic">Materiais e Bibliografia</h4>
                <ol className="list-unstyled mb-0">
                  <li>
                    <a href="https://hearingtest.online/" target="_blank" rel="noreferrer"
                      >Teste de Audiometria</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://visionscreening.zeiss.com/en-INT"
                      target="_blank" rel="noreferrer"
                      >Teste de Acuidade Visual</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://brieflands.com/articles/healthscope-65901.html"
                      target="_blank" rel="noreferrer"
                      >Uso de fones de ouvido e perda auditiva</a
                    >
                  </li>
                  <li>
                    Template e estilos utilizados do
                    <a
                      href="https://getbootstrap.com/docs/5.0/examples/"
                      target="_blank" rel="noreferrer"
                      >Bootstrap 5</a
                    >
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="blog-footer">
        <p>
          Blog template built for
          <a href="https://getbootstrap.com/">Bootstrap</a> by
          <a href="https://twitter.com/mdo">@mdo</a>.
        </p>
      </footer>
    </body>
  );
}

export default Audiometria;
