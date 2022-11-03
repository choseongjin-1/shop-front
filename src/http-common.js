import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001",
    header:{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset = utf-8'
            }
})

axiosInstance.interceptors.request.use(
    config => {
        //store.commit('Loading/startSpinner');
        return config;
    },
    error => {
        //store.commit('Loading/endSpinner');
        alert('데이터 요청 실패');
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    response => {
        console.log('response',response)
        //store.commit('Loading/endSpinner');
        return response;
    },
    error => {
        console.log('error',error)
        //store.commit('Loading/endSpinner');
        return Promise.reject(error);
    }
)

export default axiosInstance