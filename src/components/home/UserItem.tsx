import {IUser} from "../../modules/reducers/user/userTypes";
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {useHistory} from "react-router";
import {FC} from "react";

interface IUserItemProps {
    user: IUser
    showFooter?: boolean
    padding?: string
}

export const UserItem: FC<IUserItemProps> = (props: IUserItemProps) => {
    const {user, showFooter, padding} = props
    const history = useHistory()
    const footer = (
        <span style={{display: `${showFooter !== undefined && !showFooter ? 'none' : 'block'}`}}>
            <hr/>
                <Button
                    onClick={() => {
                        history.push(`/albums/${user.id}`)
                    }}
                    style={{cursor: 'pointer', fontSize: 20, padding: '8px 10px 8px 10px'}} label="Album"
                    icon="pi pi-images"/>
                <Button
                    onClick={() => {
                        history.push(`/posts/${user.id}`)
                    }} style={{cursor: 'pointer', marginLeft: 20, fontSize: 20, padding: '8px 10px 8px 10px'}}
                    label="Posts" icon="pi pi-book" className="p-button-secondary p-ml-2"/>
            </span>
    );
    return (
        <div style={{padding: padding ? padding : 50}}>
            <Card style={{
                width: '40em',
                padding: 30,
                borderRadius: 5,
                border: '1px solid #999999',
                boxShadow: '5px 5px 5px #c2c2c2'
            }}
                  footer={footer}>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div>
                        <div>NAME:</div>
                        <div>{user.name}</div>
                    </div>
                    <div>
                        <div>USERNAME:</div>
                        <div>{user.username}</div>
                    </div>
                    <div>
                        <div>WEBSITE:</div>
                        <div>{user.website}</div>
                    </div>
                    <div>
                        <div>ADDRESS: <i className="pi pi-arrow-down"/></div>
                        <div>City: {user.address.city}</div>
                        <div>Street: {user.address.street}</div>
                        <div>Suite: {user.address.suite}</div>
                        <div>Zipcode: {user.address.zipcode}</div>
                        <div style={{display: 'block'}}>GEO: <i className="pi pi-caret-down"/>
                            <div>Latitude: {user.address.geo.lat}</div>
                            <div>Longitude: {user.address.geo.lng}</div>
                        </div>

                    </div>

                </div>
            </Card>
        </div>
    )
}