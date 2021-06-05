// import { listPizzas } from "../data.json";
const listMovie = require('../data.json');
test('The list movie data is correct', () => {
  expect(listMovie).toMatchSnapshot();
  expect(listMovie).toHaveLength(85);
});

for (let i = 0; i < listMovie.length; i++) {
  test(`test movie[${i}] should have properties (biDanh, danhGia, hinhAnh, maNhom, maPhim, ngayKhoiChieu, tenPhim, trailer)`, () => {
    expect(listMovie[i]).toHaveProperty('biDanh');
    expect(listMovie[i]).toHaveProperty('danhGia');
    expect(listMovie[i]).toHaveProperty('hinhAnh');
    expect(listMovie[i]).toHaveProperty('maPhim');
    expect(listMovie[i]).toHaveProperty('ngayKhoiChieu');
    expect(listMovie[i]).toHaveProperty('tenPhim');
    expect(listMovie[i]).toHaveProperty('trailer');
  });
}
