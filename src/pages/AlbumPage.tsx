import {FC, useEffect} from "react";
import {useHistory, useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {albumsListSelector, postsListSelector, userSelector} from "../modules/reducers/user/userSelectors";
import {getAlbums, getPosts, getUser} from "../modules/reducers/user/userSlice";
import {Button} from "primereact/button";
import {UserItem} from "../components/home/UserItem";
import {PostItem} from "../components/post/PostItem";
import {IAlbum} from "../modules/reducers/user/userTypes";
import {AlbumItem} from "../components/albums/AlbumItem";

const AlbumPage: FC = () => {
    const {userId} = useParams<{ userId: string }>()
    const dispatch = useDispatch()
    const albums = useSelector(albumsListSelector)
    const user = useSelector(userSelector)
    const history = useHistory()

    useEffect(() => {
        dispatch(getAlbums(Number(userId)))
        dispatch(getUser(Number(userId)))
    }, [])
    console.log(albums)
    return(
        <>
            <div style={{padding: 50}}>
                <Button
                    style={{
                        marginLeft: 30,
                        cursor: 'pointer',
                        fontSize: 20,
                        padding: '8px 10px 8px 10px'
                    }}
                    onClick={() => {
                        history.push('/')
                    }}>
                    <i className="pi pi-arrow-left"/>Back
                </Button>
                {user && (
                    <div style={{marginLeft: 30, marginTop: 30}}>
                        <div>USER PROFILE</div>
                        <div>
                            <UserItem padding={'0px 0px 0px 0px'} user={user} showFooter={false}/>
                        </div>
                    </div>
                )}
                <div style={{paddingTop: 30, paddingLeft: 30}}>ALBUMS</div>
                {
                    albums.length > 0 && albums.map((album) => {
                        return (
                            <div key={album.id}>
                                <AlbumItem album={album}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default AlbumPage