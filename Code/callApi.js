const axios = require('axios');

class MovieService {
  getListMovie = async () => {
    return await axios({
      method: 'GET',
      url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP012',
    });
  };
}
const movieService = new MovieService();
module.exports = movieService;
