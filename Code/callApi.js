const  axios = require("axios")

function MovieService() {
    getListMovie: () => {
        return  axios({method: "GET", url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"})
    }
}
const movieService =  new MovieService();
module.exports = movieService;