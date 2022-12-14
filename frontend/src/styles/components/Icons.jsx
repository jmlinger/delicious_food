import styled from 'styled-components';
import { BiRestaurant } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { AiFillStar, AiOutlineFieldTime } from 'react-icons/ai';

const footerIconsEffect = `
  background-color: #fcfcfc;
  transform: scale(1.05);
  transition-duration: 500ms;
  box-shadow: 0px 0px 10px black;`;

const footerIconsConfig = `
  color: black;
  width: max(100%, 20px);
  height: max(100%, 20px);
  border-radius: 100%;
  padding: 5px;
  :hover {
    ${footerIconsEffect}
  }
`;

const favIconsConfig = `
  color: red;
  width: max(5vw, 25px);
  height: max(5vh, 25px);
  :hover {
    transform: scale(1.2);
    transition-duration: 500ms;
  }
`;

export const RestIcon = styled(BiRestaurant)`
  ${footerIconsConfig};
  ${(props) => props.pathname === '/restaurants' && footerIconsEffect};
`;

export const SearchIcon = styled(BsSearch)`
  ${footerIconsConfig};
  ${(props) => props.searchBarOff === 'visible' && footerIconsEffect};
`;

export const ProfileIcon = styled(CgProfile)`
  ${footerIconsConfig};
  ${(props) => props.modalIsOpen && footerIconsEffect};
`;

export const FavOffIcon = styled(MdFavoriteBorder)`
  ${favIconsConfig}
`;

export const FavOnIcon = styled(MdFavorite)`
  ${favIconsConfig}
`;

export const RatingStarIcon = styled(AiFillStar)`
  color: gold;
  width: max(3vw, 15px);
  height: max(3vh, 15px);
`;

export const TimeIcon = styled(AiOutlineFieldTime)`
  color: black;
  width: max(3vw, 15px);
  height: max(3vh, 15px);
`;
