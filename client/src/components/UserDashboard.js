import {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'
const UserDashboard = (props) => {
    const[userInfo, setUserInfo] = useState(null)
    const getUserInfo = () => {
        fetch('./api/users/me', {'credentials': 'include'})
        .then(res => res.json())
        .then(res => {
            setUserInfo(res)
            props.setUserLogginIn(true)
        })
        .catch(err => {
            window.location.href="/signin"
            console.log(err)})
    }
    useEffect(() => {
       getUserInfo()
    },[])

    return(

        <div>
            <div>
                {userInfo && (
                    <h1>Hello {userInfo.name}</h1>
                )}
               
            </div>
            <h1>User Settings</h1>
            <div>
                <h1>Order History</h1>
                {userInfo && (
                    userInfo.order.map((order,i) => (
                        <div>
                            <p>order</p>
                        </div>
                    ))
                )
               }
            </div>
            <div>
                <h1>Favorite Orders</h1>
            </div>
        </div>
    )
}

export default UserDashboard