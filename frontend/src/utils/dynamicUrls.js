const { REACT_APP_NODE_ENV, REACT_APP_BACK_URI, REACT_APP_FRONT_URI } = process.env;

const backUri = REACT_APP_NODE_ENV === 'production' ? REACT_APP_BACK_URI : 'http://localhost:3001/';

const frontUri =
  REACT_APP_NODE_ENV === 'production' ? REACT_APP_FRONT_URI : 'http://localhost:3000/';

export { frontUri, backUri };
