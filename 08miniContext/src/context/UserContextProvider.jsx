import React from "react";
import UserContext from "./UserContext";

//Allow any component inside this provider to access and update user without passing props down manually.
const UserContextProvider = ({children}) => {
  const [user, setUser] = React.useState(null)
  return(
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider