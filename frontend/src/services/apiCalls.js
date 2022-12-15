import axios from 'axios';
import { frontUri, backUri } from '../utils/dynamicUrls';

const globalApiVariables = () => {
  const { id: userId, token } = JSON.parse(localStorage.getItem('user'));

  const config = {
    headers: {
      authorization: token
    }
  };
  return { userId, config };
};

const invalidTokenCaseError = ({ response: { data } }) => {
  if (data.includes('jwt expired')) {
    localStorage.clear();

    return window.location.replace(frontUri);
  }
};

export const apiLogin = async (user) => {
  try {
    const url = `${backUri}users/login`;
    const fetchApi = await axios.post(url, user);
    const response = await fetchApi.data;

    return response;
  } catch (error) {
    return { error };
  }
};

export const apiRegister = async (newUser) => {
  try {
    const url = `${backUri}users/register`;

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
    const url = `${backUri}restaurants/search?search=${search}&favOn=${favOn}`;

    const fetchApi = await axios.get(url, config);
    const response = await fetchApi.data;

    return response;
  } catch (error) {
    invalidTokenCaseError(error);
    return { error };
  }
};

export const apiGetRestaurantById = async (id) => {
  try {
    const { config } = globalApiVariables();
    const url = `${backUri}restaurants/${id}`;

    const fetchAPI = await axios.get(url, config);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    invalidTokenCaseError(error);
    return { error };
  }
};

export const apiFavRes = async (restaurantId) => {
  try {
    const { config } = globalApiVariables();
    const url = `${backUri}favres`;

    const fetchAPI = await axios.post(url, { restaurantId: Number(restaurantId) }, config);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    console.log(error.response.data);
    return invalidTokenCaseError(error);
  }
};

export const apiUnFavRes = async (id) => {
  try {
    const { config } = globalApiVariables();
    const url = `${backUri}favres/${id}`;

    const fetchAPI = await axios.delete(url, config);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    invalidTokenCaseError(error);
    return { error };
  }
};

export const apiUpdateRegister = async (user) => {
  try {
    const { config } = globalApiVariables();
    const url = `${backUri}users/update`;
    const fetchAPI = await axios.patch(url, user, config);
    const response = await fetchAPI.data;

    return response;
  } catch (error) {
    invalidTokenCaseError(error);
    return { error };
  }
};
