import React, { Component } from "react";
import GioHangRedux from "./GioHangRedux";
import SanPhamRedux from "./SanPhamRedux";
import danhSachSanPham from "./data.json";

export default class BaiTapGioHangReDux extends Component {
  renderSanPham = () => {
    return danhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPhamRedux sanPham={sanPham} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center"> BÀI TẬP GIỎ HÀNG REDUX</h3>
        <div className="">
          <div className="text-right">Giỏ Hàng (0)</div>
          <GioHangRedux />
        </div>
        <div className="row">{this.renderSanPham()}</div>
        <div className="gioHang"></div>
      </div>
    );
  }
}
