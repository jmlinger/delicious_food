import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { apiFavRes, apiGetRestaurantById, apiUnFavRes } from '../services/apiCalls';
import Carousel from '../components/Carousel';
import RestaurantCard from '../components/RestaurantCard';
import { MainDiv, MenuSection } from '../styles/pages/RestaurantDetails';

function RestaurantDatails() {
  const { id: restaurantId } = useParams();

  const [restaurant, setRestaurant] = useState({});
  const [favOn, setFavOn] = useState(false);

  useEffect(() => {
    const get = async () => {
      const response = await apiGetRestaurantById(restaurantId);
      if (!response.error) {
        const { restaurant } = response;
        setRestaurant(restaurant);
        restaurant.favUsers && setFavOn(true);
      }
    };
    get();
  }, []);

  const { menu } = restaurant;

  const favResByClick = async () => {
    setFavOn(!favOn);
    // eslint-disable-next-line no-unused-expressions
    favOn ? await apiUnFavRes(restaurantId) : await apiFavRes(Number(restaurantId));
  };

  const meals = menu && menu.filter(({ category }) => category === 'refeição');
  const drinks = menu && menu.filter(({ category }) => category === 'bebida');

  return (
    <div>
      <MainDiv>
        <RestaurantCard restaurant={restaurant} favResByClick={favResByClick} favOn={favOn} />
        <MenuSection>
          <h3>Refeições</h3>
          {Object.keys(restaurant).length > 0 && <Carousel menu={meals} />}
        </MenuSection>
        <MenuSection>
          <h3>Bebidas</h3>
          {Object.keys(restaurant).length > 0 && <Carousel menu={drinks} />}
        </MenuSection>
      </MainDiv>
      <Footer />
    </div>
  );
}

export default RestaurantDatails;
