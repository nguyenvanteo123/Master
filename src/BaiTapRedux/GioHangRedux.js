import React, { Component } from "react";
import SanPhamGHReDux from "./SanPhamGHReDux";

//Import thư viện ket61 nối react component và redux store
import { connect } from "react-redux";

class GioHangRedux extends Component {
  renderGioHang = () => {
    return <SanPhamGHReDux />;
  };
  render() {
    console.log("props", this.props);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã sp</th>
            <th>Tên sp</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>{this.renderGioHang()}</tbody>
      </table>
    );
  }
}

//lấy state từ redux store biến thành props của componeny
//tham số state : đại diện cho rootReducer

const mapStateToProps = (state) => {
  return {
    gioHang: state.StateBaiTapGioHang.gioHang,
  };
};
export default connect()(GioHangRedux); //Ket61 nối giữa gioHangReduxComponent và redux store
