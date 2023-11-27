import React from 'react';
import { Container, Typography } from '@mui/material';
import Paragraph from '../../../components/paragraph';
import TextImage from '../../../components/text-image';
import { Foto1, Foto2, Foto3, Teste1, Teste2, Teste3Adailson, Teste3Joao, Teste3Marcelo, Teste3Mariana, Teste3Renan } from '../../../assets/reports/report5';

const Report5 = () => {
  return (
    <Container style={{marginTop: '50px'}}>
      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Introdução</Typography>
      <Paragraph>
        Sendo um sentido muito importante para o ser humano, a audição humana é um sistema muito complexo que permite
        que o ser humano processe ondas sonoras de diversas frequências. Assim, é natural que com o passar do tempo ele
        vá tendo seu potencial reduzido, tornando comum a realização de testes capazes de avaliar a qualidade do sistema
        auditivo de uma pessoa.
      </Paragraph>

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Objetivo</Typography>
      <Paragraph>
        O objetivo deste documento é apresentar e discutir os resultados de alguns testes realizados em sala de aula,
        bem como apresentar outros testes que podem ser utilizados e quais seus propósitos.
      </Paragraph>

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Metodologia</Typography>
      <Paragraph>
        Para o desenvolvimento deste relatório foram realizados, primeiramente, três testes psicoacústicos: Teste de
        Faixa Audível, Teste de Mascaramento de Tons Harmônicos ou Teste de Localização de Fonte Sonora.
      </Paragraph>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Teste de Faixa Audível</Typography>
      <Paragraph>
        O objetivo do teste de Faixa Audível é determinar quais frequências sonoras uma pessoa é capaz de escutar. Sua
        realização é bem simples, uma pessoa deverá ouvir um áudio que irá iniciar com uma frequência bem baixa e essa
        frequência será incrementada aos poucos. A pessoa deverá falar em qual frequência ela começou a ouvir algum som
        e em qual frequência ela não consegue mais ouvir, resultando assim em uma faixa de frequência audível da pessoa.
      </Paragraph>
      <Paragraph>
        Teste como esse devem ser feitos em ambientes controlados, afinal o volume, qualidade do dispositivo de saída,
        ruído ambiente entre outros fatores externos podem interferir nos resultados obtidos.
      </Paragraph>
      <Paragraph>
        Na versão realizada, os testes foram feitos sob três circunstâncias: com fones envolventes, sem fones de
        ouvido/com fones não envolventes e sem fones com o celular. A tabela com os resultados obtidos estão listados na
        Img. 1, abaixo:
      </Paragraph>
      <TextImage image={Teste1}  imageNumber={1} subtitle='Tabela com os resultados obtidos no teste de Faixa Audível'/>
      <Paragraph>
        Um resultado interessante que pode ser observado é que, para a maioria dos participantes a frequência mais alta
        audível foi maior quando os participantes não estavam utilizando fones de ouvido envolventes. Isso pode ser
        explicado se levarmos em consideração que as saídas de aúdio de diferentes dispositivos possuem diferentes
        resposta de frequência, incfluenciando no resultado obtido. Além disso, o volume determinado em cada
        cenário também pode ter influenciado nos resultados.
      </Paragraph>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Teste de Mascaramento de Tons Harmônicos</Typography>
      <Paragraph>
        O teste de Mascaramento de Tons Harmônicos tem o objetivo de averiguar o efeito de mascaramento de frequência em
         tons harmônicos, como em oitavas em que um tom de frequência é o dobro do outro, por meio de nossa percepção
         auditiva. O mascaramento em frequência é a interferência causada por algumas frequências em cima de outras, em
         outras palavras, um tom de maior intensidade faz com que outros tons, com frequências próximas e intensidades
         menores, sejam mascarados.
      </Paragraph>
      <Paragraph>
        O teste consiste em escutar um único áudio que possui um som em dois tons harmônicos de frequência diferentes
        (f1 e f2), mas inicialmente com a mesma intensidade sonora. No entanto, o áudio é reproduzido diversas vezes e
        cada vez que isso acontece, o tom f2 é atenuado em - 3 dB até o tom f1 encobrir ou mascarar completamente em o
        tom f2. O mesmo teste é realizado com o tom f2 mascarando f1. Além disso, outras frequências são testadas como
        tons f1 e f2, tais frequências são f1 = 2 kHz e f2 = 1,2 kHz, f1 =  600 Hz e f2 = 1 kHz e f1 = 2,4 kHz e f2 = 4
        kHz.
      </Paragraph>
      <Paragraph>
        Para realizar o teste de Mascaramento de Tons Harmônicos foi recomendado o uso dos fones envolventes. Assim, a
        Tabela 2 mostra o resultado do teste de mascaramento em frequência:
      </Paragraph>
      <TextImage image={Teste2}  imageNumber={2} subtitle='Tabela com os resultados obtidos no teste de Mascaramento de Tons Harmônicos'/>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Teste de Localização de Fonte Sonora</Typography>
      <Paragraph>
        O Teste de Localização de Faixa Sonora tem como objetivo avaliar a capacidade do indivíduo de localizar uma
        fonte sonora utilizando apenas sua audição. Para isso foram utilizados dois sons de teste: Um som de sino e um
        som de chaves balançando.
      </Paragraph>
      <Paragraph>
        O indivíduo a ser testado deve sentar-se em uma cadeira, e utilizar uma venda para bloquear sua visão, e uma
        capacete com um transferidor para medição de ângulos. Os outros alunos devem utilizar um barbante para medir o
        ângulo entre o centro da cabeça do indivíduo realizando o teste e a fonte sonora em posição arbitrariamente
        escolhida pelo grupo.
      </Paragraph>
      <TextImage image={Foto1}  imageNumber={3} subtitle='Capacete utilizado para o teste de Localização de Fonte Sonora.'/>
      <TextImage image={Foto2}  imageNumber={4} subtitle='Exemplo de montagem do teste  de Localização de Fonte Sonora, com uma pessoa vendada e usando o capacete, um tripé contendo a caixa de som e mais uma pessoa medindo os ângulos com um barbante.'/>
      <TextImage image={Foto3}  imageNumber={5} subtitle='Exemplo de montagem do teste de Localização de Fonte Sonora, a uma distância maior, possibilitando uma visão mais ampla da montagem.'/>
      <Paragraph>
        Em seguida, será tocado o som de teste, e o indivíduo realizando o teste deverá apontar para a direção em que
        acredita que está a fonte sonora. Este processo é repetido três vezes para o som de chaves, três vezes com o som
        de sino, e três vezes com um som arbitrário escolhido pelo grupo, com a posição da fonte sendo alterada entre
        cada teste.
      </Paragraph>
      <Paragraph>
        Em nosso experimento, cada aluno teve seu turno realizando a localização, enquanto o restante decidia as
        posições das fontes sonoras. Na tabela abaixo estão os resultados obtidos.
      </Paragraph>
      <TextImage image={Teste3Adailson}  imageNumber={6} subtitle='Resultados obtidos enquanto Adailson realizava o teste de Localização de Fonte Sonora.'/>
      <br/>
      <TextImage image={Teste3Joao}  imageNumber={7} subtitle='Resultados obtidos enquanto Joao realizava o teste de Localização de Fonte Sonora.'/>
      <br/>
      <TextImage image={Teste3Marcelo}  imageNumber={8} subtitle='Resultados obtidos enquanto Marcelo realizava o teste de Localização de Fonte Sonora.'/>
      <br/>
      <TextImage image={Teste3Mariana}  imageNumber={9} subtitle='Resultados obtidos enquanto Mariana realizava o teste de Localização de Fonte Sonora.'/>
      <br/>
      <TextImage image={Teste3Renan}  imageNumber={10} subtitle='Resultados obtidos enquanto Renan realizava o teste de Localização de Fonte Sonora.'/>
      <br/>

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Discussões</Typography>
      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Conclusões sobre Aspectos Psicoacústicos para Cada Integrante do Grupo</Typography>
      <Paragraph>
        Adailson: <br/>
        <ul style={{textAlign: 'justify', textIndent: '0px'}}>
          <li><b>Teste de Faixa Audível:</b> Demonstrou uma boa faixa auditiva em todas as condições, sugerindo sensibilidade a uma ampla gama de frequências.</li>
          <li><b>Teste de Mascaramento de Tons Harmônicos:</b> Mostrou uma atenuação de -12 dB, indicando boa capacidade de discriminação entre tons harmônicos.</li>
          <li><b>Teste de Localização de Fonte Sonora:</b> A diferença entre a direção do som real e a direção apontada, variou de 2° a 110°, que é uma variação considerável, mas compreensível, considerando que a audição de nossos ouvidos variam individualmente e sem o auxílio da visão, é comum que ocorra certa desorientação.</li>
        </ul>
      </Paragraph>

      <Paragraph>
        João: <br/>
        <ul style={{textAlign: 'justify', textIndent: '0px'}}>
          <li><b>Teste de Faixa Audível:</b> Boa faixa auditiva, similar a Adailson.</li>
          <li><b>Teste de Mascaramento de Tons Harmônicos:</b> Exibiu atenuação consistente de -12 dB, indicando habilidade na percepção de tons harmônicos.</li>
          <li><b>Teste de Localização de Fonte Sonora:</b> A diferença entre a direção do som real e a direção apontada, variou de 2° a 86°, indicando uma percepção parecida com a do Adailson.</li>
        </ul>
      </Paragraph>

      <Paragraph>
        Marcelo: <br/>
        <ul style={{textAlign: 'justify', textIndent: '0px'}}>
          <li><b>Teste de Faixa Audível:</b> Faixa auditiva ampla, com resultados semelhantes aos demais.</li>
          <li><b>Teste de Mascaramento de Tons Harmônicos:</b> Apresentou atenuação consistente de -12 dB, com excessão de quando o tom encobridor era de 4 kHz e o tom mascarado de 2,4 kHz, nesse caso a atenuação alcançada foi de -15dB, demonstrando um desempenho melhor.</li>
          <li><b>Teste de Localização de Fonte Sonora:</b> A diferença entre a direção do som real e a direção apontada, variou de 0° a 114°, mas é interessante ressaltar que quando o áudio era arbitrário, o desempenho foi consideravelmente melhor (variando de 0° a 9°), o que indica que pode indicar mais facilidade com alguns tipos de sons do que com outros.</li>
        </ul>
      </Paragraph>

      <Paragraph>
        Mariana:<br/>
        <ul style={{textAlign: 'justify', textIndent: '0px'}}>
          <li><b>Teste de Faixa Audível:</b> Resultados similares aos demais, com boa faixa auditiva.</li>
          <li><b>Teste de Mascaramento de Tons Harmônicos:</b> Exibiu atenuação consistente de -12 dB, indicando habilidade na percepção de tons harmônicos.</li>
          <li><b>Teste de Localização de Fonte Sonora:</b> A diferença entre a direção do som real e a direção apontada, variou de 0° a 17°, mostrando uma consistência maior ao localizar a origem de sons.</li>
        </ul>
      </Paragraph>

      <Paragraph>
        Renan: <br/>
        <ul style={{textAlign: 'justify', textIndent: '0px'}}>
          <li><b>Teste de Faixa Audível:</b> Boa faixa auditiva, semelhante aos outros participantes.</li>
          <li><b>Teste de Mascaramento de Tons Harmônicos:</b> Apresentou atenuação consistente de -12 dB, com exceção do cenário em que as frequências eram de 4 kHz e 2,4 kHz em que as atenuações atingidas forma de -15 dB, indicando um melhor desempenho.</li>
          <li><b>Teste de Localização de Fonte Sonora:</b> A diferença entre a direção do som real e a direção apontada, variou de 0° a 90°, o que aponta um comportamento semelhante ao do Adailson e do João.</li>
        </ul>
      </Paragraph>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Descrição de Outro Teste Psicoacústico Não Realizado:</Typography>
      <Paragraph>
        Um teste adicional que não foi explorado nesta experiência seria o "Efeito de Fundo Sonoro na Discriminação de
        Frequência". Este teste investiga como a presença de um som de fundo constante afeta a capacidade de
        discernir frequências específicas. Essa abordagem poderia fornecer insights valiosos sobre como o ambiente
        sonoro circundante influencia a percepção auditiva em situações do cotidiano.
      </Paragraph>
      <Paragraph>
        É possível realizar uma versão simplificada deste teste em sites como o <a href="https://www.checkhearing.org/winSpeechTest.php">CheckHearing</a>.
      </Paragraph>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Indicação de Trabalho sobre Novo Resultado de Percepção Psicoacústica:</Typography>
      <Paragraph>
        Recomendamos a leitura do artigo <a href='https://agencia.fapesp.br/zumbido-fantasma/8285'>"Avanços Recentes em Percepção de Sons Fantasmas"</a> para
        explorar um novo resultado na percepção psicoacústica não abordado nas aulas. O estudo aborda fenômenos
        auditivos intrigantes relacionados à percepção de sons que não têm uma fonte física aparente, proporcionando uma
        visão inovadora e estimulante para os interessados na área.
      </Paragraph>

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Conclusão</Typography>
      <Paragraph>
        Os resultados demonstraram a variabilidade nas características psicoacústicas entre os participantes.
        A análise dos dados forneceu insights sobre a sensibilidade a diferentes frequências e o efeito do mascaramento
        harmônico. O teste de localização de fonte sonora revelou a capacidade de discernir a direção da fonte com base
        no som.
      </Paragraph>
      <Paragraph>
        É notável que a percepção auditiva é um fenômeno complexo e que varia muito de pessoa para pessoa. Foi possível
        observar que alguns participantes apresentaram resultados mais consistentes que outros, mas ainda assim, todos
        apresentaram resultados dentro do esperado.
      </Paragraph>
    </Container>
  );
}

export default Report5;
