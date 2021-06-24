import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
// ����axiosʵ��
const service = axios.create({
    baseURL: 'http://localhost:8008',
    timeout: 15000 // ����ʱʱ��
})
// http request ������
service.interceptors.request.use(
    config => {
    // token �Ȳ���������ʹ��ʱ������
    return config
},
  err => {
    return Promise.reject(err)
})
// http response ������
service.interceptors.response.use(
    response => {
        if (response.data.code !== 200) {
            Message({
                message: response.data.message,
                type: 'error',
                duration: 5 * 1000
            })
            return Promise.reject(response.data)
        } else {
            return response.data
        }
    },
    error => {
        return Promise.reject(error.response)
})
export default service
