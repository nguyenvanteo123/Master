//Giá trị ban đầu của state
const stateDefaut = {
  gioHang: [
     
  ],
};

//hàm reducer trả về state của ứng dụng
const BaiTapGioHangReducer = (state = stateDefaut, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      //xử lý cập nhật lại state
      let gioHangUpDate = [...state.gioHang];
      //TÌm sp có trong giỏ hàng hay không
      const index = gioHangUpDate.findIndex(
        (spGH) => spGH.maSP === action.spGH.maSP
      );
      if (index !== -1) {
        gioHangUpDate[index].soLuong += 1;
      } else {
        gioHangUpDate.push(action.spGH);
      }
      //Gán lại state cũ = giá trị mới
      state.gioHang = gioHangUpDate;
      return { ...state };
    }
    case'XOA_GIO_HANG':{
      let gioHangUpDate = [...state.gioHang];
      //Xử lý xáo giỏ hàng dựa vào action ={
        // type : 'XOA_GIO_HANG',
        // maSPClick
      // }được gửi lên từ mapDispatch
      const index = gioHangUpDate.findIndex(spGH => spGH.maSP === action.maSPClick);

      if(index !== -1 ){
        gioHangUpDate.splice(index,1);
      }
      //cập nhật laij5 state.gioHang
      state.gioHang = gioHangUpDate;
      return{...state};
    }
    case 'TANG_GIAM_SOLUONG':{
      let gioHangUpDate = [...state.gioHang];
      //Tìm ra sp có mã ứng với sp trong giỏ hàng tiến =hành tang7 giảm
      let spGioHang = gioHangUpDate.find(sp=>sp.maSP===action.maSP);


      debugger
      if(spGioHang){
        //spGIoHang !== undefine
        //nếu mã sp có trng sp giỏ hàng thì thực hiện tang7 giảm
        if(action.tangGiam){
          spGioHang.soLuong += 1
        }else{
          if(spGioHang.soLuong > 1){
            spGioHang.soLuong -= 1;
          }
        }
      }
      state.gioHang = gioHangUpDate;
      return{...state};
    }
  }

  return { ...state };
};
export default BaiTapGioHangReducer;
