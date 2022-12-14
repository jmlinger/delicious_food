import styled from 'styled-components';

export const MainDiv = styled.div`
  align-items: center;
  max-width: 100%;
  height: auto;
  margin: 0 5% 10% 5%;

  @media screen and (min-width: 1024px) {
    margin: 0 10% 7% 10%;
  }
`;

export const MenuSection = styled.section`
  margin: 10px 0 10px 0;

  h3 {
    margin: 0px;
    color: #fcfcfc;
    margin-bottom: 5px;
    font-size: max(3vw, 15px);
  }
`;
