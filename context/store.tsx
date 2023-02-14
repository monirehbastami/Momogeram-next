import { createContext, useReducer } from "react";
import { ContextAction, ContextActionTypes, ContextAppState } from "../@types/context/context.types";
import { ContactReducer } from "./contact/contact.reducer";
import { MessageReducer } from "./messages/message.reducer";
import UserReducer from "./user/user.reducer";

const InitialState: ContextAppState= {
  contacts: {
    contactsList:[],
    searchList:[]
  },
  messages:{
    roomId: "",
    MessageList: [],
  },
  user:{
    username: "",
    token: ""
  }
}
const AppContext = createContext<{
  state: ContextAppState;
  dispatch: React.Dispatch<ContextAction<any, any>>;
}>({
  state: InitialState,
  dispatch: () => null,
});

const CombineReducer = ({ contacts,messages,user}: ContextAppState,action: any) => ({
  contacts: ContactReducer(contacts, action),
  messages:MessageReducer(messages,action),
  user:UserReducer(user,action),
});
interface AppContextProviderProps extends React.PropsWithChildren{
    
}

const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({children}):JSX.Element => {
  const [state, dispatch] = useReducer(CombineReducer,InitialState);
    return ( 
        
        <AppContext.Provider value={{ state ,dispatch }}>
        {children}
        </AppContext.Provider>
    );
}

export { AppContextProvider,AppContext };