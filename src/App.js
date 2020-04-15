import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import Cinema from './components/Cinema';
import { getCities } from './services/getCities';
import './App.css';

export default function App() {
  const [cities, setCities] = useState([]);
  const [cinemas, setCinemas] = useState({ cityName: '', cinema: [] });

  useEffect(() => {
    async function fetchData() {
      setCities(await getCities());
    }
    fetchData();
  }, []);

  const alphabeticalCities = cities
    .map(city => ({ name: `${city.name} - ${city.uf}`, id: city.id }))
    .sort((a, b) => a.name > b.name ? 1 : -1);

  return (
    <>
      <h3 className="logo">CINEMA</h3>
      <section className="search-cities">
        <h1 className="title"> Encontre o cinema pertinho da sua casa!</h1>
        <Search
          cities={alphabeticalCities}
          setCinemas={setCinemas}
        />
      </section>
      <Cinema cinemas={cinemas} />
    </>
  );
}
