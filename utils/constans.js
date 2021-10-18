
export const ORIGIN = process.env.ORIGIN

export const SERVICE = {
    ACCOUNT: process.env.SERVICE_ACCOUNT,
    CONTENT: process.env.SERVICE_CONTENT,
    PRODUCT: process.env.SERVICE_PRODUCT,
    PAYMENT: process.env.SERVICE_PAYMENT,
    GAMIFICATION: process.env.SERVICE_GAMIFICATION,
    SEARCH: process.env.SERVICE_SEARCH,
    MEDIA: process.env.SERVICE_MEDIA
}

export const GRANT_TYPE = {
    TOKEN: 'token',
    PASSWORD: 'password'
}

export const LOCAL_STORAGE = {
    ACCESS_TOKEN: 'accessToken',
    REFRESH_TOKEN: 'refreshToken'
}

export const PARAMS = {
    REDIRECT: 'r'
}