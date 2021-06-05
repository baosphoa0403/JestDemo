class Shoes {
  constructor(
    name,
    gender,
    typeProduct,
    description,
    message,
    color,
    price,
    img,
    sizes,
    imgDetails,
    userCreated
  ) {
    this.name = name;
    this.gender = gender;
    this.typeProduct = typeProduct;
    this.description = description;
    this.message = message;
    this.color = color;
    this.price = price;
    this.img = img;
    this.sizes = sizes;
    this.imgDetails = imgDetails;
    this.userCreated = userCreated;
  }
  name = '';
  gender = '';
  typeProduct = '';
  description = '';
  message = '';
  color = 0;
  price = 0;
  img = '';
  sizes = [];
  imgDetails = [];
  userCreated = '';
}

export default Shoes;
