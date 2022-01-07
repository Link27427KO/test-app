import {createSlice} from "@reduxjs/toolkit";
import UserService from "../../../services/user.service";
import {IAlbum, IPost, IUser} from "./userTypes";

export type UserState = {
    users: IUser[],
    user?: IUser,
    posts: IPost[],
    albums: IAlbum[],
}

const initialState: UserState = {
    users: [],
    posts: [],
    albums: []
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUsersResponse: (state: UserState, action) => {
            state.users = action.payload
        },
        getUserResponse: (state: UserState, action) => {
            state.user = action.payload
        },
        getPostsResponse: (state: UserState, action) => {
            state.posts = action.payload
        },
        getAlbumsResponse: (state: UserState, action) => {
            state.albums = action.payload
        },
    },
})

export const getUsers = () => {
    return async (dispatch: any) => {
        try {
            const res = await UserService.getUsers()
            dispatch(getUsersResponse(res))
        } catch (e) {
            console.log(e)
        }
    }
}

export const getUser = (id: number) => {
    return async (dispatch: any) => {
        try {
            const res = await UserService.getUser(id)
            dispatch(getUserResponse(res))
        } catch (e) {
            console.log(e)
        }
    }
}

export const getPosts = (userId: number) => {
    return async (dispatch: any) => {
        try {
            const res = await UserService.getPosts(userId)
            dispatch(getPostsResponse(res))
        } catch (e) {
            console.log(e)
        }
    }
}
export const getAlbums = (userId: number) => {
    return async (dispatch: any) => {
        try {
            const res = await UserService.getAlbums(userId)
            dispatch(getAlbumsResponse(res))
        } catch (e) {
            console.log(e)
        }
    }
}

export const {getUsersResponse, getPostsResponse, getUserResponse, getAlbumsResponse} = userSlice.actions

export default userSlice.reducer