import React from 'react';
import { AranduPhoto, AranduAudio, Avatar, Photo, Dive, Paraglider, Arrow } from '../../../assets/members/mariana';
import './styles.scss';

const About = () => {
  return (
    <div className="container-mari">
      <div className="image-container">
        <img
          className="background-image"
          src={ Photo }
          alt="Background"
        />
        <img
          className="overlay-avatar"
          src={ Avatar }
          alt="Overlay"
        />
        <img
          className="overlay-arrow"
          src={ Arrow }
          alt="Seta"
        />
        <p className="small-explanation">
          Minha cor preferida é o amarelo, por esse motivo e por outros o
          girassol se tornou minha flor preferida. Por isso escolhi um girassol
          para ser o meu avatar. 🌻
        </p>
      </div>
      <h1>Olá, eu sou a Mariana!</h1>
      <p className="subtitle">Estudante da Engenharia da Informação na UFABC!</p>

      <h2>A UFABC</h2>
      <p>
        Ingressei na UFABC em 2017 sonhando em cursar Engenharia Aeroespacial,
        mas logo em meu primeiro quadrimestre percebi que tinha muito interesse
        em programação e, após cursar algumas disciplinas de Ciência da
        Computação e Engenharia da Informação, decidi seguir com a Engenharia da
        Informação. Apesar de não ter seguido com a Engenharia Aeroespacial,
        ainda tenho muito interesse na área e por conta disso, busquei
        participar de atividades extracurriculares que me permitissem me
        envolver mais com essa engenharia também, e foi assim que eu conheci o
        Arandu!
      </p>

      <audio controls>
        <source src={ AranduAudio } type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>

      <br /><br />

      <img
        className="normal-image"
        src={ AranduPhoto }
        alt="Foto do time do Arandu em 2018."
      />

      <h2>Aventuras</h2>

      <p>
        Além de programação, também sou apaixonada mar e aventuras. Essa paixões
        me levaram a fazer um curso de mergulho e me tornar mergulhadora
        certificada pela PADI.
      </p>

      <object
        data={ Dive }
        type="application/pdf"
        width="800"
        height="600"
      >
        <p>Your browser does not support PDFs.</p>
      </object>

      <p>
        Também me levaram a enfrentar meus medos e pular de parapente no ano
        passado, o que foi uma experiência incrível!
      </p>

      <video controls height="360">
        <source src={ Paraglider } type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h2>No dia a dia...</h2>

      <p>
        Infelizmente, não é todo dia que eu posso mergulhar ou saltar de
        parapente, então, para me divertir no dia a dia, eu gosto de jogar
        videogames, sozinha ou com meus amigos. Recentemente, um dos meus jogos
        preferidos tem sido <i>Dave The Diver</i>, um jogo que conta a história
        de um mergulhador que abre um restaurante junto com alguns amigos, e
        deve mergulgar para conseguir os ingredientes para os pratos e também
        para salvar o ecossistema marinho que está sofrendo com alguns problemas
        misteriosos.
      </p>

      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/p85VHMpE0to?si=7w1N0NO9GU2ET0Qe"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default About;
