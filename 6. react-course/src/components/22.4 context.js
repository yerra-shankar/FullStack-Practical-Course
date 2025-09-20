import React from "react";
//step 1
const UserContext = React.createContext()  

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider,UserConsumer}