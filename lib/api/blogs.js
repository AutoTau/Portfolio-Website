import axios from 'axios';
import BaseApi from './BaseApi';

class BlogApi extends BaseApi {

  constructor(accessToken) {
    super(accessToken, '/blogs');
  }
  
  create(data) {
    return axios.post(this.apiUrl, data, this.config);
  }

}

export default BlogApi;