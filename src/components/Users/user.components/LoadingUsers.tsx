import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { getLoadingUsers } from "../../../redux/actionAsync";
import {InitialStateType} from "../../../redux/reducer";
import {SET_PRELOAD_USER_ACTION} from "../../../redux/action";

export const LoadingUsers = () => {
    const { users, loadingUsers, loadingUsersSuccess } = useSelector((state : InitialStateType) => state)
    const dispatch = useDispatch()

    const handleLoadingClick = (e : React.MouseEvent) => {
        e.preventDefault()

        if (loadingUsers && users.links.next_url) {
            dispatch(SET_PRELOAD_USER_ACTION(false))
            dispatch(getLoadingUsers(users.links.next_url))
        }
    }

    return (
        <div className="users__showMore">
            <button
                onClick={handleLoadingClick}
                className="sing__button"
                type="submit"

                style={{
                    display : loadingUsersSuccess && users.links.next_url ? 'block' : 'none',
                    opacity : loadingUsers ? 1 : 0.5,
                    transition : 'opacity 0.4s ease'
                }}
            >
               Show more
            </button>
        </div>
    )
}