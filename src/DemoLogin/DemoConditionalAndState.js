import React, { Component } from 'react'

export default class DemoConditionalAndState extends Component {
    // isLogin là thuộc tính của class
    // true: là đã login => hiện tên người dùng
    // false: chưa login => hiện nút login

    // state
    state = {
        isLogin: false,
    };

    // isLogin = false; => cách này sai vì render không chạy lại

    // phương thức của class
    handleLogin = () =>{
        console.log("run");
        // this.isLogin = true;
        // this.state.isLogin = true; // cách này sai vì render không chạy lại
        this.setState({
            isLogin : true,
        })
    }
    renderLogin = () =>{
        
        if(this.state.isLogin){
            // hiện tên người dùng
            return <p>Nguyễn Văn Tèo</p>            
        }else{
            // hiện nút login
            return <button className="btn btn-primary" onClick={this.handleLogin}>Login</button>
        }
    };
    
    // render là phương thức cập nhật lại giao diện
    render() {
        console.log("run render");
        return (
            <div>
                <h2>DemoConditional And State</h2>
                {
                    this.renderLogin()
                }
            </div>
        );
    }
}
