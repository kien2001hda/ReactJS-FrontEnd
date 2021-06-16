import React from 'react'

const Footer = () => {
    return (
        <>
            <div>
                <div className="h-10" />
                {/* footer */}
                <div className="h-3" />
                <div className="h-3 border-t " />
                <div className="container mx-auto flex grid grid-cols-4 gap-6">
                    <div className>
                        <span className="text-xl font-semibold">Thông tin công ty</span> <br />
                        <span>Thông tin công ty</span><br />
                        <span>Hỗ trợ khách hàng</span><br />
                        <span>Chính sách mua hàng</span>
                    </div>
                    <div className>
                        <span className="text-xl font-semibold">Hỗ trợ khách hàng</span> <br />
                        <span>Liên hệ và góp ý</span><br />
                        <span>Hướng dẫn mua hàng online</span><br />
                        <span>Hưỡng dẫn mua hàng trả góp</span><br />
                        <span>Quy chế quản lý hoạt động </span>
                    </div>
                    <div className>
                        <span className="text-xl font-semibold">Chính sách mua hàng</span> <br />
                        <span>Quy định chính sách</span><br />
                        <span>Chính sách bảo hành - Đổi trả</span><br />
                        <span>Chính sách hội viên</span><br />
                        <span>Giao hàng và lắp đặt</span>
                    </div>
                    <div className>
                        <span className="text-xl font-semibold">Hỗ trợ thanh toán</span> <br />
                        <div className="grid grid-cols-4 gap-2 ">
                            <div className=" h-10 mt-2 border-1 border-black w-full">
                                <img className="w-screen" src="images/pt1.png" alt />
                            </div>
                            <div className=" h-10 mt-2 border-1 border-black w-full">
                                <img className="w-screen" src="images/pt2.png" alt />
                            </div>
                            <div className=" h-10 mt-2 border-1 border-black w-full">
                                <img className="w-screen" src="images/pt3.jpg" alt />
                            </div>
                            <div className=" h-10 mt-2 border-1 border-black w-full">
                                <img className="w-screen" src="images/pt4.jpg" alt />
                            </div>
                            <div className=" h-10 mt-2 border-1 border-black w-full">
                                <img className="w-screen" src="images/pt5.png" alt />
                            </div>
                            <div className=" h-10 mt-2 border-1 border-black w-full">
                                <img className="w-screen" src="images/pt6.jpg" alt />
                            </div>
                            <div className=" h-10 mt-2 border-1 border-black w-full">
                                <img className="w-screen" src="images/pt7.jpg" alt />
                            </div>
                            <div className=" h-10 mt-2 border-1 border-black w-full">
                                <img className="w-screen" src="images/pt8.jpg" alt />
                            </div>
                        </div>
                    </div>
                </div>
                {/* endfooter */}
                <div className="h-3" />
                <div className="bg-black h-10  grid">
                    <div className=" place-self-center">
                        <h1 className="text-white  text-xs">Copyright © 2019 Vinovathemes. All rights reserved.</h1>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
