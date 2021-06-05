class ShoesService {
  constructor() {}
  getAllShoes = async () => {
    return await axios({
      method: 'GET',
      url: 'https://nike0403.herokuapp.com/product',
    });
  };

  getDetailShoes = async (id) => {
    return await axios({
      method: 'Get',
      url: `https://nike0403.herokuapp.com/product/${id}`,
    });
  };

  createShoes = async (token, data) => {
    return await axios({
      method: 'Post',
      url: `https://nike0403.herokuapp.com/product/create`,
      data,
      headers: { Authorization: `Bearer ${token}` },
    });
  };
}
const shoesService = new ShoesService();
export default shoesService;
