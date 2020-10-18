import axios from 'axios';

const orphanageApi = axios.create({
  baseURL: 'http://192.168.?.???:3333',
});

export default orphanageApi;
