import axios from 'axios';

const endpoint = 'https://jsonplaceholder.typicode.com/users';


export async function findUsers() {
  return axios.get(endpoint);
}

export async function findUserById(id) {
  return axios.get(`${endpoint}/${id}`);
}
