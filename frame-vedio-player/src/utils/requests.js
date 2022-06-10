import axios from 'axios'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

import {baseURL} from '../defines'

export const fetchImageBase64 = async(frame) => {
    let url = baseURL + "/images/" + frame
    let response = await axios.get(url)
    return response.data
}

export const fetchPointCloud = async(frame) => {
    let url = baseURL + "/pointcloud/" + frame
    let response = await axios.get(url)
    const data = response.data
    let buffer = Object.keys(data).map((key) => data[key])
    return buffer
}