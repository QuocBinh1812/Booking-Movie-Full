import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import './Loading.scss'

export default function TrangLoading(props) {
    const { isLoading } = useSelector(state => state.LoadingReducer);
    return (
        <Fragment>
            {isLoading ?
            <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'Tomato', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 99 }}>
                <div className="text-4xl text-white">
                    
                    <div className="loader">Loading...</div>
                </div>
            </div>
            :''
}
        </Fragment>
    )
}
