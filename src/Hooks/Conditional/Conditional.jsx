import React, { useEffect, useState } from 'react';
import axios from 'axios';

const uri = 'https://api.github.com/users';

const Conditional = () => {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(uri);
        const output = response.data;
        setUsers(output);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Is loading</h1>;
  }

  return (
    <>
      {users.map((user) => (
        <h1 key={user.id}>{user.login}</h1>
      ))}
    </>
  );
};

export default Conditional;
