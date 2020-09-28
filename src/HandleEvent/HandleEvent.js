import React, { Component } from 'react'

export default class HandleEvent extends Component {
   showTitle = ()=>{
    alert('Hello Tèo')
}
    showMess = (mess) => {
        alert(`hello ${mess}`);
    }
   
    render() {
        return (
            <div>
                {/* Xử lý sự kiện truyền callback */}
               <button onClick={this.showTitle}>hello</button>
               {/* Xử lý sự kiện sử dụng hàm trung gian */}
               <button onClick={()=>{
                   this.showTitle();
               }}>
                   show title
               </button>
               <button onClick={this.showMess.bind(this,'lala')}>
                   Show Mess
               </button>
               <button className="bg-primary text-white container" onClick={()=>{
                   this.showMess('đuỵt mọe')
               }}>Show mess </button>
            </div>
        )
    }
}
