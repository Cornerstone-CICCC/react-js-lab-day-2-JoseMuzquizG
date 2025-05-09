import React, { createContext } from "react";

export type UserContextType = { 
    user: string
    setUser: React.Dispatch<React.SetStateAction<string>>
}

export const UserContext = createContext<UserContextType>({
    user: "",
    setUser: () => {}
}) 