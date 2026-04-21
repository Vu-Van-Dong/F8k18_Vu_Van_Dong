import axios from 'axios';


const api = axios.create({
    baseURL:'https://k305jhbh09.execute-api.ap-southeast-1.amazonaws.com/doc#tag/customer-controller'
})


export default api