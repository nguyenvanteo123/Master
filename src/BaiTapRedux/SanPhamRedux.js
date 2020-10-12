import React, { Component } from 'react'
import {connect} from 'react-redux';

class SanPhamRedux extends Component {
    render() {
        let {sanPham} = this.props;

        return (
                <div classname="card text-left">
                    <img style={{width:'100%',height:300}} classname="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
                    <div classname="card-body">
                        <h4 classname="card-title">{sanPham.tenSP}</h4>
                        <p classname="card-text">{sanPham.giaBan}</p>
                        <button onClick={()=>{
                          //Gọi hàm được tạo ra từ mapDIspatchToProps
                          this.props.themGioHang(sanPham);  
                        }} className="btn btn-primary">Thêm giỏ hàng</button>
                    </div>
                </div>
        )
    }
}
//Hàm lấy state từ redux biến thành props component
const mapStateToProps = (state) => {
  return{
    
  }
}
//hàm tạo ra 1 hàm xử lý để đưa ra giá trị lên redux
const mapDispatchToProps = (dispatch) => {
  return{
    themGioHang: (sanPhamClick) => {
      //TỪ sản phẩm được click => tạo ra sp giỏ hàng
      let spGH = {...sanPhamClick,soLuong:1};
      //Để gửi giá trị lên reducer cần 1 object có thuộc tính type để phân biet625 state nào thay đổi
      let action = {
        type:'THEM_GIO_HANG', //thuộc tính bắt buộc
        spGH:spGH
      }
      //DÙng hàm dispatch mà reddux cung cấp đưa action lên reducer
      dispatch(action);
      // console.log(sanPhamClick);
    }
  }
}

//tham số 1 hàm connect là 1 hàm (callback): lấy giá trị từ reducer về
//tham số 2 hàm connect là 1 hàm (): đưa các giá trị lên reducer
// export default connect(null)(SanPhamRedux);
export default connect(mapStateToProps,mapDispatchToProps)(SanPhamRedux);