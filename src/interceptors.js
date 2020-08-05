import axios from 'axios'

// axios.defaults.withCredentials = true
axios.defaults.crossDomain = true
// axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'

axios.interceptors.response.use(response => {
    let data = response.data
    if (data) {
        if (data.status === 'ok') {
            return Promise.resolve(response);
        } else if (data.status === 'error') {
            return Promise.reject(response);
        }
    }
    if (response.status === 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
})
