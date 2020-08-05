import router from '@/router'
import qs from 'qs'
import el from "element-ui/src/locale/lang/el";

router.beforeEach((to, from, next) => {
    // const url = window.location.href
    // const access_token = localStorage.getItem('access_token')
    //
    // let query = qs.parse(url.split('?')[1])
    // if (query.access_token) {
    //     localStorage.setItem('access_token', query.access_token)
    // }
    // console.log(localStorage.getItem('oauth'))
    next()
})
