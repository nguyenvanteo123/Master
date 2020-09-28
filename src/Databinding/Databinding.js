import React, { Component } from 'react'

export default class Databinding extends Component {
    hocVien = {
        //Thuộc tính của lớp đối tượng => sử dụng được ở nhiều phương thức trong lớp đối tượng
        ma: 1,
        avatar: 'https://picsum.photos/200/200',
        tenHocVien: ' Nguyễn Văn Tèo'
    }
    //Phương thức => phương thức có thể gọi trong các phương thức khác cuar3 lớp đối tượng
    renderHocVien = () => {
        return <div className="card border-dark">
            <img className="card-img-top" src={this.hocVien.avatar} alt />
            <div className="card-body">
                <h4 className="card-title">{this.hocVien.tenHocVien}</h4>
                <p className="card-text">{this.hocVien.ma}</p>
            </div>
        </div>

    }
    render() {

        //binding data là biến
        let title = 'CYBERSOFT';
        let imgSrc = 'https://picsum.photos/200/200';
        //binding data là hàm
        const renderImg = () => {
            //Giá trị hàm muốn render ra giao diện phải trả về chuỗi, số, hoặc jsx
            return <div className="card text-white bg-dark">
                <img className="card-img-top" src={imgSrc} alt />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>

        }
        return (
            <div>
                <div id="title">
                    {title}
                </div>
                <div className="w-25">
                    <img src={imgSrc} />
                </div>
                <input className="w-25 form-control" value={title} />
                <div className="w-25">
                    {renderImg()}
                </div>
                <ul>
                    <li>Mã học viên: {this.hocVien.ma}</li>
                    <li>Tên học viên: {this.hocVien.tenHocVien}</li>
                    <li>Hình ảnh: <img src={this.hocVien.avatar} width="200" height="200" /></li>
                </ul>
                <div className="w-25">
                    {this.renderHocVien()}
                </div>
                
            </div>
        )
    }
}
