import React from 'react';
import { Container, Typography } from '@mui/material';
import Paragraph from '../../../components/paragraph';
import TextImage from '../../../components/text-image';
import { RGBConversion, RGBSeparation } from '../../../assets/reports/report3';
import { Bgr2RGBAdailson, Bgr2RGBGrupo, Bgr2RGBJoaoVictor, Bgr2RGBMarcelo, Bgr2RGBMari, Bgr2RGBRenan } from '../../../assets/reports/report3/bgr-to-rgb';
import { RGBAdailson, RGBGrupo, RGBJoaoVictor, RGBMarcelo, RGBMari, RGBRenan } from '../../../assets/reports/report3/r-g-and-b';
import { YCrCbAndHSVAdailson, YCrCbAndHSVGrupo, YCrCbAndHSVJoaoVictor, YCrCbAndHSVMarcelo, YCrCbAndHSVMari, YCrCbAndHSVRenan } from '../../../assets/reports/report3/ycrcb-and-hsv';
import { YCrCbChannelsAdailson, YCrCbChannelsGrupo, YCrCbChannelsJoaoVictor, YCrCbChannelsMarcelo, YCrCbChannelsMari, YCrCbChannelsRenan } from '../../../assets/reports/report3/ycrcb-channels';

const Report3 = () => {
  return (
    <Container style={{marginTop: '50px'}}>
      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Introdução</Typography>
      <Paragraph>
        A codificação de imagem por Transformada Discreta de Cosseno (DCT) é uma técnica fundamental na compressão de
        imagens e em diversos sistemas de processamento de imagem. Ela desempenha um papel crucial na redução do tamanho
        de arquivos de imagem sem comprometer significativamente a qualidade visual.
      </Paragraph>

      <Paragraph>
        A DCT é uma técnica matemática que converte uma imagem de domínio espacial em um domínio de frequência,
        representando a informação da imagem em termos de componentes de frequência espacial. Esta transformação permite
        que os coeficientes de alta frequência sejam quantizados com menos precisão, resultando em uma compactação
        eficiente da informação visual, enquanto os coeficientes de baixa frequência, que contêm as informações mais
        importantes da imagem, são quantizados com maior precisão.
      </Paragraph>

      <Paragraph>
        Exploraremos os princípios básicos da codificação de imagem por DCT, seus usos em sistemas de compressão de
        imagem, como o JPEG, e seu impacto na qualidade e eficiência de transmissão de imagens digitais. A compreensão
        da DCT é essencial para a otimização de aplicações que dependem da manipulação de imagens digitais, e esta
        técnica desempenha um papel central na moderna tecnologia de processamento de imagem e vídeo.
      </Paragraph>

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Metodologia</Typography>
      <Paragraph>
        Para realização das análises e transformações foi utilizado um notebook python no google colab, um ambiente onde
        foi possível que os integrantes do grupo colaborassem de forma assíncrona e remota, utilizando a linguagem de
        programação Python e as bibliotecas ‘cv2’ de visão computacional, ‘numpy’ para operarmos de forma matricial com
        vetores, ‘matplotlib’ para visualização, e o próprio ‘drive’ para leitura e salvamento dos arquivos gerados.
      </Paragraph>
      <Paragraph>
        Para cada etapa descrita abaixo, foi escrita uma função que recebe uma imagem como parâmetro e realiza a
        transformação desejada. Após essa definição, é criado um loop que a chamará para cada uma das imagens originais.
      </Paragraph>
      <ul style={{textAlign: 'justify'}}>
        <li>BGR para RGB</li>
        <li>YCrCb e HSV</li>
        <li>R, G e B</li>
        <li>Y, Cr e Cb</li>
        <li>Compressão</li>
        <li>DCT (Transformada Discreta de Cosseno)</li>
      </ul>

      ### ADICIONAR BOTÃO DO COLAAB

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Procedimento</Typography>
      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Cores no pdrão RGB</Typography>
      <Paragraph>
        Iniciamos o código com a leitura de diversas imagens, incluindo retratos de membros do grupo e uma imagem de
        grupo. De acordo com a documentação do OpenCV, a função imread() interpreta as imagens como BGR, ou seja, os
        valores para cada cor (Azul, Verde e Vermelho) são armazenados em ordem inversa. Para que as imagens sejam
        exibidas corretamente, é necessário converter o padrão de cores para RGB da seguinte forma:
      </Paragraph>
      <TextImage image={RGBConversion} imageNumber={1} subtitle='Código para conversão de BGR para RGB' width={450}/>
      <Paragraph>
        O que foi feito no código foi a separação dos índices de cada uma das cores na ordem esperada do formato BGR (
        Azul, Verde e Vermelho) e a concatenação desses índices na ordem esperada do formato RGB (Vermelho, Verde e
        Azul). O resultado dessa conversão pode ser visto nas images abaixo:
      </Paragraph>
      <TextImage image={Bgr2RGBAdailson} imageNumber={2} subtitle='Foto do Adailson no formato inicial BGR e após a conversão no formato RGB.' width={900}/>
      <TextImage image={Bgr2RGBJoaoVictor} imageNumber={3} subtitle='Foto do João Victor no formato inicial BGR e após a conversão no formato RGB.' width={900}/>
      <TextImage image={Bgr2RGBMarcelo} imageNumber={4} subtitle='Foto do Marcelo no formato inicial BGR e após a conversão no formato RGB.' width={900}/>
      <TextImage image={Bgr2RGBMari} imageNumber={5} subtitle='Foto da Mariana no formato inicial BGR e após a conversão no formato RGB.' width={900}/>
      <TextImage image={Bgr2RGBRenan} imageNumber={6} subtitle='Foto do Renan no formato inicial BGR e após a conversão no formato RGB.' width={900}/>
      <TextImage image={Bgr2RGBGrupo} imageNumber={7} subtitle='Foto do grupo no formato inicial BGR e após a conversão no formato RGB.' width={900}/>
      <Paragraph>
        É possivel notar que no formato BGR, a cor azul ficou bem predominante nas pessoas das fotos, isso ocorre pois o
        índice da cor vermelha, que em geral é mais predominante na pele das pessoas, foi alocado como se fosse o índice
        da cor azul, e vice-versa. Após a conversão, as cores ficaram mais próximas do que é esperado.
      </Paragraph>
      <Paragraph>
        Para conseguir entender mais a fundo as componentes de um pixel, foi feita a separação de cada uma das cores
        para todas as imagens acima utilizando o código da Img. 8 abaixo.
      </Paragraph>
      <TextImage image={RGBSeparation} imageNumber={8} subtitle='Código utilizado para separar os componentes vermelho, verde e azul das imagens.' width={450}/>
      <Paragraph>O resultado pode ser visto abaixo:</Paragraph>
      <TextImage image={RGBAdailson} imageNumber={9} subtitle='Componentes vermelho, verde e azul para a foto do Adailson.' width={900}/>
      <TextImage image={RGBJoaoVictor} imageNumber={10} subtitle='Componentes vermelho, verde e azul para a foto do João Victor.' width={900}/>
      <TextImage image={RGBMarcelo} imageNumber={11} subtitle='Componentes vermelho, verde e azul para a foto do Marcelo.' width={900}/>
      <TextImage image={RGBMari} imageNumber={12} subtitle='Componentes vermelho, verde e azul para a foto da Mariana.' width={900}/>
      <TextImage image={RGBRenan} imageNumber={13} subtitle='Componentes vermelho, verde e azul para a foto do Renan.' width={900}/>
      <TextImage image={RGBGrupo} imageNumber={14} subtitle='Componentes vermelho, verde e azul para a foto do grupo.' width={900}/>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Conversão para Formatos YCrCb e HSV</Typography>
      <Paragraph>
        Em seguida, convertemos as imagens para os formatos de cor YCrCb e HSV. A visualização dessas conversões
        proporciona uma compreensão mais profunda das diferentes representações de cores. O espaço YCrCb é
        particularmente útil, separando a luminância (Y) e os componentes de crominância (Cr e Cb).
      </Paragraph>
      <TextImage image={YCrCbAndHSVAdailson} imageNumber={15} subtitle='Fotos do Adailson nos formatos originais, YCrCb e HSV.' width={1000}/>
      <TextImage image={YCrCbAndHSVJoaoVictor} imageNumber={16} subtitle='Fotos do João Victor nos formatos originais, YCrCb e HSV.' width={1000}/>
      <TextImage image={YCrCbAndHSVMarcelo} imageNumber={17} subtitle='Fotos do Marcelo nos formatos originais, YCrCb e HSV.' width={1000}/>
      <TextImage image={YCrCbAndHSVMari} imageNumber={18} subtitle='Fotos da Mariana nos formatos originais, YCrCb e HSV.' width={1000}/>
      <TextImage image={YCrCbAndHSVRenan} imageNumber={19} subtitle='Fotos do Renan nos formatos originais, YCrCb e HSV.' width={1000}/>
      <TextImage image={YCrCbAndHSVGrupo} imageNumber={20} subtitle='Fotos do grupo nos formatos originais, YCrCb e HSV.' width={1000}/>
      <Paragraph>
        O espaço YCrCb é uma representação que separa a luminância (Y) das informações de crominância (Cr e Cb). Essa
        separação facilita o processamento de informações de intensidade de luminância, independentemente das
        informações de cor, resultando em uma representação mais eficiente em várias aplicações. Em contraste, o espaço
        RGB representa a intensidade de cada canal de cor (vermelho, verde, azul), o que pode não ser tão intuitivo
        quanto separar a luminância e crominância.
      </Paragraph>
      <Paragraph>
        Para finalizar a análise de cores das imagens, os canais Y, Cr e Cb da imagem YCrCb são separados e visualizados.
        Essa separação permite uma análise mais detalhada dos componentes de luminância e crominância, revelando
        informações específicas sobre a intensidade de luz e as diferenças de cor.
      </Paragraph>
      <TextImage image={YCrCbChannelsAdailson} imageNumber={21} subtitle='Camadas Y, Cr e Cb da foto do Adailson' width={1000}/>
      <TextImage image={YCrCbChannelsJoaoVictor} imageNumber={22} subtitle='Camadas Y, Cr e Cb da foto do João Victor' width={1000}/>
      <TextImage image={YCrCbChannelsMarcelo} imageNumber={23} subtitle='Camadas Y, Cr e Cb da foto do Marcelo' width={1000}/>
      <TextImage image={YCrCbChannelsMari} imageNumber={24} subtitle='Camadas Y, Cr e Cb da foto da Mariana' width={1000}/>
      <TextImage image={YCrCbChannelsRenan} imageNumber={25} subtitle='Camadas Y, Cr e Cb da foto do Renan' width={1000}/>
      <TextImage image={YCrCbChannelsGrupo} imageNumber={26} subtitle='Camadas Y, Cr e Cb da foto do grupo' width={1000}/>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Compressão de Imagem</Typography>
    </Container>
  );
}

export default Report3;
