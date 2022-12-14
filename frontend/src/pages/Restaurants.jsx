import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import RestaurantCard from '../components/RestaurantCard';
import { apiGetRestaurantsList } from '../services/apiCalls';
import { Content, Filters, MainDiv, RestCards } from '../styles/pages/Restaurant';

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedOption, setSelectedOption] = useState('all');
  const [search, setSearch] = useState('');
  const [favOn, setFavOn] = useState(false);
  const { name: userName } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const get = async () => {
      const response = await apiGetRestaurantsList(search, favOn);
      if (!response.error) {
        setRestaurants(response.restaurants);
      }
    };
    get();
  }, [search, favOn]);

  useEffect(() => {
    if (selectedOption === 'fav') {
      setFavOn(true);
    } else {
      setFavOn(false);
    }
  }, [selectedOption]);

  const changeRestFilter = ({ target: { value } }) => {
    setSelectedOption(value);
  };

  return (
    <MainDiv>
      <Content>
        <header>
          Olá, {userName}, temos uma lista de restaurantes próximos da sua localização.
        </header>
        <Filters>
          <label htmlFor="all">
            <input
              id="all"
              type="checkbox"
              value="all"
              checked={selectedOption === 'all'}
              onChange={changeRestFilter}
            />
            Exibir todos
          </label>
          <label htmlFor="fav">
            <input
              id="fav"
              type="checkbox"
              value="fav"
              checked={selectedOption === 'fav'}
              onChange={changeRestFilter}
            />
            Exibir favoritos
          </label>
        </Filters>
        <RestCards>
          {restaurants.map((restaurant, index) => (
            <Link key={index} to={`/restaurants/${restaurant.id}`}>
              <RestaurantCard restaurant={restaurant} />
            </Link>
          ))}
        </RestCards>
      </Content>
      <Footer search={search} setSearch={setSearch} />
    </MainDiv>
  );
}

export default Restaurants;
