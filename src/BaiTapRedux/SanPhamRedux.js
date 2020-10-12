import React, { Component } from "react";
import SanPham from "../Components/BaiTapGioHang/SanPham";

export default class SanPhamRedux extends Component {
  render() {
    return (
      <div className="card text-left">
        <img
          style={{ width: "100%" }}
          className="card-img-top"
          src={SanPham.hinhAnh}
          alt={SanPham.hinhAnh}
        />
        <div className="card-body">
          <h4 className="card-title">{SanPham.tenSP}</h4>
          <p className="card-text">{SanPham.giaBan}</p>
          <button className="btn btn-danger">Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}
