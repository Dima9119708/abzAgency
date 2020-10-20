import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {SET_USERS_OFFSET_TOP_ACTION} from "../../redux/action";
import {InitialStateType} from "../../redux/reducer";
import {UserCreate} from "./user.components/UserCreate";
import {LoadingUsers} from "./user.components/LoadingUsers";

export const Users : React.FC = () => {

    const dispatch = useDispatch()
    const $usersDiv = React.useRef(null)
    const { loadUsers } = useSelector((state : InitialStateType) => state)

    React.useEffect(() => {
        const $divUsers = $usersDiv.current! as HTMLDivElement
        dispatch(SET_USERS_OFFSET_TOP_ACTION($divUsers))
    }, [$usersDiv])

    if (!loadUsers) {
        return (
            <section ref={$usersDiv} className="users boxPadding">
                <div className="container">
                    <div className="users__title">
                        <h2 className="title">Our cheerful users</h2>
                        <p className="users__subtitle-text">Attention! Sorting users by registration date</p>
                    </div>
                    <div style={{display : "flex", justifyContent : 'center'}}>
                        <div className="lds-spinner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section ref={$usersDiv} className="users boxPadding">
            <div className="container">
                <div className="users__title">
                    <h2 className="title">Our cheerful users</h2>
                    <p className="users__subtitle-text">Attention! Sorting users by registration date</p>
                </div>

                <div className="users__inner">
                    <UserCreate />
                </div>

                <LoadingUsers />

            </div>
        </section>
    )
}