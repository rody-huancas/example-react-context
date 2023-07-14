import { useContext, useEffect } from "react"
import UserContext from "../context/User/UserContext"

export const UserList = () => {
    const {users, getUsers, getProfile} = useContext(UserContext);

    useEffect(() => {
        getUsers();
    }, [])
    

    return (
    <>
        <div className="list-group h-100">
            {
                users.map((user) =>(
                    <button key={user.id} className="list-group-item list-group-item-action d-flex" onClick={()=> getProfile(user.id)}>
                        <img src={user.avatar} className="img-fluid mr-4 rounded-circle" width="70" alt={user.first_name} />
                        <p>
                            {`${user.first_name} ${user.last_name}`}
                        </p>
                    </button>
                ))
            }
        </div>
    </>
  )
}
