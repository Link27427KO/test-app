import {FC} from "react";
import {IAlbum} from "../../modules/reducers/user/userTypes";
import {Card} from "primereact/card";

interface IAlbumItemProps {
    album: IAlbum
}
export const AlbumItem: FC<IAlbumItemProps> = (props: IAlbumItemProps) => {
    const {album} = props
    return(
        <>
            <Card
                style={{
                    width: '40em',
                    padding: 30,
                    margin: 30,
                    borderRadius: 5,
                    border: '1px solid #999999',
                    boxShadow: '5px 5px 5px #c2c2c2'
                }}>
                <div>title: {album.title}</div>
            </Card>
        </>
    )
}