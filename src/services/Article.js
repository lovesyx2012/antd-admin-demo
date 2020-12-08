import request from '../utils/request'

export const getArticleList = (page, perPage) => {
    return request.get(`/v1/materials/lists?page=1&per_page=10`)
}