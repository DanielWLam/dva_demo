import request from '../utils/request';
import { PAGE_SIZE } from '../constants.js';

export function fetch({ page = 1}) {
  return request(`/api/users?_page=${page}&_limit=${PAGE_SIZE}`);
}