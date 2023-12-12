import React from 'react';
import './styles.scss';
import { Audio, Foto, Pdf, RenanAvatar, Video } from '../../../assets/members/renan';

const About = () => {
  return (
    <div className="renan">
      <body>
        <div id="cabecalho">
          <h1>Eu (Renan) multimidia</h1>
        </div>

        <div id="foto">
          <h2>Foto e Avatar</h2>
          <center>
            <img src={Foto} alt="Minha foto" width="170" height="200" />
            <img src={RenanAvatar} alt="Meu avatar" width="170" height="200" />
          </center>
        </div>

        <div id="principal">
          <p>
            <b
              >Essa é a minha página eu múltimidia, vou apresentar aqui um pouco da
              minha vida multimídia</b
            >
          </p>

          <p>
            Eu sou multimidia em vários aspectos da minha vida, aqui vão alguns
            exemplos:
          </p>
          <ul>
            <li>
              Ao gravar ou escutar um áudio em algum aplicativo, como o whatsapp;
            </li>
            <li>Ao gravar ou assistir um vídeo;</li>
            <li>
              Ao assistir um filme/série em algum streaming como netflix ou no
              próprio cinema como o último que assistir recentemente, "Fale Comigo";
            </li>
            <li>
              Além desses, há multimidia nas músicas, imagens e vários outros
              exemplos.
            </li>
          </ul>

          <p>
            Além dos exemplos cotidianos, o estudo do processamento e codificação
            multimídia é uma das áreas de de enfoque do curso de Engenharia da
            Informação, sendo que essa área de estudo é dividida em sinais de áudio,
            voz, imagem e vídeo. Um pouco de cada tema deve ser estudado nessa
            disciplina de Codificação de Sinais Multimídia.
          </p>
        </div>

        <div id="Audio">
          <center>
            <h2>Áudio</h2>
            <p>Essa seção contém um áudio curto de apresentação</p>

            <audio controls>
              <source src={Audio} type="audio/ogg" />
            </audio>
          </center>
        </div>

        <div id="Video">
          <center>
            <h2>Vídeo</h2>

            <p>
              Essa seção contém um breve vídeo sobre o 1° laboratório da disciplina
              de Codificação de Sinais Multmídia.
            </p>

            <video width="320" height="240" autoPlay controls>
              <source src={Video} type="video/mp4" />
            </video>
          </center>
        </div>

        <div id="Video_Youtube">
          <center>
            <h2>Vídeo Youtube</h2>

            <p>
              Nessa seção vou trazer um curta metragem divertido e ganhador de oscar
              de 1932.
            </p>
            <iframe
              width="420"
              height="315"
              src="https://www.youtube.com/embed/U0fM7gtOZhk?si=950c3t90crN6A-yH"
              title="YouTube video player"
            >
            </iframe>
          </center>
        </div>

        <div id="PDF">
          <center>
            <h2>PDF</h2>

            <p>
              Nessa seção há um pdf com uma imagem ilustrativa sobre a evolução da
              qualidade de imagens e vídeos.
            </p>

            <object data={Pdf} width="625" height="250">PDF File.</object>
          </center>
        </div>

        <div id="Exercícios">
          <p>
            <a
              href="/projeto-csm-2023/#/integrantes/renan/audiometria"
              target="_blank"
              >Exercício Audimetria e Visual</a
            >.
          </p>
          <p>
            <a href="/projeto-csm-2023/#/integrantes/renan/ex1" target="_blank"
              >Exercício 1</a
            >.
          </p>
        </div>
      </body>
    </div>
  );
}

export default About;
