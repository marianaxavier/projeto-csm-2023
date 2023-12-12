import { Container, Typography } from '@mui/material';
import React from 'react';
import Paragraph from '../../../components/paragraph';
import { ExameDeVisaoOnLineDaZEISS, YourPersonalAudiogram1, YourPersonalAudiogram2 } from '../../../assets/members/renan/Exercicio_Audiometria_Visual';

const Audimetria = () => {
  return (
    <Container>
      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Exercício de Audiometria e Visual</Typography>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Teste de Audimetria e resultados:</Typography>
      <Paragraph>
        Link URL para o teste de audiometria: <a href="http://hearingtest.online/" target="_blank" rel="noreferrer">
          Teste de Audimetria
        </a>.
      </Paragraph>

      <Paragraph>Resultado com fone de ouvido envolvente</Paragraph>
      <object data={YourPersonalAudiogram1} width="550" height="500">YourPersonalAudiogram1</object>

      <Paragraph>Resultado com audio do computador:</Paragraph>
      <object data={YourPersonalAudiogram2} width="550" height="500">YourPersonalAudiogram2</object>

      <Paragraph>
        Comparando ambos os resultados, é observado algumas diferenças entre o teste realizado com fones de ouvido e o
        teste realizado com áudio do computador. Basicamente, o que se observa é o teste com áudio do computador
        apresentou resultados piores em todas as frequências, necessitando que a intesidade do sinal de som fosse maior
        para ser perceptível no ouvido, muito provavelmnte devido ao ruído ambiente. No teste com fones de ouvido,
        também observou-se um pouco da teoria apresentada em aula em que dependendo da frequência, o som só torna-se
        perceptível ao ouvido humano em intensidades ou amplitudes diferentes.
      </Paragraph>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Teste de Acuidade Visual e Resultados:</Typography>
      <Paragraph>
        Link URL para o teste de acuidade visual: <a href="https://visionscreening.zeiss.com/en-INT" target="_blank" rel="noreferrer">
          Teste de Acuidade Visual
        </a>.
      </Paragraph>

      <Paragraph>Resultado do teste de acuidade visual</Paragraph>
      <object data={ExameDeVisaoOnLineDaZEISS} width="550" height="500">ExameDeVisaoOnLineDaZEISS</object>

      <Paragraph>Foram realizados cinco testes ao todo, o teste de acuidade visual que mostra até qual distância o
        individuo consegue detectar certos detalhes, o teste de visão de contraste para detectar diferentes tons de
        cinza, um teste de visão colorida para detectar daltonismo por meio de números coloridos, um teste de
        astigmatismo utilizando um semicirculo de linhas pretas que aparece em diferentes tons de cinza em caso de
        astigmatismo e por fim um teste de campo de visão que indica se há problemas no espaço no qual percebemos a luz
        e detectamos objetos.
      </Paragraph>

      <Paragraph>Analisando os resultados dos testes, é observado que somente o teste de acuidade visual e o teste de
        astigmatismo não obtiveram resultados excelentes, principalmente em meu oho direito, tal resultado já se era
        esperado devido a eu possuir miopia e astigmatismo e utilizar óculos de grau para corrgir tal problema.
      </Paragraph>
    </Container>
  );
}

export default Audimetria;
