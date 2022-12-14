import styled from 'styled-components';

export const FooterStyle = styled.footer`
  bottom: 0;
  position: fixed;
  display: flex;
  align-items: center;
  background-color: #b1a7a6;
  opacity: 0.85;
  margin: auto;
  justify-content: space-around;
  width: 100%;
  padding: 5px 0 5px 0;
  height: 6%;

  button {
    border: none;
    background-color: transparent;
  }
`;

export const SearchBar = styled.input`
  visibility: ${(props) => props.visibility};
  bottom: max(8vh, 50px);
  font-size: max(3vh, 12px);
  position: fixed;
  max-width: 500px;
  width: 70%;
  height: 5%;
  box-shadow: 0px 0px 20px black;
  border: none;
  border-radius: 5px;
  background-color: #dcdcdc;
  opacity: 0.95;
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
