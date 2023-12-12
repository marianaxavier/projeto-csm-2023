import React from 'react';
import './styles.scss';
import { audio1, fig1, video1 } from '../../../assets/members/adailson';

const About = () => {
  return (
    <div className='adailson'>
      <div className="header">
        <h1>Codificação de Sinais Multimídia</h1>
        <h1>EU SOU MULTIMÍDIA</h1>

        <p>Laboratório da disciplina de Codificação de Sinais Multimídia</p>
      </div>
      <div className="row1-container">
        <div className="box box-down cyan">
          <h2>Áudio</h2>
          <p>Reproduzindo áudio na página</p>
          <audio controls>
            <source src={ audio1 } type="audio/ogg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        <div className="box red">
          <h2>Breve apresentação</h2>
          <p>Meu nome é Adailson, moro em Mauá, estou cursando engenharia da informação, trabalho com desenvolvimento de
            projetos eletrônicos numa empresa em Guarulhos. A foto abaixo mostra minha cara de sono ao acordar num dia
            ensolarado para ir para UFABC rsrsrs.</p>
          <img src={fig1} alt="" width="270" height="400"/>
        </div>

        <div className="box box-down blue">
          <h2>Video</h2>
          <p>Reproduzindo video na página</p>
          <video width="320" height="240" controls>
            <source src={video1} type="video/mp4"/>
          </video>
        </div>
      </div>
      <div className="row2-container">
        <div className="box orange">
          <h2>Youtube</h2>
          <p>Reproduzindo video a partir do Youtube. Este é um dos melhores videos do youtube pra mim kkkkk</p>
          <iframe width="420" height="345" src="https://www.youtube.com/embed/8yis7GzlXNM">
          </iframe>
        </div>
      </div>

      <div className="pdfcentral">
        <object data="https://www.africau.edu/images/default/sample.pdf" width="1000" height="500" />
      </div>


      <footer>
        <p className="attribution">
          Mauá, 2023 <a href="https://www.ufabc.edu.br/" target="_blank" rel="noreferrer">UFABC</a>.
          Coded by <a href="#">Adailson A. Souza</a>.
        </p>
      </footer>
    </div>
  );
}

export default About;
