import axios from 'axios';
import { serverApiUrl, serverReactAppUrl } from '../utils/dynamicUrls';

const globalApiVariables = () => {
  const { id: userId, token } = JSON.parse(localStorage.getItem('user'));

  const config = {
    headers: {
      authorization: token
    }
  };
  return { userId, config };
};

const expireTokenCaseError = ({ response: { data } }) => {
  if (data.includes('jwt expired')) {
    localStorage.clear();

    return window.location.replace(serverReactAppUrl);
  }
};

export const apiLogin = async (user) => {
  try {
    const url = `${serverApiUrl}users/login`;
    const fetchApi = await axios.post(url, user);
    const response = await fetchApi.data;

    return response;
  } catch (error) {
    return { error };
  }
};

export const apiRegister = async (newUser) => {
  try {
    const url = `${serverApiUrl}users/register`;

    const fetchApi = await axios.post(url, newUser);
    const response = await fetchApi.data;

    return response;
  } catch (error) {
    return { error };
  }
};

export const apiGetRestaurantsList = async (search, favOn) => {
  try {
    const { config } = globalApiVariables();
    const url = `${serverApiUrl}restaurants/search?search=${search}&favOn=${favOn}`;

    const fetchApi = await axios.get(url, config);
    const response = await fetchApi.data;

    return response;
  } catch (error) {
    console.log(error);
    return expireTokenCaseError(error);
  }
};

export const apiGetRestaurantById = async (id) => {
  try {
    const { config } = globalApiVariables();
    const url = `${serverApiUrl}restaurants/${id}`;

    const fetchAPI = await axios.get(url, config);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    console.log(error);
    return expireTokenCaseError(error);
  }
};

export const apiFavRes = async (restaurantId) => {
  try {
    const { config } = globalApiVariables();
    const url = `${serverApiUrl}favres`;

    const fetchAPI = await axios.post(url, { restaurantId: Number(restaurantId) }, config);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    console.log(error.response.data);
    return expireTokenCaseError(error);
  }
};

export const apiUnFavRes = async (id) => {
  try {
    const { config } = globalApiVariables();
    const url = `${serverApiUrl}favres/${id}`;

    const fetchAPI = await axios.delete(url, config);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    console.log(error);
    return expireTokenCaseError(error);
  }
};

export const apiUpdateRegister = async (user) => {
  try {
    const { config } = globalApiVariables();
    const url = `${serverApiUrl}users/update`;
    const fetchAPI = await axios.patch(url, user, config);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    console.log(error);
    return expireTokenCaseError(error);
  }
};
