import {IPost} from "../../modules/reducers/user/userTypes";
import {Card} from "primereact/card";
import {FC} from "react";

interface IPostItemProps {
    post: IPost
}

export const PostItem: FC<IPostItemProps> = (props: IPostItemProps) => {
    const {post} = props
    return (
        <Card
            style={{
                width: '40em',
                padding: 30,
                margin: 30,
                borderRadius: 5,
                border: '1px solid #999999',
                boxShadow: '5px 5px 5px #c2c2c2'
            }}>
            <div>title: {post.title}</div>
            <div>{post.body}</div>
        </Card>
    )
}