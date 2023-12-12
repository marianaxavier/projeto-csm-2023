import React from 'react';
import './styles.scss';
import { Aavatar, Django, Eu, Htmx, Hyperscript } from '../../../assets/members/marcelo';

const About = () => {
  return (
    <div className='marcelo'>
      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-6 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">Olá, eu sou o Marcelo</h1>
            <p className="lead fw-normal">Esta é minha página para a disciplina de Codificação de Sinais Multimídia do quadrimestre 2023.3 da UFABC</p>
            <a className="btn btn-outline-secondary" href="https://marianaxavier.github.io/projeto-csm-2023/#">Página do Grupo</a>
          </div>

          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Um pouco sobre mim</h2>
              <p className="lead">Curso Engenharia de Informação, entrei na UFABC em 2019</p>
            </div>
            <div className="bg-light shadow-sm mx-auto" style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0', paddingBottom: '1px'}}>
              <img src={Eu} alt="eu" width="250" height="300"/>
            </div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Meu avatar</h2>
              <p className="lead">É um pinguim</p>
            </div>
            <div className="bg-dark shadow-sm mx-auto" style={{width: '80%', height: '330px', borderRadius: '21px 21px 0 0', paddingTop: '25px'}}>
              <img src={Aavatar} alt="avatar" width="250" height="300"/>
            </div>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Meus Hobbies</h2>
              <p className="lead">Alguns de meus favoritos</p>
            </div>
            <div className="bg-body shadow-sm mx-auto" style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0', paddingBottom: '1px'}}>
                <h5 className="pt-3">Jogos:</h5>
                <ul className="list-unstyled text-small">
                    <li>The Witcher 3</li>
                    <li>Final Fantasy</li>
                </ul>
                <h5>Livros:</h5>
                <ul className="list-unstyled text-small">
                    <li>Senhor dos Anéis</li>
                    <li>A Fundação</li>
                </ul>
                <h5>Atividades:</h5>
                <ul className="list-unstyled text-small">
                    <li>RPG de mesa</li>
                    <li>Eventos e Concertos</li>
                </ul>
            </div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Música Favorita</h2>
              <p className="lead">Tema da expansão 'Shadowbringers' do jogo Final Fantasy 14 Online</p>
            </div>
            <div className="bg-body shadow-sm mx-auto" style={{width: '80%', borderRadius: '21px 21px 0 0', padding: '20px', height: '270px'}}>
              <iframe style={{marginTop: '40px'}} src="https://www.youtube.com/embed/6ugtWT_iNqw?si=DhEcM_SryO6JxQoI"
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Programação</h2>
              <p className="lead">Aprendi a programar em 2021, e desde então estudei diversos campos, e trabalhei com diversas tecnologias, entre elas as que mais domino são:</p>
            </div>
            <div className="bg-body shadow-sm mx-auto" style={{width: '80%', height: '315px', borderRadius: '21px 21px 0 0', paddingBottom: '1px'}}>
                <h5 className="pt-3">Áreas de Estudo:</h5>
                <ul className="list-unstyled text-small">
                    <li>Aprendizado de Máquina</li>
                    <li>Bancos de Dados</li>
                </ul>
                <h5>Linguagens:</h5>
                <ul className="list-unstyled text-small">
                    <li>Python e C</li>
                </ul>
                <h5>Tecnologias e Frameworks</h5>
                <ul className="list-unstyled text-small">
                    <li>Django</li>
                    <li>HTMX</li>
                    <li>Hyperscript</li>
                </ul>
            </div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Meu Trabalho</h2>
              <p className="lead">Atualmente faço estágio como desenvolvedor web de uma plataforma de gerenciamento de investimentos</p>
            </div>
            <div className="bg-body shadow-sm mx-auto" style={{width: '80%', borderRadius: '21px 21px 0 0', paddingBottom: '1px'}}>
                <h5 className="p-3">Algumas tecnologias com as quais eu trabalho:</h5>
                <figure className="p-3 m-3">
                    <img src={Htmx} alt="htmx" width="150" height="100"/>
                    <img src={Hyperscript} alt="hyperscript" width="150" height="100"/>
                    <img src={Django} alt="django" width="150" height="100"/>
                </figure>
            </div>
          </div>
        </div>
      </main>

      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
            <small className="d-block mb-3 text-muted">&copy; 2023</small>
          </div>
          <div className="col-12 col-md">
            <h5>Fontes e estilos:</h5>
            <ul className="list-unstyled text-small">
              <li><a className="link-secondary" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">Bootstrap 5</a></li>
            </ul>
          </div>
        </div>
      </footer>

      <script src="/docs/5.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

    </div>
  );
}

export default About;
