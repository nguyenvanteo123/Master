//state component là component function (react function component)
//cú pháp tạo : rfc => enter
import React from 'react'

export default function DemoStateless() {
    //Bên lệnh ruturn của function component là nội dung giao diện của thẻ nè. lưu ý: Nội dung component phải được bao phủ bởi 1 thẻ bất kỳ
    return (
        <>
            <div className="container">
                <div className="card text-white bg-dark w-25">
                    <img className="card-img-top" src="holder.js/100px180/" alt />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
            </div>
        </>
    )
}
