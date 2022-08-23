import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/world-admin/admin/login',
        method: 'post',
        data
    })
}

export function register(data) {
    return request({
        url: '/world-admin/admin/register',
        method: 'post',
        data
    })
}

export function getInfo() {
    return request({
        url: '/admin/info',
        method: 'get'
    })
}

export function logout() {
    return request({
        url: '/vue-admin-template/user/logout',
        method: 'post'
    })
}