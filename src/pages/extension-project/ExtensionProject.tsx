import React from 'react';
import { Container, Typography } from '@mui/material';
import Paragraph from '../../components/paragraph';
import TextImage from '../../components/text-image';
import TextVideo from '../../components/text-video';
import { Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14, Apresentacao, Explicacao, Entrevista1, Entrevista2} from '../../assets/extension-project'
import TextPdf from '../../components/text-pdf';

const ExtensionProject = () => {
  return (
    <Container style={{marginTop: '50px'}}>
      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>1. Introdução</Typography>

      <Paragraph>
        Nos últimos anos, a realidade virtual (VR) emergiu como uma tecnologia inovadora, transformando a maneira como
        interagimos com ambientes digitais. Este projeto propõe uma abordagem de ensino envolvente e educativa, utilizando
        óculos de realidade virtual para criar um ambiente tridimensional digital repleto de figuras geométricas. A proposta
        visa não apenas proporcionar uma experiência imersiva e estimulante para os visitantes, mas também integrar elementos
        educativos, desafiando os participantes a explorar e compreender propriedades fundamentais das figuras geométricas
        tridimensionais.
      </Paragraph>

      <Paragraph>
        Cada visitante será imerso em um ambiente 3D único, onde encontrará desafios de geometria como exercícios para
        identificar características específicas de sólidos, como áreas, faces e vértices. Ao utilizar a realidade virtual como
        ferramenta de ensino, o projeto busca criar uma conexão mais tangível entre os conceitos abstratos da geometria
        tridimensional e a percepção prática do participante.
      </Paragraph>

      <Paragraph>
        Ao longo deste trabalho, exploraremos os aspectos técnicos da implementação do projeto, os desafios encontrados no
        planejamento da experiência em realidade virtual e as reações dos participantes diante dessa abordagem inovadora.
      </Paragraph>

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>2. Objetivo</Typography>

      <Paragraph>
        O presente trabalho tem como principal objetivo desenvolver e implementar um projeto educativo inovador, utilizando a
        tecnologia de realidade virtual (VR) para a exploração e compreensão de figuras geométricas tridimensionais. Através
        do uso de óculos VR, buscou-se proporcionar uma experiência única e educativa para os participantes e também
        contribuir para o avanço do uso da realidade virtual como uma ferramenta eficaz no ensino e na compreensão de
        conceitos geométricos tridimensionais.
      </Paragraph>

      <Paragraph>
        Especificamente, esperou-se atingir os seguintes objetivos:
      </Paragraph>

      <Paragraph>
        <b>Experiência Imersiva: </b>Criar um ambiente virtual envolvente, através do qual os participantes sintam-se completamente
        imersos em um espaço digital tridimensional.
      </Paragraph>

      <Paragraph>
        <b>Exploração Ativa: </b>Estimular a participação ativa dos visitantes, desafiando-os a concluir desafios como contar áreas,
        faces e vértices das figuras apresentadas, promovendo assim a aplicação prática dos conceitos geométricos aprendidos.
      </Paragraph>

      <Paragraph>
        <b>Integração da Tecnologia VR: </b>Promover o uso da tecnologia de realidade virtual como método educacional alternativo.
      </Paragraph>

      <Paragraph>
        <b>Avaliação da Aprendizagem: </b>Avaliar o impacto educativo da abordagem, analisando a capacidade dos participantes em
        compreender e aplicar conceitos geométricos tridimensionais durante a experiência em realidade virtual.
      </Paragraph>

      <Paragraph>
        <b>Feedback dos Participantes: </b>Coletar e analisar o feedback dos participantes para compreender melhor as percepções,
        desafios e benefícios percebidos durante a experiência, visando aprimorar futuras iterações do projeto.
      </Paragraph>

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>3. Materiais e Metodologia</Typography>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>3.1. Materiais</Typography>

      <Paragraph>
        O elemento principal do experimento é o óculos VR. Ele possui um compartimento para acomodar o celular que será
        utilizado como tela, um conector P2 para captar o áudio do celular e reproduzir nos fones envolventes, um ajuste
        lateral de zoom, um ajuste de volume e alças de fixação para cabeça.
      </Paragraph>

      <TextImage image={Img1} imageNumber={1} subtitle='Óculos de realidade virtual utilizado para a experiência Math VR' width={700}/>

      <Paragraph>
        As lentes possuem ajuste de distância para melhor reproduzir a imagem estereoscópica.
      </Paragraph>

      <TextImage image={Img2} imageNumber={2} subtitle='Vista interna do óculos de realidade virtual utilizado' width={700}/>

      <Paragraph>
        Foi utilizado um celular relativamente comum, bastando somente ter um sensor giroscópico para sensoriar a posição e
        rotação dimensional do dispositivo e enviar para o aplicativo, que por sua vez controla a imagem que deve aparecer na
        tela.
      </Paragraph>


      <TextImage image={Img3} imageNumber={3} subtitle='Celular comum com sensor giroscópico' width={700}/>

      <Paragraph>
        No dia da apresentação utilizamos um monitor com conexão HDMI e um cabo conversor para USB do tipo C com o
        objetivo de reproduzir em tempo real o que o visitante estava visualizando. Também utilizamos um notebook para
        apresentar slides com informações do nosso projeto. Os slides estão disponíveis no Arquivo 1, abaixo.
      </Paragraph>


      <TextImage image={Img4} imageNumber={4} subtitle='Montagem da bancada para a experiência Math VR. Nota-se o espelhamento da tela do smartphone para os outros dispositivos' width={700}/>

      <TextPdf pdfPath={Apresentacao} fileNumber={1} subtitle='Slides utilizados na apresentação.'/>


      <Paragraph>
        Com o intuito de ter um retorno da experiência do visitante, criamos um Google Forms solicitando algumas informações
        relevantes para o projeto.
      </Paragraph>



      <TextImage image={Img5} imageNumber={5} subtitle='Formulário a ser preenchido após o término da participação' width={700}/>


      <Paragraph>
        O aplicativo que contém os desafios matemáticos tem o nome “Vr Math” e se encontra na Google Play Store, no
        seguinte  <a href='https://play.google.com/store/apps/details?id=com.acelearning.mathvr '>link</a>. Também é
        possível fazer download do aplicativo através deste <a href='https://drive.google.com/drive/folders/1LvG3iMwXpM9Y9dsbt5gdcdq2HJJvHOuC?usp=sharing'>Drive</a>.
      </Paragraph>


      <TextImage image={Img6} imageNumber={6} subtitle='Aplicativo Vr Math para celular' width={700}/>


      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>3.2. Metodologia</Typography>

      <Paragraph>
        O projeto Math VR foi apresentado na UFABC no dia 26 de Outubro de 2023 para alunos e professores do ensino
        fundamental e médio, além de alguns estudantes da própria universidade. No evento foram apresentados diversos
        projetos de extensão de estudantes das disciplinas de "Codificação de Sinais e Multimídia" e "Jogos Digitais,
        Aspectos Técnicos e Aplicações", dentre eles o projeto Math VR, apresentado neste relatório.
      </Paragraph>

      <Paragraph>
        A apresentação do projeto na exposição foi dividida em cinco etapas:
      </Paragraph>

      <Paragraph>
        <b>3.2.1 Apresentação Inicial: </b>
        O evento começou com uma apresentação introdutória sobre a importância da inovação no ensino e os benefícios da
        realidade virtual na educação. Isso estabeleceu o contexto para a introdução da ferramenta Math VR.
      </Paragraph>

      <Paragraph>
        <b>3.2.2 Demonstração Prática: </b>
        Os alunos foram conduzidos por uma demonstração prática do aplicativo Math VR. Cada etapa foi explicada para garantir
        que os participantes compreendessem como usar os óculos de realidade virtual e interagir com o aplicativo.
      </Paragraph>

      <Paragraph>
        <b>3.2.3 Atividades Interativas: </b>
        Após a demonstração, os alunos participaram de atividades interativas dentro do aplicativo, como jogos de matemática
        envolventes e desafios relacionados à trigonometria. Isso permitiu que experimentassem conceitos matemáticos de
        maneira lúdica e dinâmica.
      </Paragraph>

      <Paragraph>
        <b>3.2.4 Sessão de Perguntas e Respostas: </b>
        Uma sessão de perguntas e respostas foi realizada para fornecer aos alunos a oportunidade de compartilhar suas
        experiências e esclarecer dúvidas sobre o uso da tecnologia VR no aprendizado de matemática.
      </Paragraph>

      <Paragraph>
        <b>3.2.5 Coleta de Feedback: </b>
        Ao final da apresentação, os alunos foram incentivados a fornecer feedback sobre sua experiência utilizando o google
        forms. Isso inclui opiniões sobre a usabilidade do aplicativo, a eficácia dos óculos de realidade virtual e sugestões
        para melhorias futuras.
      </Paragraph>

      <Paragraph>
        Para ilustrar melhor como foi feita a apresentação do projeto, realizou-se a gravação de um vídeo que mostra, de
        forma simplificada e resumida, como foi a apresentação do projeto Math VR na UFABC. O vídeo está disponível no
        Vídeo 1, abaixo
      </Paragraph>

      <TextVideo video={Explicacao} videoType='video/mp4' videoNumber={1} subtitle='Apresentação sobre o projeto Math VR realizada na UFABC no dia 26/10/2023.'/>

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>4. Resultados e Discussão</Typography>

      <Paragraph>
        Para a coleta de dados referentes a experiência dos visitantes que vieram ao nosso estande realizar o experimento
        multimídia Math VR, foram propostos três formulários que podiam ser acessados através de diferentes QR codes presentes
        no estande, sendo dois formulário pré-estabelecidos pelos organizadores do evento para avaliação do experimento (um
        para alunos e outro para professores) e um formulário proposto por nosso grupo para coleta de dados do experimento
        Math VR.
      </Paragraph>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>4.1. Entrevistas com participantes</Typography>

      <TextVideo video={Entrevista1} videoType='video/mp4' videoNumber={2} subtitle='Entrevista com um aluno da UFABC que se interessou pelo projeto.'/>

      <TextVideo video={Entrevista2} videoType='video/mp4' videoNumber={3} subtitle='Entrevista com professores convidados sobre o projeto.'/>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>4.2. Formulário de Avaliação dos Visitantes da experiência VR</Typography>

      <Paragraph>
        Esse formulário foi proposto pelo grupo para coleta de dados do experimento Math VR. Inicialmente foram
        coletados os nomes e idades dos participantes da experiência Math VR num total de cinco pessoas que preencheram
        o formulário. Então, a partir desses dados é observado incialmente que 60% do público é maior de idade e
        possivelmente são professores ou estudantes da UFABC e os outros 40% são alunos visitantes. Dentre esse público, verificamos quantas
        pessoas possuíam conhecimentos prévios em geometria devido a experiência Math VR se tratar de jogos e quizzes em
        realidade virtual para o aprendizado de geometria, e cobteu-se que 80% do público já possuía alguns
        conhecimentos prévios sobre geometria, resultado coerente devido ao público majoritário que preencheu o
        formulário possuir mais de 18 anos.
      </Paragraph>

      <TextImage image={Img7} imageNumber={7} subtitle='Idade dos participantes da pesquisa.' width={900}/>

      <TextImage image={Img8} imageNumber={8} subtitle='Respostas dos participantes sobre conhecimento prévio sobre geometria.' width={900}/>

      <Paragraph>
        As próximas duas perguntas foram relacionadas ao desafio Math VR. Ao todo haviam sete questões relacionadas ao
        número de vértices, faces ou arestas de um sólido ou uma figura geométrica, assim, a partir dos dados
        apresentados no histograma, uma pessoa acertou as 7 questões, uma pessoa acertou 6 questões, duas pessoas
        acertaram 5 questões e uma pessoas acertou 3 questões. Dentre essas questões, 80% do público avaliou as questões
        relacionadas ao número de arestas como as mais difíceis e tal resultado foi observado pelo nosso grupo na
        prática, pois diversas vezes tivemos que explicar aos visitantes o conceito do que são arestas.
      </Paragraph>

      <TextImage image={Img9} imageNumber={9} subtitle='Respostas dos participantes sobre quantos desafios eles acertaramm na expreriência de VR.' width={900}/>

      <TextImage image={Img10} imageNumber={10} subtitle='Opnião dos alunos sobre qual dos desafios foi mais difícil.' width={900}/>

      <Paragraph>
        As duas últimas perguntas foram em relação à realidade virtual através dos óculos VR. Assim, é observado que
        100% do público não apresentou qualquer desconforto, náusea ou vómito ao utilizar os óculos VR e portanto os
        óculos são seguros. Além disso, 60% do público já possuía alguma experiência com realidade virtual, mas 40%
        obteve sua primeira experiência em nosso experimento Math VR.
      </Paragraph>

      <TextImage image={Img11} imageNumber={11} subtitle='Respostas dos participantes indicando se sentiram algum mal estar ao utilizar o óculos VR.' width={900}/>

      <TextImage image={Img12} imageNumber={12} subtitle='Respostas dos participantes sobre experiências prévias com óculos VR.' width={900}/>

      <Paragraph>
        Portanto, através dos dados coletados pelo grupo, a realidade virtual mostrou-se como uma alternativa viável,
        próspera e segura para o ensino de questões de matemática para os alunos do ensino fundamental e médio.
      </Paragraph>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>4.3. Formulário de Avaliação da experiência VR dos alunos visitantes</Typography>

      <Paragraph>
        Esse formulário foi proposto pelos organizadores do evento para os alunos participantes realizarem a avaliação
        do experimento Math VR. Neste formulário tivemos quatro alunos participantes, um público majoritariamente do
        ensino fundamental II que avaliou positivamente com notas 4 e 5 a nossa apresentação do experimento, a nossa
        interação com o público e o conteúdo apresentado de aprendizagem de geometria com o uso da realidade virtual.
      </Paragraph>

      <TextImage image={Img13} imageNumber={13} subtitle='Opniões dos estudantes sobre o projeto apresentado.' width={900}/>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>4.4. Formulário de avaliação da experiência VR dos professores visitantes</Typography>

      <Paragraph>
        Esse formulário foi proposto pelos organizadores do evento para os professores participantes realizarem a
        avaliação do experimento Math VR. Um total de sete professores responderam ao questionário e avaliaram
        positivamente com nota 4 ou 5 a estética multimídia do nosso estande Math VR, o desenvolvimento da competência
        STEAM no qual nosso experimento foi focado para o aprendizado de matemática ao ensino fundamental I e II, a
        nossa interação com o público geral e a didática com o público ao apresentar as questões sobre realidade virtual
        e o experimento math VR.
      </Paragraph>

      <TextImage image={Img14} imageNumber={14} subtitle='Opniões dos professores visitantes sobre o projeto apresentado.' width={900}/>


      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>4.5. Opiniões do grupo</Typography>

      <Paragraph>
        Grande quantidade de QR codes tornou o evento confuso e maçante para os participantes, incluindo não apenas
        alunos e professores visitantes, mas também a comunidade interna. Acreditamos que isso foi um fator que afetou
        fortemente o engajamento com as atividades propostas pelos grupos durante o evento como um todo.

        Além disso, também notamos que muitas pessoas queriam responder à pesquisa, no entanto não tinham acesso à internet
        ou a um celular que permitisse o preenchimento do formulário. No final do evento foram disponibilizados formulários
        físicos que permitiram que mais pessoas respondessem à pesquisa, mas ainda assim acreditamos que a experiência teria
        sido mais completa se essa opção estivesse disponível desde o início.

        Por fim, sentimos falta de um momento de interação entre os grupos, que permitisse a troca de experiências e
        apresentação dos projetos entre nós. Havia um grande número de grupos e acreditamos que isso teria sido uma
        oportunidade não só de aprendizado, mas também de socialização entre os participantes e divertimento.
      </Paragraph>

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>5. Conclusão</Typography>

      <Paragraph>
        A apresentação bem-sucedida do projeto demonstrou que a tecnologia de óculos VR pode ser uma ferramenta eficaz
        para tornar o ensino de matemática mais atrativo. Notamos que muitos professores se mostraram muito interessados
        em aplicar métodos semelhantes ao que apresentamos em suas próprias aulas, mostrando a existência de uma oprortunidade
        muito grande de desenvolvimento mais aprofundado nessa área.
      </Paragraph>

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>6. Agradecimentos</Typography>

      <Paragraph>
        Gostaríamos de agradecer a universidade federal do ABC, bem como a todos os educadores e alunos que participaram
        e contribuíram para o sucesso deste projeto.
      </Paragraph>
    </Container>
  );
}

export default ExtensionProject;
