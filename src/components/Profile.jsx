import { useContext } from "react"
import UserContext from "../context/User/UserContext"

export const Profile = () => {
  const { selectedUsers } = useContext(UserContext)

  return (
    <>
      {
        selectedUsers ? (
          <div className="card card-body text-center">
            <img src={selectedUsers.avatar} className="card-img-top rounded-circle m-auto img-fluid" style={{ width: 100 }} alt={selectedUsers.first_name} />
            <h1>{`${selectedUsers.first_name} ${selectedUsers.last_name}`}</h1>
            <h3>Email: {selectedUsers.email}</h3>
          </div>
        ) : (<h1>Seleccione un usuario.</h1>)
      }
    </>
  )
}
