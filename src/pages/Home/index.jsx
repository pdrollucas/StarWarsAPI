import "./home.css"
import { useEffect, useState } from 'react';
import api from '../../services/api';
import PropTypes from 'prop-types';
import TabelaPersonagens from "../../elements/Tabelas/tabelaPersonagens";
import TabelaVeiculos from "../../elements/Tabelas/tabelaVeiculos";
import TabelaFilmes from "../../elements/Tabelas/tabelaFilmes";


function NumberDisplay({ title, count }) {
  return (
    <article className="numero">
      <p>{title}</p>
      <h2>{count}</h2>
    </article>
  );
}

NumberDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

function Home() {
  const [contagens, setContagens] = useState({
    contagemPeople: 0,
    contagemPlanets: 0,
    contagemFilms: 0,
    contagemShips: 0,
  });

  useEffect(() => {
    async function loadData() {
      try {
        const people = await api.get('people/');
        const planets = await api.get('planets/');
        const films = await api.get('films/');
        const ships = await api.get('starships/');

        setContagens({
          contagemPeople: people.data.count,
          contagemPlanets: planets.data.count,
          contagemFilms: films.data.count,
          contagemShips: ships.data.count,
        });
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    loadData();
  }, []);

  return (
    <div className="home">
      <section className="numeros">
        <NumberDisplay title="Pessoas" count={contagens.contagemPeople} />
        <NumberDisplay title="Planetas" count={contagens.contagemPlanets} />
        <NumberDisplay title="Filmes" count={contagens.contagemFilms} />
        <NumberDisplay title="Espaço naves" count={contagens.contagemShips} />
      </section>

      <section className="container">
        <div className="container-topo">
          <h2>Pessoas</h2>
          <div className="area-input">
            <input type="search" />
            <img src="./src/assets/search - anticon.png" alt="Lupa de pesquisa" className="lupa"/>
          </div>
        </div>
        <TabelaPersonagens />
      </section>
      <section className="container">
        <div className="container-topo">
          <h2>Veículos</h2>
          <div className="area-input">
            <input type="search" />
            <img src="./src/assets/search - anticon.png" alt="Lupa de pesquisa" className="lupa"/>
          </div>
        </div>
        <TabelaVeiculos />
      </section>
      <section className="container">
        <div className="container-topo">
          <h2>Filmes</h2>
          <div className="area-input">
            <input type="search" />
            <img src="./src/assets/search - anticon.png" alt="Lupa de pesquisa" className="lupa"/>
          </div>
        </div>
        <TabelaFilmes />
      </section>
    </div>
  );
}

export default Home;
