import React, { useEffect } from 'react'
import HomeMenu from './HomeMenu/HomeMenu'
//ket noi redux
import { useSelector,useDispatch } from 'react-redux'
import MultipleRowSlick from '../../components/ReactSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction';
import {  layDanhSachHeThongRapAction } from '../../redux/actions/QuanLyRapAction';
import axios from 'axios';
import { SET_HE_THONG_RAP_CHIEU } from '../../redux/actions/types/QuanLyRapTypes';
import HomeCarousel from '../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel';
import HomeMenu_Mobile from './HomeMenu/HomeMenu_Mobile';
import HomeMovie from './HomeMovie/HomeMovie';
import HomeMenuSelect from './HomeMenuSelect/HomeMenuSelect';


export default function HomeMobile(props) {
    const {heThongRapChieu} = useSelector(state => state.QuanLyRapReducer);
    const {arrFilm}= useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();
    // console.log('propsHome',props);

    useEffect(() => {
        const action = layDanhSachPhimAction();
        dispatch(action);
        


        dispatch(layDanhSachHeThongRapAction());
    }, [])
    
    return (
        
        <div className="bg-dark" style={{marginTop:'-22px'}}>
              <HomeCarousel />
              {/* <HomeMenuSelect heThongRapChieu={heThongRapChieu}/> */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">

                    <MultipleRowSlick arrFilm={arrFilm} />
                    
                </div>
            </section>

            <div className="mx-10">
            {/* <HomeMenu heThongRapChieu={heThongRapChieu}/> */}
            <HomeMenu_Mobile heThongRapChieu={heThongRapChieu}/>
            </div>
            <div  className="mx-10 mt-4">
                <HomeMovie />
            </div>
        </div>
    )
}
