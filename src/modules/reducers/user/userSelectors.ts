import {RootState} from "../../store";
import {IAlbum, IPost, IUser} from "./userTypes";

// @ts-ignore
export const usersListSelector = (state: RootState) => state.user.users as IUser[]
// @ts-ignore
export const userSelector = (state: RootState) => state.user.user as IUser
// @ts-ignore
export const postsListSelector = (state: RootState) => state.user.posts as IPost[]
export const albumsListSelector = (state: RootState) => state.user.albums as IAlbum[]
