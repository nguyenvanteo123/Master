import React, { Component } from "react";
import { connect } from "react-redux";
class KetQuaTroChoi extends Component {
  renderKetQua = () => {
    //sử dụng thuộc tính this.props.mangxucxac để hiển thị két quả

    let tongDiem = this.props.mangXucXac.reduce((tongDiemXX, xucXac, index) => {
      return (tongDiemXX += xucXac.so);
    }, 0);
    let ketQua = tongDiem > 9 ? "Tài" : "Xỉu";
    return (
      <div>
        <span className="display-4 text-dark">
          {tongDiem}-{ketQua}
        </span>
      </div>
    );
  };
  render() {
    return (
      <div className="text-center">
        <div className="display-4">Kết quả : {this.renderKetQua()}</div>
        <div className="display-4">
          Bạn chọn : <span className="text-danger">{this.props.banChon}</span>
        </div>
        <div className="display-4">
          Số bàn thắng :{" "}
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          Tổng số bàn chơi :{" "}
          <span className="text-primary">{this.props.tongSoBanChoi}</span>
        </div>
        <div className="text-center">
          <button
            className="btn btn-success p-2 mt-2"
            onClick={() => {
              this.props.playGame();
            }}
          >
            <span style={{ fontSize: 20 }}>MỜI BẠN SÓC</span>
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let n = 0;
      //setInterval là hàm thực hiện liên tục theo thời gian quy định => thực thi cho đến khi ta gọi clearInterval
      let randomXucXac = setInterval(() => {
        const action = {
          type: "RANDOM_XUC_XAC",
        };
        dispatch(action);
        n++;
        if (n === 10) {
          //Dừng hàm
          clearInterval(randomXucXac);

          //dispatch actuin xử lý kết quả
          const actionXLQK = {
            type: "END_GAME",
          };
          dispatch(actionXLQK);
        }
      }, 100);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    banChon: state.stateBaiTapGameXucXac.banChon,
    soBanThang: state.stateBaiTapGameXucXac.soBanThang,
    tongSoBanChoi: state.stateBaiTapGameXucXac.tongSoBanChoi,
    mangXucXac: state.stateBaiTapGameXucXac.mangXucXac,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi);
