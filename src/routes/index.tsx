import {Switch, Route, Redirect} from "react-router";
import HomePage from "../pages/HomePage";
import PostsPage from "../pages/PostsPage";
import AlbumPage from "../pages/AlbumPage";

export const useRoutes = () => {
    return (
        <Switch>
            <Route path={'/'} exact>
                <HomePage/>
            </Route>
            <Route path={'/posts/:userId'}>
                <PostsPage/>
            </Route>
            <Route path={'/albums/:userId'}>
                <AlbumPage/>
            </Route>
            <Redirect to={"/"}/>
        </Switch>
    )
}