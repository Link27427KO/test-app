import axios from "axios";
import {SERVICE_NAME} from "../helpers/common";

class UserService {

    public getUsers() {
        return axios.get(SERVICE_NAME + '/users')
            .then((res) => {
                return res.data
            })
            .catch((e) => {
                console.log(e)
            })
    }
    public getUser(id: number) {
        return axios.get(SERVICE_NAME + `/users/${id}`)
            .then((res) => {
                return res.data
            })
            .catch((e) => {
                console.log(e)
            })
    }
    public getPosts(userId: number) {
        return axios.get(SERVICE_NAME + `/posts?userId=${userId}`)
            .then((res) => {
                return res.data
            })
            .catch((e) => {
                console.log(e)
            })
    }
    public getAlbums(userId: number) {
        return axios.get(SERVICE_NAME + `/albums?userId=${userId}`)
            .then((res) => {
                return res.data
            })
            .catch((e) => {
                console.log(e)
            })
    }
}

export default new UserService()