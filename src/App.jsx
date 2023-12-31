import { Profile } from "./components/Profile"
import { UserList } from "./components/UserList"

// context
import { UserState } from "./context/User/UserState"

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <UserState>
      <div className="p-4">
        <div className="row">
          <div className="col-md-7">
            <UserList />
          </div>
          <div className="col-md-5">
            <Profile />
          </div>
        </div>
      </div>
    </UserState>
  )
}

export default App