import React, { useState } from 'react';

function App() {
  const [filmes, setFilmes] = useState([]);

  const carregarFilmes = async () => {
    try {
      const apiKey = 'sua-chave-de-api';
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey
      );
      const data = await response.json();
      setFilmes(data.results);
    } catch (error) {
      console.error('Erro ao carregar filmes:', error);
    }
  };

  return (
    <div>
      <button onClick={carregarFilmes}>Carregar Filmes Populares</button>
      <div>
        {filmes.map((filme) => (
          <div key={filme.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
              alt={filme.title}
              style={{ width: '200px' }}
            />
            <p>{filme.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;