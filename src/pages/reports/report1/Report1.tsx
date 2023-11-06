import React from 'react';
import { Container, Typography } from '@mui/material';
import Paragraph from '../../../components/paragraph';
import TextImage from '../../../components/text-image';
import { AdailsonCamera, GroupCamera, MarceloCamera, MariCamera, RenanCamera } from '../../../assets/reports/report1/fotos_camera';
import { AdailsonCelular, GroupCelular, MarceloCelular, MariCelular, RenanCelular } from '../../../assets/reports/report1/fotos_celular';
import TextYoutubeVideo from '../../../components/text-youtube-video';
import { Comparative1, Comparative2 } from '../../../assets/reports/report1/comparacao';
import TextVideo from '../../../components/text-video';
import { LentoCamera270_25, LentoCamera540_50, LentoCelular270_25, LentoCelular540_50, RapidoCamera270_25, RapidoCamera540_50, RapidoCelular270_25, RapidoCelular540_50 } from '../../../assets/reports/report1/videos_novas_resoluções';

const Report1 = () => {
  return (
    <Container style={{marginTop: '50px'}}>
      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Introdução</Typography>
      <Paragraph>
        O registro de momentos importantes a partir de imagens e vídeos é algo
        que se tornou muito comum nos dias atuais. Com o avanço da tecnologia,
        dispositivos com câmeras tem se tornado cada vez mais acessíveis e potentes.
        Para permitir isso, é necessário que os arquivos gerados por esses dispositivos
        sejam comprimidos, de forma que não ocupem muito espaço de armazenamento, mas sem
        perder a qualidade.
      </Paragraph>

      <Paragraph>
        Existem diversas formas de atingir esse objetivo, e cada empresa de tecnologia
        usa aquela que lhe trás melhor custo benefício, e essa variedade é facilmente observada
        pelos usuários desses dispositivos através da <b>extensão</b> dos arquivos de fotos e vídeos
        gerados por eles. Essas extensões, na prática, são apenas uma forma de identificar a maneira
        como os dados foram comprimidos, e por isso, é possível que um mesmo arquivo tenha extensões
        diferentes, mas que representem a mesma informação.
      </Paragraph>

      <Paragraph>
        Cada forma de compressão de dados possui suas vantagens e desvantagens, algumas geram
        arquivos menores, mas com perda de qualidade, outras geram arquivos maiores, mas com
        qualidade elevada, e outras ainda, conseguem um equilíbrio entre esses dois fatores.
        O objetivo deste relatório é explorar os efeitos qualitativos gerados em fotos e vídeos
        pelo uso de diferentes dispositivos, diferentes extensões e diferentes resoluções.
      </Paragraph>

      <br/>
      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Metodologia e Procedimentos</Typography>
      <Paragraph>
        A primeira etapa para a realização deste relatório foi a escolha dos dispositivos. O primeiro,
        disponibilizado pelo professor, foi uma <b>filmadora Panasonic semi-profissional</b> e o segundo,
        foi um <b>iPhone 11</b>, que possui uma câmera de 12MP.
      </Paragraph>

      <Paragraph>
        Com as câmeras em mãos, começou-se a execução do laboratório tirando fotos do grupo todo, e depois
        de cada um dos integrantes do grupo separadamente. Os resultados estão a seguir:
      </Paragraph>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Fotos tiradas com a filmadora Panasonic</Typography>
      <div className="images">
        <TextImage image={GroupCamera} imageNumber={1} subtitle='Foto do grupo tirada com a filmadora Panasonic.'/>
        <TextImage image={AdailsonCamera} imageNumber={2} subtitle='Foto do integrante Adailson tirada com a filmadora Panasonic.'/>
        <TextImage image={MarceloCamera} imageNumber={3} subtitle='Foto do integrante Marcelo tirada com a filmadora Panasonic.'/>
        <TextImage image={MariCamera} imageNumber={4} subtitle='Foto da integrante Mariana tirada com a filmadora Panasonic.'/>
        <TextImage image={RenanCamera} imageNumber={5} subtitle='Foto do integrante Renan tirada com a filmadora Panasonic.'/>
      </div>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Fotos tiradas com o iPhone</Typography>
      <div className="images">
        <TextImage image={GroupCelular} imageNumber={6} subtitle='Foto do grupo tirada com o iPhone.'/>
        <TextImage image={AdailsonCelular} imageNumber={7} subtitle='Foto do integrante Adailson tirada com o iPhone.'/>
        <TextImage image={MarceloCelular} imageNumber={8} subtitle='Foto do integrante Marcelo tirada com o iPhone.'/>
        <TextImage image={MariCelular} imageNumber={9} subtitle='Foto da integrante Mariana tirada com o iPhone.'/>
        <TextImage image={RenanCelular} imageNumber={10} subtitle='Foto do integrante Renan tirada com o iPhone.'/>
      </div>

      <Paragraph>
        Em seguida, gravou-se os vídeos com cada um dos dispositivos. Foram gravados dois
        vídeos com cada dispositivo, um com movimentos mais rápidos e outro com movimentos
        mais lentos, com o objetivo de conseguir analisar de forma mais clara o efeito que
        a compressão tem sobre os frames dos vídeos. Os vídeos estão a seguir:
      </Paragraph>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Vídeos gravados com a filmadora Panasonic</Typography>
      <div className="videos">
        <div className="video-container">
          <TextYoutubeVideo youtubeLink='https://www.youtube-nocookie.com/embed/0Ym2G_jicfQ?si=TqyT9rRODXDeEpHw' />
        </div>
        <figcaption><b>Vídeo 1 -</b> Vídeo com movimentos lentos gravado com a filmadora Panasonic.</figcaption>

        <br/>

        <div className="video-container">
          <TextYoutubeVideo youtubeLink='https://www.youtube-nocookie.com/embed/JBFWMsGKh1I?si=2M7p0inJKyK0wUrI' />
        </div>
        <figcaption><b>Vídeo 2 -</b> Vídeo com movimentos rápidos gravado com a filmadora Panasonic.</figcaption>
        <br/>
      </div>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Vídeos gravados com o iPhone</Typography>
      <div className="videos">
        <div className="video-container">
          <TextYoutubeVideo youtubeLink='https://www.youtube-nocookie.com/embed/B_CEF6Bdfmk?si=2z122MnC8mry8vLP' />
        </div>
        <figcaption><b>Vídeo 3 -</b> Vídeo com movimentos lentos gravado com o iPhone.</figcaption>

        <br/>

        <div className="video-container">
          <TextYoutubeVideo youtubeLink='https://www.youtube-nocookie.com/embed/dm_xXMOaG8g?si=WW-BY_hEdiPPfAC8' />
        </div>
        <figcaption><b>Vídeo 4 -</b> Vídeo com movimentos rápidos gravado com o iPhone.</figcaption>
        <br/>
      </div>

      <Paragraph>
        É importante ressaltar que optou-se por disponibilizar os vídeos originais pelo YouTube, pois
        a página HTML não permite adicionar vídeos nos formatos .MTS e .MOV, que são os formatos
        originais dos vídeos gravados pela filmadora Panasonic e pelo iPhone, respectivamente.
      </Paragraph>


      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Resultados e Análises</Typography>
      <Paragraph>
        A primeira análise realizada foi a comparação entre as fotos tiradas com a filmadora
        Panasonic e as tiradas com o iPhone. A primeira diferença observada foi a tonalidade
        das cores nas imagens. Quando comparamos os fundos das imagens Img. 1 e Img. 6, por
        exemplo, é possível observar que na foto tirada pelo iPhone, o fundo está mais amarelado,
        mesmo o ambiente sendo o mesmo.
      </Paragraph>

      <Paragraph>
        Além disso, quando aproximamos as imagens com um zoom de 1000%, obtém-se as comparações a seguir:
      </Paragraph>

      <div className="images">
        <TextImage image={Comparative1} imageNumber={11} subtitle='Comparação focando numa parte da imagem com pouca mudança de cor.' />
        <TextImage image={Comparative2} imageNumber={12} subtitle='Comparação focando em uma parte com bastante mudança de cor.' />
      </div>

      <Paragraph>
        Nas duas imagens acima, é possível observar que o zoom da foto tirada com a filmadora Panasonic resultou
        em uma aproximação maior dos objetos, no entanto, a imagem manteve uma nitidez bem próxima, e talvez até
        maior, do que a imagem tirada com o iPhone, mesmo a proximidade desta não sendo tanta. Isso mostra como a
        qualidade da imagem gerada pela filmadora Panasonic é superior à do iPhone.
      </Paragraph>

      <Paragraph>
        Na próxima análise, os videos gravados na filmadora Panasonic e no Iphone, que inicialmente possuem resolução
        original de 1080p, vão sofrer um alteração nas suas resoluções sendo reduzidas para 50% e para 25% do valor
        original, ie, 540p e 270p.
      </Paragraph>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Vídeos gravados com a filmadora Panasonic</Typography>
      <div className="videos">
      	<TextVideo video={RapidoCamera270_25} videoType='video/mp4' videoNumber={5} subtitle='Vídeo com movimentos rápidos gravados na filmadora panasonic com resolução 25% da 	original.'/>

        <br/>

      	<TextVideo video={RapidoCamera540_50} videoType='video/mp4' videoNumber={6} subtitle='Vídeo com movimentos rápidos gravados na filmadora panasonic com resolução 50% da 	original.'/>

	      <br/>

      	<TextVideo video={LentoCamera270_25} videoType='video/mp4' videoNumber={7} subtitle='Vídeo com movimentos lentos gravados na filmadora panasonic com resolução 25% da 	original.'/>

	      <br/>

      	<TextVideo video={LentoCamera540_50} videoType='video/mp4' videoNumber={8} subtitle='Vídeo com movimentos lentos gravados na filmadora panasonic com resolução 50% da 	original.'/>

        <br/>
      </div>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Vídeos gravados com o Iphone</Typography>
      <div className="videos">
      	<TextVideo video={RapidoCelular270_25} videoType='video/mp4' videoNumber={9} subtitle='Vídeo com movimentos rápidos gravados no iphone com resolução 25% da 	original.'/>

        <br/>

      	<TextVideo video={RapidoCelular540_50} videoType='video/mp4' videoNumber={10} subtitle='Vídeo com movimentos rápidos gravados no iphone com resolução 50% da 	original.'/>

	      <br/>

      	<TextVideo video={LentoCelular270_25} videoType='video/mp4' videoNumber={11} subtitle='Vídeo com movimentos lentos gravados no iphone com resolução 25% da 	original.'/>

	      <br/>

      	<TextVideo video={LentoCelular540_50} videoType='video/mp4' videoNumber={12} subtitle='Vídeo com movimentos lentos gravados no iphone com resolução 50% da 	original.'/>

      </div>


      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Conclusões</Typography>
      <Paragraph>
        A partir dos resultados obtidos, é possível concluir que a filmadora Panasonic é superior ao iPhone
        em termos de qualidade de imagem, no entanto, a filmadora Panasonic é um dispositivo muito mais
        caro e menos acessível do que o iPhone, que é um dispositivo que possui diversas outras funcionalidades
        além da câmera, além de ter um porte consideravelmente menor. Nesse sentido, o iPhone é um dispositivo
        que se mostra muito vantajoso, principalmente para fins não profissionais.
      </Paragraph>
    </Container>
  );
}

export default Report1;
