import { Container, Typography } from '@mui/material';
import React from 'react';
import Paragraph from '../../../components/paragraph';

const Exercise1 = () => {
  return (
    <Container>
      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Exercício 1 - Visão Humana</Typography>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>a) Na linha 1</Typography>
      <Paragraph>
      A <b>iluminância</b> (E) pode ser descrita como a quantidade de luz que incide sobre uma determinada áea de superfície plana dentro de um ambiente em um dado ponto. A unidade de medida da iluminância é a lux (lx) e pode ser medida praticamente com um luxímetro, como por exemplo na medição da quantidade de luz que incide em um ponto específico de uma mesa de trabalho.
      </Paragraph>

      <Paragraph>
      Os <b>cones</b> são fotoeceptores que covertem a imagem em impulsos elétricos que são transmitidos ao cerébro através do nervo óptico, sendo que os cones são esponsáveis pela visão precisa, central e detalhada e também pela visão em cores.
      </Paragraph>

      <Paragraph>
      O cortex visual associativo (<b>V3, V4 e V5</b>) é a área 19 de Brodmann e tem a função de reconhecer estímulos visuais e relaciona-los as informações armazenadas na memória.
      </Paragraph>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>b) Na linha 2</Typography>
      <Paragraph>
      A <b>adaptação ao bilho</b> pode ser descrito como um fenômenos ue permite o sistema visual humano alcançar todo o intervalo de intensidade luminosa através de mudanças na sensibilidade global. Um exemplo prático desse fenômeno é basicamente na edição de uma foto,   é possível alterar o bilho da foto como desejar a essa mudança é perceptível ao olho humana, enxergando diferentes intensidades luminosas devido a adaptação ao bilho.
      </Paragraph>
    </Container>
  );
}

export default Exercise1;
