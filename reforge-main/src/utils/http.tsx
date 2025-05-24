import { Store } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { logout } from '../store/slices/adminSlice';
<<<<<<< HEAD
import { API_KEY } from '.';
=======

>>>>>>> c0de594807629717f784c5a55140f76533aefbe1
let store: Store;

export const injectStore = (_store: Store) => {
  store = _store;
};

export const defaultHttp = axios.create();
<<<<<<< HEAD
const http = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
  }
});
=======
const http = axios.create();
>>>>>>> c0de594807629717f784c5a55140f76533aefbe1

http.interceptors.request.use(
  (config) => {
    const state: RootState = store.getState();
    const apiToken = state.admin?.token;

    if (apiToken) {
      config.headers.Authorization = `Bearer ${apiToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);

export default http;
