import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DemoStateless from "./Components/DemoStateless";
import DemoStateFul from "./Components/DemoStateFul";
import BaiTapLayout1 from "./Components/BaiTapLayoutComponent/BaiTapLayout1";
import Databinding from "./Databinding/Databinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import DemoConditionalAndState from "./DemoLogin/DemoConditionalAndState";
import BaiTapChonMauXe from "./BaiTapChonMauXe";
import DemoListAndKeys from "./ListAndKeys/DemoListAndKeys";
import DemoProps from "./Props/DemoProps";
import BaiTapGioHang from "./Components/BaiTapGioHang";
import BaiTapGioHangReDux from "./BaiTapRedux/BaiTapGioHangReDux";
import BaiTapGameXucXac from "./BaiTapGameXucXac/BaiTapGameXucXac";
import LifeCycle from "./LifeCycle/LifeCycle";
import FormComponent from "./FormComponent/FormComponent";
import DanhSachNguoiDung from "./FormComponent/DanhSachNguoiDung";

function App() {
  return (
    <div className="App">
      {/* <DemoStateless />
      <DemoStateFul/> */}
      {/* <BaiTapLayout1/>   */}
      {/* <Databinding/> */}
      {/* <HandleEvent/> */}
      {/* <DemoConditionalAndState />
      <BaiTapChonMauXe /> */}
      {/* <DemoListAndKeys />
      <DemoProps /> */}
      {/* <BaiTapGioHang /> */}
      {/* <BaiTapGioHangReDux /> */}
      {/* <BaiTapGameXucXac /> */}
      {/* <LifeCycle /> */}
      <DanhSachNguoiDung />
    </div>
  );
}

export default App;
