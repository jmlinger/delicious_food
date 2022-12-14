import styled from 'styled-components';

const general = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  height: auto;
`;

export const Card = styled(general)`
  height: auto;
  width: 90vw;

  ${(props) =>
    props.pathname === '/restaurants' &&
    `:hover {
    transform: scale(1.025);
    transition-duration: 500ms;
    box-shadow: 5px 5px 10px #fcfcfc;
  }`}

  img {
    width: 100%;
    height: 19vh;

    @media screen and (min-width: 800px) {
      width: 100%;
      height: 30vh;
    }

    @media screen and (min-width: 1024px) {
      width: 100%;
      height: 40vh;
    }
  }

  @media screen and (min-width: 540px) {
    width: ${(props) => (props.pathname === '/restaurants' ? '40vw' : '100%')};
  }
`;

export const RestInfo = styled(general)`
  border: 2px solid black;
  background-color: #fcfcfc;
`;

export const MainInfo = styled(general)`
  flex-direction: row;
`;

export const ContactInfo = styled.div`
  margin-top: 5px;
  font-size: max(1.5vw, 7px);
  text-align: center;
  padding-bottom: 5px;

  p {
    margin: 0;
  }
`;

export const IconsContainer = styled(general)`
  flex-wrap: nowrap;
  width: 20%;
  font-size: 47%;
  text-align: center;
  color: black;
  font-size: max(1.2vw, 7.92px);

  div {
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }

  button {
    border: none;
    background-color: transparent;
  }
`;

export const NamesContainer = styled.div`
  width: 60%;
  text-align: center;
  text-shadow: 5px 5px 5px #b1a7a6;
  color: black;
  font-size: max(3vw, 8.5px);

  h1 {
    margin: 0;
  }

  h3 {
    color: #666666;
    margin: 0;
  }

  @media screen and (min-width: 540px) {
    font-size: ${(props) => props.pathname === '/restaurants' && 'max(1.5vw, 8.5px)'};
  }
`;
