import axios from "axios";

const baseUrl = "http://www.mocky.io/v2/5b15c4923100004a006f3c07"

const apiData = axios.create({
    baseURL: baseUrl
})

export default apiData;