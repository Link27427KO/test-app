import {useDispatch, useSelector} from "react-redux";
import {postsListSelector, usersListSelector} from "../modules/reducers/user/userSelectors";
import {FC, useEffect} from "react";
import {getPosts, getUsers} from "../modules/reducers/user/userSlice";
import {UserItem} from "../components/home/UserItem";

const HomePage: FC = () => {
    const dispatch = useDispatch()
    const users = useSelector(usersListSelector)
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    return (
        <div>
            <div style={{paddingTop: 50, paddingLeft: 50}}>USERS</div>

            {
                users.length > 0 && users.map((user) => {
                    return (
                        <div key={user.id}>
                            <UserItem user={user}/>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default HomePage