import { useEffect, useState } from 'react';
import { Table } from 'antd';
import api from '../../services/api';

const TabelaFilmes = () => {
  const [filmes, setFilmes] = useState([]);
  
  useEffect(() => {
    async function carregueFilmes() {
      const response = await api.get('films/');
      setFilmes(response.data.results.slice(0, 5));
      console.log(response.data.results)
    }

    carregueFilmes();
  }, []);

  const columns = [
    {
      title: 'Título',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Diretor',
      dataIndex: 'director',
      key: 'director',
    },
    {
      title: 'Qtd. Personagens',
      dataIndex: 'characters',
      key: 'characters',
      render: (characters) => characters.length,
    },
    {
      title: 'Criado em',
      dataIndex: 'created',
      key: 'created',
    },
    {
      title: 'Editado em',
      dataIndex: 'edited',
      key: 'edited',
    },
  ];

  return (
    <Table
      dataSource={filmes.map((filme) => ({ ...filme, key: filme.url}))}
      columns={columns}
      pagination={false}
    />
  );
};

export default TabelaFilmes;
