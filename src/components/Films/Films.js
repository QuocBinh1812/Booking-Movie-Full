import React from 'react'

export default function Films(props) {
    const {phim}=props;
    return (
        <div className="p-4 lg:w-full">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <div style={{background:`url(${phim.hinhAnh}) , url(https://picsum.photos/1000/500)`, backgroundPosition:'center', backgroundSize:'100%,100%'}}>
                <img className="opacity-0 w-full " style={{height:'300px'}} src={phim.hinhAnh} alt='...' />
                </div>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{phim.tenPhim.length > 22 ? <span>{phim.tenPhim.slice(0, 22)} ...</span> : <span>{phim.tenPhim} </span>} </h1>
                <p className="leading-relaxed mb-3 h-16">{phim.moTa.length > 100 ? <span>{phim.moTa.slice(0,100)}... </span>: <span>{phim.moTa} </span>} </p>
                <a className="text-red-500 inline-flex items-center">Đặt vé
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                    </svg>
                </a>
                
            </div>
        </div>
    )
}
