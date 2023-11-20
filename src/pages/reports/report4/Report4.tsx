import React from 'react';
import { Container, Typography } from '@mui/material';
import Paragraph from '../../../components/paragraph';
import TextImage from '../../../components/text-image';
import { Img1, Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9 } from '../../../assets/reports/report4';

const Report4 = () => {
  return (
    <Container style={{marginTop: '50px'}}>
      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Introdução</Typography>

      <Paragraph>
        Nesta atividade prática será utilizada a linguagem de programação Python para realização dos processos de codificação
        DWT e IDWT nas fotos tiradas pelo grupo durante a aula prática 1.
      </Paragraph>

      <Paragraph>
        Para realização dos processos de codificação, será utilizada a linguagem Python no ambiente do Google Colab, onde
        todos podem escrever e editar o código de forma simultânea e remota, e para simplificar as operações serão utilizadas
        as bibliotecas cv2 para carregamento e transformações de imagens, matplotlib para visualização, e numpy para operações
        com matrizes.
      </Paragraph>

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Objetivos</Typography>

      <Paragraph>
        Esta atividade prática tem como objetivo principal mostrar de forma computacional o processo de codificação DWT e
        IDWT, sua reconstrução, assim como outras formas de codificação multinível, e verificar a taxa de compressão a partir
        da da Componente de Aproximação.
      </Paragraph>

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Metodologia </Typography>

      <Paragraph>
        Para realização das análises e transformações foi utilizado um notebook python no google colab, um ambiente onde foi
        possível que os integrantes do grupo colaborassem de forma assíncrona e remota, utilizando a linguagem de programação
        Python e as bibliotecas ‘pywt’ para processamento de sinais e imagens utilizando wavelet, ‘cv2’ de visão
        computacional, ‘numpy’ para operarmos de forma matricial com vetores, ‘matplotlib’ para visualização, e o próprio
        ‘Google drive’ para leitura e salvamento dos arquivos gerados.
      </Paragraph>

      <Paragraph>
        Para cada etapa descrita abaixo, foi escrita uma função que recebe uma imagem como parâmetro e realiza a transformação
        desejada. O código desenvolvido pode ser acessado através deste <a href='https://drive.google.com/file/d/1R67cJknJu2YEfJDA2nARcwf_6DJkdt-9/view?usp=sharing' target='_blank' rel='noopener noreferrer'>link</a>.
        Note que a execução do código com as fotos do grupo se encontram após as transformações de exemplo fornecidas em aula.
      </Paragraph>

      <Paragraph>
        Após essa definição, iniciamos os procedimentos de manipulação para cada imagem dos integrantes e do grupo.
      </Paragraph>

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Procedimentos</Typography>

      <Paragraph>
        Após importar as bibliotecas e montar o drive (Item B), o primeiro passo foi fazer a codificação de Luminância (P&B)
        com WDT para a foto do integrante (Item C):
      </Paragraph>

      <Paragraph>
        O código realiza uma transformada discreta de wavelet bidimensional (2D-DWT) em uma imagem em escala de cinza usando a
        wavelet de Haar. Em seguida, ele separa os coeficientes resultantes em aproximados (cA) e detalhes (cH, cV, cD) nas
        direções horizontal, vertical e diagonal, respectivamente. Para cada item foi exibido uma imagem com o resultado.
      </Paragraph>

       <TextImage image={Img1} imageNumber={1} subtitle='' width={900}/>

      <Paragraph>
        Depois, no item C.1, foi feito o Cálculo do Erro Quadrático Médio (MSE) e da Relação Sinal Ruído de Pico (PSNR):
      </Paragraph>

       <TextImage image={Img2} imageNumber={2} subtitle='' width={900}/>

      <Paragraph>
        Primeiro foi feito o cálculo da diferença pixel a pixel entre a imagem original em tons de cinza e a imagem
        reconstruída, depois foi realizado o cálculo do erro quadrático é exibido o resultado.
      </Paragraph>

       <TextImage image={Img3} imageNumber={3} subtitle='' width={900}/>

      <Paragraph>
        Em seguida foi calculado a relação sinal ruído de pico, que compara o valor máximo possível com a MSE e então imprime
        o resultado.
      </Paragraph>

      <Paragraph>
        Cria uma figura com tamanho 20x10
      </Paragraph>

       <TextImage image={Img4} imageNumber={4} subtitle='' width={900}/>
      <Paragraph>
        No item D foi realizado o teste das funções de multiresolução wavedec2() e waverec2(). Esse código realiza uma
        decomposição de dois níveis usando a Transformada Discreta de Wavelet Bidimensional na imagem em escala de cinza com a
        wavelet de Haar. Em seguida, ele reconstrói a imagem original a partir dos coeficientes wavelet usando a Transformada
        Discreta de Wavelet Bidimensional Inversa. O código também extrai e visualiza os coeficientes de aproximação e
        detalhes em diferentes níveis.
      </Paragraph>

      <Paragraph>
        No item E foi feito uma montagem com wavedec2() e wavedecn(). Este código realiza a cópia de alguns coeficientes
        obtidos após uma decomposição de duas camadas usando a transformada discreta de wavelet bidimensional com a wavelet de
        Haar. Ele então organiza esses coeficientes de forma a criar uma matriz que representa a imagem original ou parte dela
        a partir dos coeficientes wavelet. Por fim, mostra a imagem resultado.
      </Paragraph>

       <TextImage image={Img5} imageNumber={5} subtitle='' width={900}/>

      <Paragraph>
        Para o item F, reconstrução de imagem colorida, o código realiza a transformada discreta de wavelet bidimensional (2D-DWT) em um plano de cor específico
        de uma imagem, para cada cor (vermelho, verde e azul). Ele então separa os coeficientes resultantes em aproximação e
        detalhes nas direções vertical, horizontal, e diagonal. Em seguida, reconstrói a imagem original a partir desses
        coeficientes usando a transformada discreta de wavelet inversa bidimensional no plano da cor específica. Finalmente,
        o código exibe visualmente a imagem original, os coeficientes wavelet e a imagem reconstruída.
      </Paragraph>

       <TextImage image={Img6} imageNumber={6} subtitle='' width={900}/>

       <TextImage image={Img7} imageNumber={7} subtitle='' width={900}/>

       <TextImage image={Img8} imageNumber={8} subtitle='' width={900}/>

       <TextImage image={Img9} imageNumber={9} subtitle='' width={900}/>

       <TextImage image={Img10} imageNumber={10} subtitle='' width={900}/>

       <TextImage image={Img11} imageNumber={11} subtitle='' width={900}/>

       <TextImage image={Img12} imageNumber={12} subtitle='' width={900}/>

       <TextImage image={Img13} imageNumber={13} subtitle='' width={900}/>

       <TextImage image={Img14} imageNumber={14} subtitle='' width={900}/>

      <Paragraph>
        Depois, o código realiza a reconstrução de uma imagem colorida a partir dos coeficientes de aproximação obtidos após a
        decomposição da imagem original em três planos de cores (vermelho, verde e azul) usando a Transformada Discreta de
        Wavelet Bidimensional. A imagem resultante é uma aproximação do conteúdo original após a primeira etapa de decomposição
        e reconstrução.
      </Paragraph>

       <TextImage image={Img15} imageNumber={15} subtitle='' width={900}/>

      <Paragraph>
        Item G, Salvando as Aproximações e depois fazendo download dos arquivos, calcular a taxa de compressão com o original.
        Nesta parte do código é obtido a aproximação de nível 1 e nível 2 de decomposição DWT e salva no drive.
      </Paragraph>

      <Paragraph>
        No item H, Gravando o Arquivo Codificado DWT/IDWT nível 1 Colorido, calcular a taxa de compressão com o original, o
        código realiza algumas operações para ajustar a representação da imagem reconstruída no nível 1, convertendo-a para
        o formato BGR (ao invés de RGB) e para valores inteiros no intervalo [0, 255]. Em seguida, a imagem ajustada é salva
        em um arquivo no formato BMP no caminho especificado. Por fim, no item I, o código reconstrói a imagem colorida a
        partir dos planos de cores reconstruídos, calcula métricas de qualidade de imagem (MSE para cada canal de cor e PSNR
        total) e exibe visualmente a imagem reconstruída com informações sobre o PSNR total.
      </Paragraph>

       <TextImage image={Img16} imageNumber={16} subtitle='' width={900}/>

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Conclusões</Typography>

      <Paragraph>
        Como foi possível observar na seção anterior, quando reconstruímos as imagens a partir de uma DWT ou IDWT de apenas 1
        nível, temos uma imagem significativamente diferente da original, com qualidade pior, cores mais claras como se
        houvesse sido utilizado um forte flash de câmera fotográfica, mas apesar das perdas, ainda é reconhecível. Nas fotos
        individuais fica evidente a perda de informação relacionada ao fundo, evidenciando as pessoas contidas em cada imagem.
      </Paragraph>

      <Paragraph>
        Fenômeno que não se repetiu nas imagens codificadas em múltiplos níveis, que tiveram PSNR (Peak Signal-to-Noise Ratio)
        superior a 160db, ou seja, muito parecidas com as imagens originais, evidenciando a eficiência de realizarmos as
        transformações em vários níveis se tivermos como objetivo a preservação da imagem durante sua transmissão.
      </Paragraph>
    </Container>
  );
}

export default Report4;
