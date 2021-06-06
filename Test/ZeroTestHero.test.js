// import { listPizzas } from "../data.json";
const listMovie = require('../data.json');
test('The list movie data is correct', () => {
  expect(listMovie).toMatchSnapshot();
  expect(listMovie).toHaveLength(85);
  expect(listMovie.slice(0, 4).map((item) => item.tenPhim)).toEqual([
    'Rasing Hope',
    'Bố Già',
    'Avenger',
    'Vợ 3',
  ]);
  expect(listMovie.reduce((sum, item)=>{return item.danhGia + sum}, 0)).toBe(808);
  
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

