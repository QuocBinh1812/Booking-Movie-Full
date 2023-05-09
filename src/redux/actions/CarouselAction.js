import axios from 'axios';
import { QLPhimService } from '../../services/QuanLyPhimService';
import { DOMAIN } from '../../util/settings/Config';
import { SET_CAROUSEL } from './types/CarouselType';

export const getCarouselAction= ()=>{
    return async (dispatch)=>{
        try{
                //sử dụng tham số 
                const result = await QLPhimService.layDanhSachBanner();
               
                dispatch({
                    type: SET_CAROUSEL,
                    arrImg: result.data.content
                   
                })
    
            }catch(e){
                console.log('e',e);
            }
    };
}