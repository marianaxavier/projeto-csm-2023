import React from 'react';
import { Container, Typography } from '@mui/material';
import Paragraph from '../../../components/paragraph';
import TextImage from '../../../components/text-image';
import { AdailsonX1, AdailsonX2, AdailsonX3, AdailsonX4, AdailsonX5, Img1, Img2, JoaoX1, JoaoX2, JoaoX3, JoaoX4, JoaoX5, MarceloX1, MarceloX2, MarceloX3, MarceloX4, MarianaX1, MarianaX2, MarianaX3, MarianaX4, MarianaX5, RenanX1, RenanX2, RenanX3, RenanX4, RenanX5 } from '../../../assets/reports/report9';
import TextAudio from '../../../components/text-audio';

const Report9 = () => {
  return (
    <Container style={{marginTop: '50px'}}>
      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Introdução</Typography>
      <Paragraph>
        Este experimento destaca a importância dos avanços tecnológicos na produção musical digital, com ênfase no papel
        crucial do Reaper, uma estação de áudio digital versátil. O trabalho propõe explorar a integração de
        instrumentos MIDI no Reaper, abordando a qualidade de reprodução MIDI, técnicas de configuração eficiente e a
        capacidade única do software em simular ambientes diversos.
      </Paragraph>
      <Paragraph>
        A fidelidade na representação musical é ressaltada como essencial para a experiência do ouvinte e a expressão
        artística do produtor. O Reaper é reconhecido por oferecer recursos avançados que transcendem a produção
        convencional, permitindo aos artistas expandirem suas possibilidades criativas.
      </Paragraph>
      <Paragraph>
        A abordagem do trabalho inclui análise prática da configuração de instrumentos MIDI, avaliação da qualidade de
        reprodução e exploração da simulação acústica com respostas impulsivas. O objetivo é desvendar as
        funcionalidades fundamentais do Reaper, a manipulação de instrumentos MIDI e a criação de experiências sonoras.
      </Paragraph>



      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Metodologia</Typography>
      <Paragraph>
        O procedimento para execução do experimento foi o seguinte:
      </Paragraph>
      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>MIDI</Typography>
      <TextImage image={Img1} imageNumber={1} subtitle='Ambiente Reaper com MIDI carregado.'/>
      <Paragraph>
        Primeiramente, acessamos o link “https://www.reaper.fm/download.php” para fazer o download do software chamado
        Reaper e o instalamos.
      </Paragraph>
      <Paragraph>
        Como é necessário a utilização de um ou mais instrumentos virtuais, utilizamos o link “https://labs.spitfireaudio.com/”
        para fazer o download do VST3i. Percebemos que para utilizar o VST3i era necessário baixar o software ‘Spitfire
        Audio’, e a partir dele instalar os intrumentos virtuais, só assim o Reaper carregava o instrumento desejado.
      </Paragraph>
      <Paragraph>
        O passo seguinte foi procurar um arquivo MIDI, foi dado como exemplo os arquivos encontrados no endereço “http://www.piano-midi.de/”,
        mas alguns decidiram procurar em outros lugares.
      </Paragraph>
      <Paragraph>
        Uma vez com o Reaper executado, carregamos o arquivo MIDI, logo é possível ver as trilhas correspondentes a cada
        instrumento, em cada trilha, nos suas configurações, é possível carregar um instrumento virtual clicando no botão ‘FX’.
        Uma vez configurada a trilha, fomos fazendo o mesmo para as outras e depois clicamos em ‘play’ para tocar o MIDI.
      </Paragraph>
      <Paragraph>
        Por fim, com tudo soando como desejado, renderizamos tudo em um único arquivo com formato ‘.wav’ e repetimos
        isso para cada integrante do grupo.
      </Paragraph>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Impulse Response</Typography>
      <TextImage image={Img2} imageNumber={2} subtitle='Exemplo de Impulse Responde se uma Capela.'/>
      <Paragraph>
        Na segunda etapa do experimento, foi disponibilizado um código em python na plataforma Colab do Google, o código
        executa as seguintes funções:
      </Paragraph>
      <Paragraph>
        <ul style={{textAlign: 'justify', textIndent: '0px'}}>
          <li>Montar um drive para conter nossos arquivos;</li>
          <li>Importar as bibliotecas com as funções necessárias;</li>
          <li>Carregar o arquivo ‘.wav’ com a resposta impulsiva que queremos e o normalizamos;</li>
          <li>Depois carregamos o arquivo contendo a nossa música e o normalizamos;</li>
          <li>Executamos uma convolução com ambos arquivos;</li>
          <li>Por fim, reproduzimos para poder testar e validar.</li>
        </ul>
      </Paragraph>
      <Paragraph>
        O procedimento acima foi utilizado para a simulação de mais três ambientes com IR, sendo eles o pequeno-fechado,
        auditório médio e igreja grande, e eles foram aplicados em outra música criada. Os três IR foram tirados da
        página “https://www.openair.hosted.york.ac.uk/?page_id=36”.
      </Paragraph>

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Resultados</Typography>
      <Paragraph>
        Primeiro, cada integrante do grupo gerou uma música com o Reaper, utilizando um arquivo MIDI e um instrumento de
        sua escolha, os resultados estão a seguir:
      </Paragraph>

      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Adailson</Typography>
      <TextAudio audio={AdailsonX1} audioType={'audio/wav'}/>

      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>João</Typography>
      <TextAudio audio={JoaoX1} audioType={'audio/wav'}/>

      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Marcelo</Typography>
      <TextAudio audio={MarceloX1} audioType={'audio/wav'}/>

      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Mariana</Typography>
      <TextAudio audio={MarianaX1} audioType={'audio/wav'}/>

      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Renan</Typography>
      <TextAudio audio={RenanX1} audioType={'audio/wav'}/>

      <Paragraph>
        Em seguida, cada integrante do grupo gerou uma segunda musica e nela aplicou-se três IRs, um em ambiente de concerto,
        um em um ambiente aberto e um em ambiente fechado, os resultados estão a seguir:
      </Paragraph>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Adailson</Typography>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Segunda Música</Typography>
      <TextAudio audio={AdailsonX2} audioType={'audio/wav'}/>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Concerto</Typography>
      <TextAudio audio={AdailsonX3} audioType={'audio/wav'}/>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Ambiente Aberto</Typography>
      <TextAudio audio={AdailsonX4} audioType={'audio/wav'}/>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Ambiente Fechado</Typography>
      <TextAudio audio={AdailsonX5} audioType={'audio/wav'}/>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>João</Typography>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Segunda Música</Typography>
      <TextAudio audio={JoaoX2} audioType={'audio/wav'}/>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Concerto</Typography>
      <TextAudio audio={JoaoX3} audioType={'audio/wav'}/>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Ambiente Aberto</Typography>
      <TextAudio audio={JoaoX4} audioType={'audio/wav'}/>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Ambiente Fechado</Typography>
      <TextAudio audio={JoaoX5} audioType={'audio/wav'}/>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Marcelo</Typography>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Segunda Música</Typography>
      <TextAudio audio={MarceloX2} audioType={'audio/wav'}/>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Concerto</Typography>
      <TextAudio audio={MarceloX3} audioType={'audio/wav'}/>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Ambiente Aberto</Typography>
      <TextAudio audio={MarceloX4} audioType={'audio/wav'}/>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Mariana</Typography>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Segunda Música</Typography>
      <TextAudio audio={MarianaX2} audioType={'audio/wav'}/>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Concerto</Typography>
      <TextAudio audio={MarianaX3} audioType={'audio/wav'}/>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Ambiente Aberto</Typography>
      <TextAudio audio={MarianaX4} audioType={'audio/wav'}/>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Ambiente Fechado</Typography>
      <TextAudio audio={MarianaX5} audioType={'audio/wav'}/>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Renan</Typography>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Segunda Música</Typography>
      <TextAudio audio={RenanX2} audioType={'audio/wav'}/>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Concerto</Typography>
      <TextAudio audio={RenanX3} audioType={'audio/wav'}/>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Ambiente Aberto</Typography>
      <TextAudio audio={RenanX4} audioType={'audio/wav'}/>
      <Typography variant='h6' textAlign='justify' mb={3} mt={5}>Ambiente Fechado</Typography>
      <TextAudio audio={RenanX5} audioType={'audio/wav'}/>


      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Discussões</Typography>
      <Paragraph>No contexto do experimento descrito, há várias discussões interessantes que abordaremos:</Paragraph>
      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Integração e configuração de Instrumentos MIDI no Reaper:</Typography>

      <Paragraph>
        Vimos que é relativamente fácil carregar um arquivo MIDI e acrescentar instrumentos virtuais, ele possui uma grande versatilidade.
      </Paragraph>
      <Paragraph>
        O ambiente é bem intuitivo e tudo o que foi necessário estava bem à frente dos olhos, com cada instrumento separado numa faixa diferente, assim podendo aplicar o timbre do instrumento desejado, aplicar algum outro efeito ou controlar volume etc.
      </Paragraph>
      <Paragraph>
        A emulação dos timbres soam muito próximos do real.
      </Paragraph>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Simulação Acústica com Respostas Impulsivas:</Typography>

      <Paragraph>
        Quando aplicamos as respostas impulsivas nas músicas criadas, foi possível perceber a ambientalização mudando.
      </Paragraph>
      <Paragraph>
        Algumas músicas ficaram com uma qualidade aparentemente deteriorada.
      </Paragraph>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Fidelidade na Representação Musical:</Typography>

      <Paragraph>
        No geral, conseguimos ver a importância da fidelidade na representação musical digital.
      </Paragraph>
      <Paragraph>
        Todo o mérito se dá ao Reaper, que contribuiu para preservar nuances musicais durante a reprodução do MIDI.
      </Paragraph>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Eficiência do Código em Python para Convolução:</Typography>

      <Paragraph>
        Talvez alguns áudios ficaram deteriorados por conta da convolução realizada pelo python.
      </Paragraph>
      <Paragraph>
        Foi possível constatar que quanto maior o arquivo de áudio que será convolucionado, maior é o tempo de processamento, em alguns casos demorou mais de 4 minutos para gerar o arquivo final.
      </Paragraph>

      <Typography variant='h5' textAlign='justify' mb={3} mt={5}>Variações Individuais nos Resultados:</Typography>

      <Paragraph>
        Houve diferença nos experimentos individuais?
      </Paragraph>


      <Paragraph>
        Essas discussões foram fundamentais para compreender os aspectos práticos, técnicos e perceptuais do experimento, fornecendo insights valiosos sobre o funcionamento dos IRs e da eficácia do Reaper na produção musical digital e na aplicação de simulações acústicas.
      </Paragraph>


      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Conclusão</Typography>
      <Paragraph>
        Em síntese, este experimento revelou o papel crucial do Reaper na produção musical digital, destacando sua
        versatilidade na integração de instrumentos MIDI. A aplicação de respostas impulsivas proporcionou uma dimensão
        realista e imersiva às composições. As variações individuais nos resultados, aliadas à eficácia do código em
        Python para convolução, ressaltaram não apenas a subjetividade nas escolhas dos participantes, mas também o
        potencial do Reaper como uma ferramenta robusta na criação de experiências sonoras autênticas e inovadoras.
      </Paragraph>

      <Typography variant='h4' textAlign='justify' mb={3} mt={5}>Sugestão de Melhorias</Typography>
      <Paragraph>
        Talvez não seja tão necessário fazer o mesmo experimento de aplicar IRs em mais de uma música, pois com uma já
        é o suficiente para perceber diferenças interessantes e entender como tudo funciona.
      </Paragraph>
    </Container>
  );
}

export default Report9;
