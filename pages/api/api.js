import axios from 'axios'

const api = axios.create({
    baseURL: 'https://skeleton-nodejs-express-ejs.gabrieldos7.repl.co'
})

export default api