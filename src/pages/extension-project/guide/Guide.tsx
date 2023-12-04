import React from 'react';
import { Container, Typography } from '@mui/material';
import Paragraph from '../../../components/paragraph';
import TextImage from '../../../components/text-image';
import TextVideo from '../../../components/text-video';
import TextPdf from '../../../components/text-pdf';
import { Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8 } from '../../../assets/extension-project/guide';

const Guide = () => {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>
        Introdução
      </Typography>
      <Paragraph>
        Nos últimos anos, a realidade virtual (VR) emergiu como uma tecnologia inovadora, transformando a maneira como interagimos com ambientes digitais. Este experimento propõe uma abordagem de ensino envolvente e educativa, utilizando óculos de realidade virtual para criar um ambiente tridimensional digital repleto de figuras geométricas. A proposta visa não apenas proporcionar uma experiência imersiva e estimulante, mas também integrar elementos educativos, desafiando os participantes a explorar e compreender propriedades fundamentais das figuras geométricas tridimensionais.
      </Paragraph>
      <TextImage image={Img1} imageNumber={11} subtitle='' width={700}/>
      <Paragraph>Cada visitante será imerso em um ambiente 3D único, onde encontrará desafios de geometria como exercícios para identificar características específicas de sólidos, como áreas, faces e vértices. Ao utilizar a realidade virtual como ferramenta de ensino, o experimento busca criar uma conexão mais tangível entre os conceitos abstratos da geometria tridimensional e a percepção prática do participante.</Paragraph>
      <Paragraph>Ao longo deste experimento, exploraremos os aspectos técnicos da implementação do projeto e os desafios encontrados no planejamento da experiência em realidade virtual.</Paragraph>

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>
        Objetivos
      </Typography>
      <Paragraph>
        <ul style={{textAlign: 'justify', textIndent: '0px'}}>
          <li>Apresentar conceitos de Matemática para os estudantes. Para este relatório usaremos o conteúdo de Geometria, mas é possível adaptar o experimento para outros conteúdos presentes no aplicativo MathVR, usado;</li>
          <li>Apresentar a tecnologia de Realidade Virtual para os estudantes. Para estudantes de Ensino Médio seria possível, inclusive, associar o experimento a conceitos básicos de óptica (lentes);</li>
          <li>Proporcionar uma abordagem diferenciada e divertida de aprendizagem.</li>
        </ul>
      </Paragraph>

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>
        Materiais Necessários
      </Typography>
      <Paragraph>
        <ul style={{textAlign: 'justify', textIndent: '0px'}}>
          <li>
            Celular Android com giroscópio;
            <ul style={{textAlign: 'justify', textIndent: '0px'}}>
              <li>
              Aplicativo MathVR baixado no celular. Ele pode ser baixado a partir deste <a href="https://drive.google.com/drive/folders/1LvG3iMwXpM9Y9dsbt5gdcdq2HJJvHOuC?usp=sharing">link</a>;
              </li>
            </ul>
          </li>
          <li>
            Óculos VR com suporte a celular;
            <ul style={{textAlign: 'justify', textIndent: '0px'}}>
              <li>
                É importante que o óculos tenha algum tipo de interface que permita a interação com o celular mesmo que este não esteja na mão do usuário, por exemplo, um botão no óculos que permita clicar na tela ou um controle remoto conectado ao celular;
              </li>
              <li>
                Para este roteiro utilizou-se o Óculos VR <b>BOBO VR Z4</b>, que possui um botão no óculos que possibilita pressionar a tela mesmo ele estando dentro do óculos.
              </li>
            </ul>
          </li>
        </ul>
      </Paragraph>

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>
        Montagem do Experimento
      </Typography>
      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>
        Instalação do Aplicativo no Celular
      </Typography>
      <Paragraph>
        <ol style={{textAlign: 'justify', textIndent: '0px'}}>
          <li>
            Faça download do APK a partir do link fornecido na seção anterior;
          </li>
          <li>
            Abra a pasta de Downloads e clique no ícone do APK baixado;
          </li>
        </ol>
      </Paragraph>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>
        Montagem do Óculos
      </Typography>
      <Paragraph>
        Uma vez que o aplicativo já está instalado no celular, é possível montar o óculos VR seguindo os seguintes passos:
      </Paragraph>
      <Paragraph>
        <ol style={{textAlign: 'justify', textIndent: '0px'}}>
          <li>
            Abrir o aplicativo no celular;
          </li>
          <li>
            Selecionar a atividade desejada;
          </li>
          <li>
            Abrir o compartimento do óculos VR e encaixar o plug P2 no conector do celular;
          </li>
          <TextImage image={Img2} imageNumber={12} subtitle='' width={300}/>
          <li>
            Posicionar o celular, garantindo que ele esteja o mais centralizado possível, e depois fechar o compartimento;
          </li>
          <TextImage image={Img3} imageNumber={12} subtitle='' width={300}/>
          <li>
            Colocar o Óculos VR sobre os olhos do estudante e ajustar as tiras em torno da cabeça para garantir conforto e fixação do óculos;
            <ol style={{textAlign: 'justify', textIndent: '0px'}}>
              <li>
              Estudantes que usam óculos devem manter o óculos para a realização do experimento para garantir a visualização correta da mídia apresentada;
              </li>
            </ol>
          </li>
          <TextImage image={Img4} imageNumber={12} subtitle='' width={700}/>
          <li>
            Girar os ajustes de lente presentes na lateral dos óculos até que o estudante confirme que o foco está bem ajustado.
          </li>
          <TextImage image={Img5} imageNumber={12} subtitle='' width={400}/>
          <li>
            Girar o ajuste estereoscópico até obter uma imagem não duplicada.
          </li>
          <TextImage image={Img6} imageNumber={12} subtitle='' width={500}/>
          <TextImage image={Img7} imageNumber={12} subtitle='' width={500}/>
          <li>
          Para interagir com os elementos do ambiente 3D o óculos dispõe de um botão na parte inferior;
          </li>
          <TextImage image={Img8} imageNumber={12} subtitle='' width={500}/>
        </ol>
      </Paragraph>
    </Container>
  )
}

export default Guide;
