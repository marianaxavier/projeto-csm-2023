import React from 'react';
import { Container, Typography } from '@mui/material';
import Paragraph from '../../../components/paragraph';

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



      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Resultados</Typography>


      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Discussões</Typography>


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
