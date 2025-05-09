import { useState, type ReactNode } from "react";
import { UserContext } from "./UserContext";

export const UserContextProvider = ({ children }: {children: ReactNode}) => {
    const [ user, setUser ] = useState<string>("")

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}