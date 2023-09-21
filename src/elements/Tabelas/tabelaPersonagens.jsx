import { useEffect, useState } from 'react';
import { Table } from 'antd';
import api from '../../services/api';

const TabelaPersonagens = () => {
  const [people, setPeople] = useState([]);
  
  useEffect(() => {
    async function loadPeople() {
      const response = await api.get('people/');
      setPeople(response.data.results.slice(0, 5));
    }

    loadPeople();
  }, []);

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Altura',
      dataIndex: 'height',
      key: 'height',
    },
    {
      title: 'Aniversário',
      dataIndex: 'birth_year',
      key: 'birth_year',
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
      dataSource={people.map((person) => ({ ...person, key: person.url}))}
      columns={columns}
      pagination={false}
    />
  );
};

export default TabelaPersonagens;
