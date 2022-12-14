import styled from 'styled-components';

export const MainDiv = styled.div`
  margin-top: 10px;
  margin-bottom: max(7vh, 50px);
  align-items: center;
  max-width: 100%;
  height: auto;

  a:link {
    text-decoration: none !important;
  }
`;

export const Content = styled.div`
  margin: 0 5% 0 5%;
  gap: 25px;

  header {
    font-size: max(2vw, 11px);
    margin: 10px 0 20px 0;
    text-align: center;
    color: #fcfcfc;
    padding: 10px 0 10px 0;
    background-color: black;
  }
`;

export const Filters = styled.div`
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  font-size: 100%;
  gap: 2vw;
  margin-bottom: 15px;

  label {
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: max(2vw, 15px);
    align-content: center;

    input {
      width: 2vw;
      height: 2vh;
    }
  }
`;

export const RestCards = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 25px;

  @media screen and (min-width: 540px) {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
  }
`;
