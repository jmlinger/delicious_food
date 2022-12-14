import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  Card,
  ContactInfo,
  IconsContainer,
  MainInfo,
  NamesContainer,
  RestInfo
} from '../styles/components/RestaurantCard';
import { FavOffIcon, FavOnIcon, RatingStarIcon, TimeIcon } from '../styles/components/Icons';

function RestaurantCard(props) {
  const { pathname } = useLocation();
  const {
    restaurant: { name, subname, image, rating, phone, address, favUsers },
    favResByClick,
    favOn
  } = props;

  const mainPage = pathname === '/restaurants';

  const favButtom = () => {
    if (mainPage) {
      return <button type="button">{!favUsers ? <FavOffIcon /> : <FavOnIcon />}</button>;
    }
    return (
      <button type="button" onClick={() => favResByClick()}>
        {!favOn ? <FavOffIcon /> : <FavOnIcon />}
      </button>
    );
  };

  return (
    <Card pathname={pathname}>
      <img alt="banner do restaurante" src={image} />
      <RestInfo>
        <MainInfo>
          <IconsContainer>
            <div>
              <RatingStarIcon />
              <p>{rating}</p>
            </div>
            <div>
              <TimeIcon />
              <p>30-40 min</p>
            </div>
          </IconsContainer>
          <NamesContainer pathname={pathname}>
            <h1>{name}</h1>
            <h3>{subname}</h3>
          </NamesContainer>
          <IconsContainer>{favButtom()}</IconsContainer>
        </MainInfo>
        <ContactInfo hidden={mainPage}>
          <p>{phone && phone.replace(/(\d{1})(\d{2})(\d{5})(\d{3})/, '($2) $3-$4')}</p>
          <p>{address}</p>
        </ContactInfo>
      </RestInfo>
    </Card>
  );
}

export default RestaurantCard;

RestaurantCard.propTypes = {
  key: PropTypes.number,
  restaurant: PropTypes.object,
  name: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.number,
  address: PropTypes.string,
  phone: PropTypes.string,
  favUsers: PropTypes.string,
  favResByClick: PropTypes.func,
  favOn: PropTypes.bool
}.isRequired;
