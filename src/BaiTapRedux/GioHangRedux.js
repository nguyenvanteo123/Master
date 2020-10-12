import React, { Component } from "react";
import SanPhamGHReDux from "./SanPhamGHReDux";

//Import thư viện ket61 nối react component và redux store
import { connect } from "react-redux";

class GioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGioHang, index) => {
      return (
        <tr>
          <td>{spGioHang.maSP}</td>
          <td>{spGioHang.tenSP}</td>
          <td>
            <img src={spGioHang.hinhAnh} width={50} />
          </td>
          <td>
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(spGioHang.maSP, false);
              }}
            >
              -
            </button>
            {spGioHang.soLuong}
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(spGioHang.maSP, true);
              }}
            >
              +
            </button>
          </td>
          <td>{spGioHang.giaBan}</td>
          <td>{spGioHang.soLuong * spGioHang.giaBan}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaGioHang(spGioHang.maSP);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
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

const mapStateToProps = (rootReducer) => {
  return {
    gioHang: rootReducer.StateBaiTapGioHang.gioHang,
  };
};
//
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSPClick) => {
      console.log(maSPClick);
      //Tao5 ra action gửi lên reducer
      const action = {
        type: "XOA_GIO_HANG",
        maSPClick,
      };
      dispatch(action);
    },
    tangGiamSoLuong: (maSP, tangGiam) => {
      const action = {
        type: "TANG_GIAM_SOLUONG",
        maSP,
        tangGiam,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux); //Ket61 nối giữa gioHangReduxComponent và redux store
