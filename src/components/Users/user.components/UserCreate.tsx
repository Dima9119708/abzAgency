import React from "react";
import defaultUserFoto from "../../../assets/img/photo-cover.svg";
import {EclipseTooltip} from "../../EclipseTooltip/EclipseTooltip";
import {useSelector} from "react-redux";
import {InitialStateType} from "../../../redux/reducer";

export const UserCreate = () => {

    const { users } = useSelector((state : InitialStateType) => state)

    const formatNumber = (phoneNum : string) => {
        const num1 = phoneNum.substr(0, 4)
        const num2 = phoneNum.substr(4, 2)
        const num3 = phoneNum.substr(6, 3)
        const num4 = phoneNum.substr(9, 2)
        const num5 = phoneNum.substr(11, )
        return `${num1} ${num2} ${num3} ${num4} ${num5}`
    }

    return (<>
            { users.users.map((item,index) => {

                return (
                    <div key={item.name + index} className="user__card">
                        <div className="user__card-img">
                            <img
                                src={ item.photo ? item.photo : defaultUserFoto}
                                className="image"
                                alt='defaultUserFoto'
                            />
                        </div>
                        <div className="user__card-name">{item.name}</div>

                        <EclipseTooltip >
                            <div className="user__card-position">
                                {item.position}
                            </div>
                        </EclipseTooltip>

                        <EclipseTooltip>
                            <div className="user__card-email">{item.email}</div>
                        </EclipseTooltip>
                        <div className="user__card-phone">{formatNumber(item.phone)}</div>
                </div>)
            })}
        </>
    )
}
