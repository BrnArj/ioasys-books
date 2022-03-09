/* eslint-disable */
import React from 'react';
import axios from 'axios';

export const MyAPI = axios.create({
  baseURL: 'https://books.ioasys.com.br/api/v1',
  timeout: 30000,
});
