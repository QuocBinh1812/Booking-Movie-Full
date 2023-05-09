import axios from "axios"
import { DOMAIN, TOKEN } from "../util/settings/Config"

export class baseService {
    get = (url) => {
        return axios({
            url:`${DOMAIN}/${url}`,
            method:'GET',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
            }
        })
    }
    post = (url,data) => {
        return axios({
            url:`${DOMAIN}/${url}`,
            data:data,
            method:'POST',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
            }
        })
    }
    put = (url,data) => {
        return axios({
            url:`${DOMAIN}/${url}`,
            data:data,
            method:'PUT',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
            }
        })
    }
    delete = (url) => {
        return axios({
            url:`${DOMAIN}/${url}`,
            method:'DELETE',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
            }
        })
    }


}