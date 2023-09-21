import { useEffect, useState } from 'react';
import { Table } from 'antd';
import api from '../../services/api';

const TabelaVeiculos = () => {
  const [veiculos, setVeiculo] = useState([]);
  
  useEffect(() => {
    async function carregueVeiculos() {
      const response = await api.get('starships/');
      setVeiculo(response.data.results.slice(0, 5));
    }

    carregueVeiculos();
  }, []);

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Modelo',
      dataIndex: 'model',
      key: 'model',
    },
    {
      title: 'Passageiros',
      dataIndex: 'passengers',
      key: 'passengers',
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
      dataSource={veiculos.map((veiculo) => ({ ...veiculo, key: veiculo.url}))}
      columns={columns}
      pagination={false}
    />
  );
};

export default TabelaVeiculos;
