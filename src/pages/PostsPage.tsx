import {useHistory, useParams} from "react-router";
import {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPosts, getUser} from "../modules/reducers/user/userSlice";
import {postsListSelector, userSelector} from "../modules/reducers/user/userSelectors";
import {Button} from "primereact/button";
import {PostItem} from "../components/post/PostItem";
import {UserItem} from "../components/home/UserItem";

const PostsPage: FC = () => {
    const {userId} = useParams<{ userId: string }>()
    const dispatch = useDispatch()
    const posts = useSelector(postsListSelector)
    const user = useSelector(userSelector)
    const history = useHistory()

    useEffect(() => {
        dispatch(getPosts(Number(userId)))
        dispatch(getUser(Number(userId)))
    }, [])
    return (
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
            <div style={{paddingTop: 30, paddingLeft: 30}}>POSTS</div>

            {
                posts.length > 0 && posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <PostItem post={post}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default PostsPage