import React from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import Paragraph from '../../../components/paragraph';
import TextImage from '../../../components/text-image';
import { RGBConversion, RGBSeparation } from '../../../assets/reports/report3';
import { Bgr2RGBAdailson, Bgr2RGBGrupo, Bgr2RGBJoaoVictor, Bgr2RGBMarcelo, Bgr2RGBMari, Bgr2RGBRenan } from '../../../assets/reports/report3/bgr-to-rgb';
import { RGBAdailson, RGBGrupo, RGBJoaoVictor, RGBMarcelo, RGBMari, RGBRenan } from '../../../assets/reports/report3/r-g-and-b';
import { YCrCbAndHSVAdailson, YCrCbAndHSVGrupo, YCrCbAndHSVJoaoVictor, YCrCbAndHSVMarcelo, YCrCbAndHSVMari, YCrCbAndHSVRenan } from '../../../assets/reports/report3/ycrcb-and-hsv';
import { YCrCbChannelsAdailson, YCrCbChannelsGrupo, YCrCbChannelsJoaoVictor, YCrCbChannelsMarcelo, YCrCbChannelsMari, YCrCbChannelsRenan } from '../../../assets/reports/report3/ycrcb-channels';
import { CompressionAdailson, CompressionJoaoVictor, CompressionMarcelo, CompressionMari, CompressionRenan, CompressionGrupo } from '../../../assets/reports/report3/compression';
import { CosineTransformAdailson, CosineTransformJoaoVictor, CosineTransformMarcelo, CosineTransformMari, CosineTransformRenan, CosineTransformGrupo } from '../../../assets/reports/report3/cossine-transform';

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
      <Paragraph>
        O código desenvolvido pode ser acessado através deste <a href='https://colab.research.google.com/drive/1MECWLnvw5SqqRnIBTzzFQCxs4vHPWysw?usp=sharing' target='_blank' rel='noopener noreferrer'>link</a>
      </Paragraph>

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
      <Paragraph>
        O formato JPEG é utilizado para comprimir as imagens, variando o nível de qualidade. Visualizações das imagens
        comprimidas são apresentadas, destacando os efeitos perceptíveis na qualidade da imagem. A compressão JPEG atua
        removendo detalhes menos perceptíveis, resultando em menor tamanho de arquivo com alguma perda de qualidade.
      </Paragraph>
      <Paragraph>
        Para comprimir as imagens, utilizamos a função <b>imwrite()</b> do OpenCV, que recebe como parâmetros o nome do arquivo
        de saída, a imagem a ser salva e o nível de compressão, que varia de 0 a 100. Quanto maior o nível de de
        compressão (mais próximo de 0), maior a perda de qualidade da imagem. Abaixo é possível ver a diferença entre
        umas imagem com níveis de compressão 95 (valor padrão), 25 e 5.
      </Paragraph>
      <TextImage image={CompressionAdailson} imageNumber={27} subtitle='Foto do Adailson com nível de compressão 95, 25 e 5.' width={1100}/>
      <TextImage image={CompressionJoaoVictor} imageNumber={28} subtitle='Foto do João Victor com nível de compressão 95, 25 e 5.' width={1100}/>
      <TextImage image={CompressionMarcelo} imageNumber={29} subtitle='Foto do Marcelo com nível de compressão 95, 25 e 5.' width={1100}/>
      <TextImage image={CompressionMari} imageNumber={30} subtitle='Foto da Mariana com nível de compressão 95, 25 e 5.' width={1100}/>
      <TextImage image={CompressionRenan} imageNumber={31} subtitle='Foto do Renan com nível de compressão 95, 25 e 5.' width={1100}/>
      <TextImage image={CompressionGrupo} imageNumber={32} subtitle='Foto do grupo com nível de compressão 95, 25 e 5.' width={1100}/>
      <Paragraph>
        A perda de qualidade da imagem é perceptível, em especial para os níveis de compressão 5, em que é possível ver
        alterações até nas cores da imagem. Para o nível de compressão 25, a perda de qualidade é menor, mas ainda
        perceptível. Para o nível de compressão 95, a perda de qualidade é quase imperceptível.
      </Paragraph>
      <Paragraph>
        Como citado anteriormente, outra diferença perceptível é o tamanho dos arquivos, na tabela a seguir é possível
        ver o tamanho das imahens utilizadas nesse relatório para cada nível de compressão. Note que o tamanho das
        fotos do João Victor e do grupo são consideravelmente menores que as demais, isso ocorreu pois optamos por manter
        a extensão original das fotos (JPG) após a compressão. E apesar de essas fotos se comportarem um pouco diferente,
        é possivel ver um padrão nas demais fotos, onde o tamanho do arquivo diminui cerca de 90% do nível 95 para 25,
        e depois mais uns 20% do nível 25 para 5.

      </Paragraph>
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Table sx={{ width: 690 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nível de Compressão</TableCell>
              <TableCell align="right">Adailson</TableCell>
              <TableCell align="right">João Victor</TableCell>
              <TableCell align="right">Marcelo</TableCell>
              <TableCell align="right">Mariana</TableCell>
              <TableCell align="right">Renan</TableCell>
              <TableCell align="right">Grupo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow key='95' sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">95</TableCell>
                <TableCell align="right">603 KB</TableCell>
                <TableCell align="right">150 KB</TableCell>
                <TableCell align="right">591 KB</TableCell>
                <TableCell align="right">644 KB</TableCell>
                <TableCell align="right">634 KB</TableCell>
                <TableCell align="right">156 KB</TableCell>
              </TableRow>

              <TableRow key='25' sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">25</TableCell>
                <TableCell align="right">60 KB</TableCell>
                <TableCell align="right">29 KB</TableCell>
                <TableCell align="right">58 KB</TableCell>
                <TableCell align="right">70 KB</TableCell>
                <TableCell align="right">62 KB</TableCell>
                <TableCell align="right">38 KB</TableCell>
              </TableRow>

              <TableRow key='5' sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">5</TableCell>
                <TableCell align="right">50 KB</TableCell>
                <TableCell align="right">18 KB</TableCell>
                <TableCell align="right">49 KB</TableCell>
                <TableCell align="right">51 KB</TableCell>
                <TableCell align="right">50 KB</TableCell>
                <TableCell align="right">19 KB</TableCell>
              </TableRow>
          </TableBody>
        </Table>
        <p style={{fontSize: '85%'}}><b>Tabela 1 - </b>Tamanhos em KB das imagens para cada tipo de compressão.</p>
      </div>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Transformada Discreta de Cosseno</Typography>
      <Paragraph>
        Por fim, selecionamos um cloco de 8x8 no centro das imagens, aplicamos a DCT  e realizamos a manipulação manual
        dos coeficientes para zerar componentes AC (alternadas) da diagonal. Gerando as imagens a seguir, onde é possível
        comparar o trecho 8x8 original com o trecho 8x8 após a DCT.
      </Paragraph>
      <TextImage image={CosineTransformAdailson} imageNumber={33} subtitle='Região central (8x8) da foto do Adailson antes e depois da reconstrução manual' width={800}/>
      <TextImage image={CosineTransformJoaoVictor} imageNumber={34} subtitle='Região central (8x8) da foto do João Victor antes e depois da reconstrução manual' width={800}/>
      <TextImage image={CosineTransformMarcelo} imageNumber={35} subtitle='Região central (8x8) da foto do Marcelo antes e depois da reconstrução manual' width={800}/>
      <TextImage image={CosineTransformMari} imageNumber={36} subtitle='Região central (8x8) da foto da Mariana antes e depois da reconstrução manual' width={800}/>
      <TextImage image={CosineTransformRenan} imageNumber={37} subtitle='Região central (8x8) da foto do Renan antes e depois da reconstrução manual' width={800}/>
      <TextImage image={CosineTransformGrupo} imageNumber={38} subtitle='Região central (8x8) da foto do grupo antes e depois da reconstrução manual' width={800}/>

      <Paragraph>
        Apesar de existir diferenças entre as imagens, é possível ver que a imagem reconstruída é bem parecida com a
        imagem original, mostrando que a DCT é uma técnica eficiente para compressão de imagens, que não perde muitas
        informações.
      </Paragraph>
      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Conclusão</Typography>
      <Paragraph>
        O código abrange conceitos fundamentais de processamento de imagem, proporcionando uma compreensão detalhada das
        operações realizadas.
      </Paragraph>
      <Paragraph>
        A análise das visualizações, incluindo as mudanças nas escalas de cores e os efeitos da compressão, destaca a
        importância dessas técnicas na manipulação e otimização de imagens em diversas aplicações.
      </Paragraph>
      <Paragraph>
        O espaço YCrCb oferece vantagens significativas ao separar luminância e crominância, enquanto a compressão JPEG
        é eficaz na redução do tamanho de arquivo com perdas mínimas perceptíveis.
      </Paragraph>
    </Container>
  );
}

export default Report3;
