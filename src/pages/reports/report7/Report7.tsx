import React from 'react';
import { Container, Typography } from '@mui/material';
import Paragraph from '../../../components/paragraph';
import TextAudio from '../../../components/text-audio';
import { AudioJoao, AudioMariana, AudioRenan, Img1, Img10, Img11, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20, Img21, Img22, Img23, AudioMarcelo, Img31, Img32, Img33, Img34, Img35, Img36, Img37, AudioAdailson } from '../../../assets/reports/report7';
import TextImage from '../../../components/text-image';

const Report7 = () => {
  return (
    <Container style={{marginTop: '50px'}}>
      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Introdução</Typography>
      <Paragraph>
        Neste relatório, serão apresentados os resultados da análise LPC da voz, realizada com base no código do Colab
        disponibilizado pelo professor. O objetivo é analisar a forma de onda, o espectro sonoro/surdo e os modelos LPC
        para as gravações do grupo, comparando os resultados entre si.
      </Paragraph>


      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Metodologia</Typography>
      <Paragraph>
        Os algoritmos utilizados para analisar as vozes foram os seguintes:
      </Paragraph>
      <Paragraph>
        <ul style={{textAlign: 'justify', textIndent: '0px'}}>
          <li>
            <b>Separação U/UV:</b> O algoritmo utilizado para a separação U/UV foi o limiar de energia de tempo curto
            E1. O limiar E1 é calculado como a diferença entre o máximo e o mínimo da energia do sinal de voz. Se a
            energia do sinal de voz for maior que o limiar E1, então o segmento é considerado como sonoro. Caso
            contrário, o segmento é considerado como surdo;
          </li>
          <li>
            <b>Cálculo dos parâmetros LPC:</b> Cálculo dos parâmetros LPC: O algoritmo utilizado para o cálculo dos
            parâmetros LPC foi o algoritmo de autocorrelação. O algoritmo de autocorrelação calcula a correlação do
            sinal de voz consigo mesmo. Os parâmetros LPC são calculados como os coeficientes da série de Taylor da
            função de autocorrelação;
          </li>
          <li>
            <b>Estimativa da frequência fundamental:</b> O algoritmo utilizado para a estimativa da frequência
            fundamental foi o algoritmo pYIN. O algoritmo pYIN é um algoritmo de estimativa da frequência fundamental
            baseado em um modelo de filtro de Kalman.
          </li>
        </ul>
      </Paragraph>
      <Paragraph>
        Primeiro, para a separação U/UV, foi utilizado o limiar de energia de tempo curto E1, ajustado para 30% do máximo. Para a
        separação sonora/surda, foi utilizado o limiar E1voiced_lim, ajustado para 30% do máximo. Para a estimativa da
        f0, foi utilizado o algoritmo pYIN.
      </Paragraph>
      <Paragraph>
        Em seguida, considerando que análise LPC é uma técnica de análise de sinais que permite estimar a forma do
        espectro de um sinal, é baseada no modelo de autoregressão linear (AR) que é um modelo matemático que descreve a
        relação entre um sinal e suas próprias amostras atrasadas.
      </Paragraph>
      <Paragraph>
        A análise LPC é uma técnica eficaz para a análise da voz. Ela permite a separação da voz em segmentos sonoros e
        surdos, a determinação dos parâmetros LPC e a estimativa da frequência fundamental.
      </Paragraph>
      <Paragraph>
        A biblioteca em Python utilizada para a análise LPC foi a Librosa. A Librosa é uma biblioteca de código aberto
        para análise de áudio e música. Ela fornece uma ampla gama de funções para processamento de áudio, incluindo
        extração de características, classificação, detecção de eventos e síntese de áudio.
      </Paragraph>
      <Paragraph>
        As principais funções utilizadas da Librosa para a análise LPC foram as seguintes:
      </Paragraph>
      <Paragraph>
        <ul style={{textAlign: 'justify', textIndent: '0px'}}>
          <li><b>stft():</b> Função para realizar a Transformada de Fourier de Tempo Discreta (STFT);</li>
          <li><b>spectrogram():</b> Função para visualizar o espectrograma do áudio;</li>
          <li><b>pyin():</b> Função para estimar a frequência fundamental;</li>
          <li><b>kautocor():</b> Função para calcular os parâmetros LPC.</li>
        </ul>
      </Paragraph>
      <Paragraph>Por fim, para a estimativa da f0, foi utilizado o algoritmo pYIN.</Paragraph>



      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Resultados e Discussões</Typography>
      <Paragraph>
        Realizou-se a execução do código fornecido para o áudio de alguns participantes do grupo, afim de analisar a voz
        de cada um. Os resultados obtidos foram os seguintes:
      </Paragraph>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Jõao</Typography>
      <Paragraph>
        Primeiro analisou-se o áudio do João. Que está disposto abaixo:
      </Paragraph>
      <TextAudio audio={AudioJoao} audioType='audio/wav'/>
      <Paragraph>
        A energia deste áudio foi convertida para decibéis e normalizada para um ponto de referência de 0 dB, permitindo
        identificar picos de energia no sinal. Os limiares estabelecidos com base nos valores máximos de energia ajudam
        a distinguir se uma parte do áudio é voz ou não-voz. O gráfico da Img. 1 a seguir, mostra como a energia varia
        ao longo do tempo, indicando onde há maior intensidade sonora, geralmente associada a partes faladas ou vocais.
        Esse gráfico possibilita identificar visualmente regiões de voz e não-voz no áudio, auxiliando na compreensão
        das características acústicas distintas presentes no sinal.
      </Paragraph>
      <TextImage image={Img1} imageNumber={1} subtitle='Gráfico da energia do áudio gravado pelo João.'/>
      <Paragraph>
        Em seguida, realizou-se a análise da frequência fundamental (f0) em um sinal de áudio utilizando o algoritmo
        pYIN da biblioteca librosa. Através da aplicação desse algoritmo, foi possível estimar a frequência fundamental
        ao longo do tempo no sinal de áudio fornecido, representando a tonalidade predominante presente nas partes
        vocais do áudio. A visualização desses resultados foi realizada de diferentes maneiras:
      </Paragraph>
      <Paragraph>
        Primeiramente, a trajetória da frequência fundamental foi plotada em um gráfico temporal, exibindo as variações
        da frequência ao longo do áudio, como mostra a Img. 2. Isso permitiu observar as mudanças tonais e identificar
        padrões na variação da frequência ao longo do tempo. Além disso, foi calculado e plotado o pitch, na Img. 3,
        representando o período do sinal de áudio, oferecendo uma perspectiva adicional sobre a tonalidade e variações
        na periodicidade do áudio.
      </Paragraph>
      <TextImage image={Img2} imageNumber={2} subtitle='Gráfico da frequência fundamental ao longo do tempo no áudio do João.'/>
      <TextImage image={Img3} imageNumber={3} subtitle='Gráfico do pitch do áudio do João.'/>
      <Paragraph>
        Para uma análise mais completa, um espectrograma do sinal de áudio foi gerado, podendo ser observado na Img. 4,
        mostrando a distribuição de energia em diferentes frequências ao longo do tempo. A sobreposição da linha da
        frequência fundamental estimada sobre o espectrograma permitiu visualizar como essa frequência se relaciona com
        a distribuição espectral do áudio. Essa sobreposição ofereceu insights sobre as regiões espectrais onde a
        frequência fundamental se destacou, auxiliando na compreensão da interação entre a tonalidade e o conteúdo
        espectral do áudio analisado. Esses resultados fornecem uma compreensão detalhada das características tonais e
        variações de frequência presentes no sinal de áudio, oferecendo insights valiosos sobre suas características
        acústicas.
      </Paragraph>
      <TextImage image={Img4} imageNumber={4} subtitle='Gráfico do espectrograma junto com a linha da frequência fundamental do áudio do João.'/>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Mariana</Typography>
      <Paragraph>
        Para a Mariana, o áudio utilizado foi o apresentado a seguir, cujo espectrograma pode ser visto na Img. 5.
      </Paragraph>
      <TextAudio audio={AudioMariana} audioType='audio/wav'/><br/>
      <TextImage image={Img5} imageNumber={5} subtitle='Gráfico do sinal do áudio gravado pela Mariana.'/>
      <Paragraph>
        Para esse áudio, foram realizados os mesmos procedimentos do áudio anterior, obtendo-se os gráficos das Imgs. 6, 7, 8 e 9.
      </Paragraph>

      <TextImage image={Img6} imageNumber={6} subtitle='Gráfico da energia do áudio gravado pela Mariana.'/>
      <TextImage image={Img7} imageNumber={7} subtitle='Gráfico da frequência fundamental ao longo do tempo no áudio da Mariana.'/>
      <TextImage image={Img8} imageNumber={8} subtitle='Gráfico do pitch do áudio da Mariana.'/>
      <TextImage image={Img9} imageNumber={9} subtitle='Gráfico do espectrograma junto com a linha da frequência fundamental do áudio da Mariana.'/>

      <Paragraph>
        Por fim, também realizou-se uma análise detalhada de diferentes segmentos de um sinal de áudio, distinguindo
        entre regiões de voz e não-voz e oferecendo uma visualização dos espectros de frequência associados a cada tipo
        de segmento. Os gráficos gerados podem ser obervados nas Imgs. 10 e 11, a seguir:
      </Paragraph>

      <TextImage image={Img10} imageNumber={10} subtitle='Gráfico do espectro de frequência dos segmentos de voz do áudio da Mariana.'/>
      <TextImage image={Img11} imageNumber={11} subtitle='Gráfico do espectro de frequência dos segmentos de não-voz do áudio da Mariana.'/>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Renan</Typography>
      <Paragraph>
        Para o Renan, o áudio utilizado foi o apresentado a seguir, cujo espectrograma pode ser visto na Img. 12.
      </Paragraph>
      <TextAudio audio={AudioRenan} audioType='audio/ogg'/><br/>
      <TextImage image={Img12} imageNumber={12} subtitle='Gráfico do sinal do áudio gravado pelo Renan.'/>
      <Paragraph>
        Para esse áudio, foram realizados os mesmos procedimentos do áudio anterior, obtendo-se os gráficos a seguir:
      </Paragraph>
      <TextImage image={Img13} imageNumber={13} subtitle='Gráfico da energia do áudio gravado pelo Renan.'/>
      <TextImage image={Img14} imageNumber={14} subtitle='Gráfico da frequência fundamental ao longo do tempo no áudio do Renan.'/>
      <TextImage image={Img15} imageNumber={15} subtitle='Gráfico do pitch do áudio do Renan.'/>
      <TextImage image={Img16} imageNumber={16} subtitle='Gráfico do espectrograma junto com a linha da frequência fundamental do áudio do Renan.'/>
      <TextImage image={Img17} imageNumber={17} subtitle='Gráfico do espectro de frequência dos segmentos de voz do áudio do Renan.'/>
      <TextImage image={Img18} imageNumber={18} subtitle='Gráfico do espectro de frequência dos segmentos de não-voz do áudio do Renan.'/>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Marcelo</Typography>
      <Paragraph>
        Assim como nos casos anteriores, aplicou-se os processamentos citados em um áudio gravado pelo Marcelo, que se
        encontram a seguir:
      </Paragraph>
      <TextAudio audio={AudioMarcelo} audioType='audio/wav'/><br/>
      <Paragraph>
        Os resultados encontrados estão a seguir:
      </Paragraph>
      <TextImage image={Img19} imageNumber={19} subtitle='Gráfico da energia do áudio gravado pelo Marcelo.'/>
      <TextImage image={Img20} imageNumber={20} subtitle='Gráfico da frequência fundamental ao longo do tempo no áudio do Marcelo.'/>
      <TextImage image={Img21} imageNumber={21} subtitle='Gráfico do pitch do áudio do Marcelo.'/>
      <TextImage image={Img22} imageNumber={22} subtitle='Gráfico do espectrograma junto com a linha da frequência fundamental do áudio do Marcelo.'/>
      <TextImage image={Img23} imageNumber={23} subtitle='Gráfico do espectro de frequência dos segmentos de voz do áudio do Marcelo.'/>


      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Adailson</Typography>
      <Paragraph>
        Para o Adailson, o áudio utilizado foi o apresentado a seguir, cujo espectrograma pode ser visto na Img. 5.
      </Paragraph>
      <TextAudio audio={AudioAdailson} audioType='audio/wav'/><br/>
      <TextImage image={Img31} imageNumber={24} subtitle='Gráfico do sinal do áudio gravado pelo Adailson.'/>
      <Paragraph>
        Para esse áudio, foram realizados os mesmos procedimentos do áudio anterior, obtendo-se os gráficos das Imgs. 6, 7, 8 e 9.
      </Paragraph>

      <TextImage image={Img32} imageNumber={25} subtitle='Gráfico da energia do áudio gravado pelo Adailson.'/>
      <TextImage image={Img33} imageNumber={26} subtitle='Gráfico da frequência fundamental ao longo do tempo no áudio do Adailson.'/>
      <TextImage image={Img34} imageNumber={27} subtitle='Gráfico do pitch do áudio do Adailson.'/>
      <TextImage image={Img35} imageNumber={28} subtitle='Gráfico do espectrograma junto com a linha da frequência fundamental do áudio do Adailson.'/>

      <Paragraph>
        Por fim, também realizou-se uma análise detalhada de diferentes segmentos de um sinal de áudio, distinguindo
        entre regiões de voz e não-voz e oferecendo uma visualização dos espectros de frequência associados a cada tipo
        de segmento. Os gráficos gerados podem ser obervados nas Imgs. 10 e 11, a seguir:
      </Paragraph>

      <TextImage image={Img36} imageNumber={29} subtitle='Gráfico do espectro de frequência dos segmentos de voz do áudio da Mariana.'/>
      <TextImage image={Img37} imageNumber={30} subtitle='Gráfico do espectro de frequência dos segmentos de não-voz do áudio da Mariana.'/>

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Conclusão</Typography>
      <Paragraph>
        A análise LPC é uma ferramenta eficaz para a análise da voz. Ela permite a separação da voz em segmentos sonoros
        e surdos, a determinação dos parâmetros LPC e a estimativa da frequência fundamental.
      </Paragraph>
      <Paragraph>
        Os resultados da análise LPC para as gravações do grupo são semelhantes. Isso indica que a análise LPC é uma
        ferramenta robusta, que pode ser utilizada para analisar vozes de diferentes pessoas.
      </Paragraph>


      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Sugestão de Melhorias</Typography>
      <Paragraph>
        A análise LPC pode ser aprimorada de várias maneiras. Uma possibilidade é utilizar um algoritmo de separação
        U/UV mais sofisticado, que possa levar em consideração características mais sutis da voz, como a duração dos
        segmentos sonoros e surdos. Outra possibilidade é utilizar um algoritmo de estimativa da frequência fundamental
        mais preciso, que possa levar em consideração características como a forma do espectro e a energia do sinal.
      </Paragraph>
      <Paragraph>
        A seguir, são apresentadas algumas sugestões específicas para a melhoria da análise LPC realizada no presente relatório:
      </Paragraph>
      <Paragraph>
        <ul style={{textAlign: 'justify', textIndent: '0px'}}>
          <li>
            O limiar de energia de tempo curto E1 pode ser ajustado de acordo com a intensidade sonora da gravação. Isso
            pode melhorar a separação U/UV, especialmente em gravações com alta intensidade sonora;
          </li>
          <li>
            O limiar E1voiced_lim pode ser ajustado de acordo com a frequência fundamental da voz. Isso pode melhorar a
            separação sonora/surda, especialmente em gravações com altas frequências fundamentais;
          </li>
          <li>
            O algoritmo de autocorrelação pode ser utilizado para calcular os parâmetros LPC. Isso pode melhorar a
            precisão dos parâmetros LPC, especialmente em gravações com alta complexidade espectral;
          </li>
          <li>
            O algoritmo pYIN pode ser utilizado para estimar a frequência fundamental. Isso pode melhorar a precisão da
            estimativa da frequência fundamental, especialmente em gravações com alta complexidade espectral.
          </li>
        </ul>
      </Paragraph>
      <Paragraph>
        A implementação dessas sugestões pode levar a uma análise LPC mais precisa e confiável.
      </Paragraph>
    </Container>
  );
}

export default Report7;
