import { ReactNode, createContext, useContext } from "react";
import { UserProps } from '../interfaces';

interface UserContextProps {
  toSendData: (data: UserProps) => void;
}

export const UserContext = createContext<UserContextProps | null>(null);

const UserStorage = ({ children }: { children: ReactNode }) => {

  const toSendData = (data: UserProps) => {
    // Send the data
    console.log(data)
  };

  return (
    <UserContext.Provider value={{ toSendData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserStorage;

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
