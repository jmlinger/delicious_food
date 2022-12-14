import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { FooterContainer, FooterStyle, SearchBar } from '../styles/components/Footer';
import { RestIcon, SearchIcon } from '../styles/components/Icons';
import { useState } from 'react';
import Profile from './Profile';

function Footer(props) {
  const [searchBarOff, setSearchBarOff] = useState('hidden');
  const { search, setSearch } = props;
  const { pathname } = useLocation();

  return (
    <FooterContainer>
      <SearchBar
        type="text"
        name="search"
        value={search}
        placeholder="Pesquisar:"
        visibility={searchBarOff}
        onChange={({ target: { value } }) => setSearch(value)}
      />
      <FooterStyle>
        <Link to="/restaurants">
          <RestIcon pathname={pathname} />
        </Link>
        <button
          type="button"
          hidden={pathname !== '/restaurants'}
          onClick={() => setSearchBarOff(searchBarOff === 'visible' ? 'hidden' : 'visible')}>
          <SearchIcon searchBarOff={searchBarOff} />
        </button>
        <Profile />
      </FooterStyle>
    </FooterContainer>
  );
}

export default Footer;

Footer.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func
}.isRequired;
