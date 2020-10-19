import React, { Component } from "react";
import swal from "sweetalert2";

export default class FormComponent extends Component {
  state = {
    values: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
  };
  handleChangeInput = (event) => {
    //Lấy ra name và values
    let { name, value } = event.target;
    // let value = event.target.value;

    //Lấy ra attrubute types (các thuộc tính trent6 thẻ từ thêm gọi là attribute)
    let types = event.target.getAttribute("types");

    //Xử lý value
    let newValues = { ...this.state.values }; //Tạo ra values mới gái trị = value cũ
    newValues[name] = value; //thay đổi gái trị bẹn trong values

    //Xử lý error
    let newErrors = { ...this.state.errors };

    newErrors[name] = value.trim() === "" ? "Không dược bỏ trống" : "";

    if (types === "phoneNumber") {
      const regexNumber = /^[0-9]+$/;
      if (!regexNumber.test(value.trim())) {
        newErrors[name] = "Dữ liệu phải là số!";
      }
    }
    if (types === "email") {
      const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //
      if (!regexEmail.test(value.trim())) {
        newErrors[name] = "Email không hợp lệ!";
      }
    }

    this.setState(
      {
        values: newValues, //Gán values = value mới
        errors: newErrors,
      },
      () => {
        console.log(this.state);
      }
    );

    // this.setState(
    //   {
    //     ...this.state,
    //     values: {
    //       [name]: value,
    //     },
    //   },
    //   () => {
    //     console.log(this.state);
    //   }
    // );
  };
  render() {
    return (
      <form
        class="card"
        onSubmit={(event) => {
          //Cản sự kiện submit lại trang của browser
          event.preventDefault();
          console.log("run");
          let valid = true;

          //Duyệt thuộc tính trong object values(duyệt thuộc tính trong đối tượng thì dùng ES6 for in)
          for (let tenThuocTinh in this.state.values) {
            if (this.state.values[tenThuocTinh].trim() === "") {
              valid = false;
            }
          }
          //duyệt lổi =>tát cả loi64 phai3 = rong64
          for (let tenThuocTinh in this.state.errors) {
            if (this.state.errors[tenThuocTinh].trim() !== "") {
              valid = false;
            }
          }
          if (!valid) {
            console.log(1);
            // alert("dữ liệu không hợp lệ !");
            swal.fire("Thông Báo", "Dữ liệu không hợp lệ !", "error");
            return; //Chặn sự kiện submit
          }
          swal.fire("Thông báo", "Thêm người dùng thành công !", "success");
          console.log("submit");
        }}
      >
        <div className="card-header bg-dark text-light font-weight-bold">
          <span> THÔNG TIN NGƯỜI DÙNG</span>
        </div>

        <div class="card-body">
          <div className="row">
            <div className="col-6">
              <div className="font-group">
                <span>Mã Người dùng</span>
                <input
                  value={this.state.values.maNguoiDung}
                  className="form-control"
                  name="maNguoiDung"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.maNguoiDung}</p>
              </div>
              <div className="font-group">
                <span>Tên Người dùng</span>
                <input
                  value={this.state.values.tenNguoiDung}
                  className="form-control"
                  name="tenNguoiDung"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.tenNguoiDung}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="font-group">
                <span>Số điện thoại</span>
                <input
                  types="phoneNumber"
                  value={this.state.values.soDienThoai}
                  className="form-control"
                  name="soDienThoai"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.soDienThoai}</p>
              </div>
              <div className="font-group">
                <span>Email</span>
                <input
                  types="email"
                  value={this.state.values.email}
                  className="form-control"
                  name="email"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.email}</p>
              </div>
            </div>
            <div className="col-12 text-right">
              <div className="font-group">
                <button className="btn btn-success">Thêm người dùng</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
