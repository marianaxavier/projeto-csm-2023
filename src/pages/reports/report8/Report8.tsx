import React from 'react';
import { Container, Typography } from '@mui/material';
import Paragraph from '../../../components/paragraph';
import TextAudio from '../../../components/text-audio';
import { Img1, Img2, Img3, Img4, Img5, Img6, Img7, TwistOriginal, Twist128k, Twist64k, Twist32k, Twist16k, Twist8k, Twist128k2X, TwistOGG } from '../../../assets/reports/report8'
import TextImage from '../../../components/text-image';

const Report8  = () => {
  return (
    <Container style={{marginTop: '50px'}}>
      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Introdução</Typography>
      <Paragraph>
        O ffmpeg é uma ferramenta de software livre e versátil para manipulação de áudio e vídeo. Sua gama de
        funcionalidades inclui codificação, decodificação, transcodificação e streaming de uma ampla variedade de
        formatos de mídia. As opções de codificação referem-se às configurações e parâmetros disponíveis no ffmpeg para
        controlar a forma como os arquivos de áudio e vídeo são codificados, permitindo ajustes precisos na qualidade,
        tamanho e formato dos arquivos resultantes.
      </Paragraph>
      <Paragraph>
        MPEG-1, camada 3, conhecido como MP3, é um formato de compressão de áudio que revolucionou a maneira como
        armazenamos e ouvimos música. Ele utiliza algoritmos de compressão para reduzir o tamanho dos arquivos de áudio
        sem perder drasticamente a qualidade, tornando-se um dos formatos mais populares para a distribuição de música
        digital. As taxas de compressão dentro do formato MP3 referem-se às diferentes configurações de qualidade que
        afetam o equilíbrio entre tamanho do arquivo e fidelidade sonora. Este estudo visa explorar e entender essas
        variações, analisando como diferentes taxas de compressão impactam a qualidade do áudio resultante.
      </Paragraph>



      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Objetivos</Typography>
      <Paragraph>
        Este relatório apresenta os resultados de um estudo realizado no laboratório com o objetivo de explorar as
        diversas opções de codificação disponíveis no ffmpeg, uma ferramenta versátil e amplamente utilizada para
        manipulação de áudio e vídeo.
      </Paragraph>
      <Paragraph>
        Durante o experimento, foram analisadas as diferentes taxas de compressão do formato MPEG-1, camada 3, além de
        investigar as possibilidades de conversão entre codecs. Adicionalmente, o estudo abrangeu a análise da variação
        temporal nos arquivos de mídia, examinando os efeitos e as potenciais aplicações decorrentes dessas variações.
      </Paragraph>


      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Metodologia</Typography>
      <Paragraph>
        Para a realização deste experimento, utilizou-se um código fornecido pelos professores. Nesse código carregou-se
        os áudios a serem analisados com uma taxa de amostragem de 320.000 amostras por segundo e gerou-se um
        espectrograma linear de potência para visualizar as características espectrais do áudio.
      </Paragraph>
      <Paragraph>
        Em seguida, são exploradas as capacidades do ffmpeg, exibindo informações sobre suas opções e codecs disponíveis
        para manipulação de áudio e vídeo.
      </Paragraph>
      <Paragraph>
        O arquivo WAV original e convertido para dois arquivos MP3 diferentes. O primeiro é convertido com uma taxa de
        bits de áudio de 128 kbps, enquanto o segundo é convertido com uma taxa de bits mais baixa de 64 kbps. Após cada
        conversão, um espectrograma dos novos arquivos MP3 é gerado para análise visual das mudanças espectrais
        ocasionadas pelas diferentes taxas de compressão.
      </Paragraph>
      <Paragraph>
        Além disso, o código converte o arquivo MP3 para o formato OGG, utilizando o codec de áudio libvorbis.
        Posteriormente, aplica uma modificação na velocidade de reprodução do arquivo MP3 original para criar um novo
        arquivo com a velocidade de reprodução alterada. O resultado é carregado e reproduzido para demonstração,
        permitindo uma comparação auditiva entre os arquivos originais e o arquivo com a modificação na velocidade de
        reprodução.
      </Paragraph>
      <Paragraph>
        Essa sequência de operações oferece uma abordagem abrangente para examinar e comparar diferentes taxas de
        compressão de áudio, visualizando não apenas as características espectrais dos arquivos resultantes, mas também
        explorando as alterações na qualidade e no formato dos arquivos de áudio gerados.
      </Paragraph>



      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Resultados e Discussões</Typography>
      <Paragraph>
        O áudio utilizado neste experimento é um trecho da música "Twist and Shout" que foi cantada pelos estudantes
        para o Laboratório 2. O arquivo original é um arquivo WAV com uma taxa de amostragem de 320.000 amostras por
        segundo e pode ser escutado abaixo.
      </Paragraph>

      <TextAudio audio={ TwistOriginal } audioType='audio/wav'/>
      <br/>
      <TextImage image={Img1} imageNumber={1} subtitle='Espectrograma do áudio original utilizado'/>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Alterando as taxas de amostragem</Typography>
      <Paragraph>
        Como primeiro passo para a exploração do áudio, foi aplicado um processamento que altera a codificação do áudio
        para MP3, alterando também a taxa de amostragem do arquivo. Esse procedimento foi aplicado 5 vezes para que
        fosse possível observar as mudanças de maneira mais clara. Os resultados podem ser observados abaixo:
      </Paragraph>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>128K (MP3)</Typography>
      <TextAudio audio={ Twist128k } audioType='audio/mp3'/>
      <br/>
      <TextImage image={Img2} imageNumber={2} subtitle='Espectrograma do áudio com taxa de amostragem de 128k'/>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>64K (MP3)</Typography>
      <TextAudio audio={ Twist64k } audioType='audio/mp3'/>
      <br/>
      <TextImage image={Img3} imageNumber={3} subtitle='Espectrograma do áudio com taxa de amostragem de 64k'/>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>32K (MP3)</Typography>
      <TextAudio audio={ Twist32k } audioType='audio/mp3'/>
      <br/>
      <TextImage image={Img4} imageNumber={4} subtitle='Espectrograma do áudio com taxa de amostragem de 32k'/>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>16K (MP3)</Typography>
      <TextAudio audio={ Twist16k } audioType='audio/mp3'/>
      <br/>
      <TextImage image={Img5} imageNumber={5} subtitle='Espectrograma do áudio com taxa de amostragem de 16k'/>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>8K (MP3)</Typography>
      <TextAudio audio={ Twist8k } audioType='audio/mp3'/>
      <br/>
      <TextImage image={Img6} imageNumber={6} subtitle='Espectrograma do áudio com taxa de amostragem de 8k'/>
      <Paragraph>
        É possível notar tanto visualmente, através dos espectogramas, quanto auditivamente, através dos áudios, que
        quanto menor a taxa de amostragem, menor a qualidade do áudio. Isso ocorre pois a taxa de amostragem é
        responsável por definir a quantidade de amostras por segundo que serão utilizadas para representar digitalmente
        o sinal analógico, ou seja, quanto menor a taxa de amostragem, menor será a semelhança do sinal digital com o
        sinal analógico original. Outra característica que pode ser observada é que quanto menor a taxa de amostragem,
        menor é a intensidade do sinal, ou seja, o volume do áudio.
      </Paragraph>
      <Paragraph>
        Nota-se também que quanto menor a taxa de amostragem, menor é o tamanho do arquivo. No entanto, como é possível
        observar na Img. 7, isso ocorre apenas até a taxa de amostragem de 32k, pois a partir daí, o tamanho do arquivo
        se mantém constante. Isso ocorre, provavelmente, pois após essa taxa de amostragem, o arquivo já está tão
        comprimido que não é possível reduzir ainda mais o seu tamanho sem perder a qualidade do áudio.
      </Paragraph>
      <TextImage image={Img7} imageNumber={7} subtitle='Tamanho dos arquivos em função da taxa de amostragem'/>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Alterando a velocidade de reprodução</Typography>
      <Paragraph>
        Ainda utilizando a codificação MP3, foi aplicado um processamento que altera a velocidade de reprodução do
        áudio, gerando um novo arquivo com a velocidade de reprodução 2 vezes maior que a original. O resultado pode ser
        observado abaixo:
      </Paragraph>
      <TextAudio audio={ Twist128k2X } audioType='audio/mp3'/>

      <Paragraph>
        É possível notar que o áudio ficou mais rápido, porém não é possível notar uma diferença na qualidade do áudio.
        Isso ocorre pois a velocidade de reprodução não altera a qualidade do áudio, apenas a sua velocidade.
      </Paragraph>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Alterando o formato do arquivo</Typography>
      <Paragraph>
        Por fim, foi aplicado um processamento que converte o arquivo MP3 original para o formato OGG, utilizando o
        codec de áudio libvorbis. O resultado pode ser observado abaixo:
      </Paragraph>
      <TextAudio audio={ TwistOGG } audioType='audio/ogg'/>


      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Conclusão</Typography>
      <Paragraph>
        Através da utilização de ferramentas como o ffmpeg e a análise visual dos espectrogramas gerados pela biblioteca
        librosa, pudemos observar as nuances das mudanças espectrais decorrentes das variações na taxa de bits. Desde a
        conversão para taxas de bits mais altas, como 320 kbps, até aquelas mais baixas, como 65 kbps, cada alteração
        não apenas afetou a fidelidade do áudio, mas também a dimensão dos arquivos resultantes. Além disso, as
        manipulações de velocidade de reprodução proporcionaram uma compreensão prática das alterações sonoras possíveis
        durante a codificação.
      </Paragraph>
      <Paragraph>
        Ao explorar os limites e as variações oferecidas pelas opções de codificação, este estudo oferece uma visão
        ampla das possibilidades e compromissos inerentes à manipulação de áudio. Esse entendimento é fundamental para a
        escolha adequada de configurações de codificação em diferentes contextos, considerando tanto a qualidade
        perceptível quanto a eficiência de armazenamento ou transmissão.
      </Paragraph>




    </Container>
  );
}

export default Report8;
