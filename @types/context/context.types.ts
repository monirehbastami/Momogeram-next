export type ContactState = {
    avatar: string;
    name: string;
    id: number;
    time: string;
    lastMessage: string;
    roomId:string;
    isActive:boolean;
};
export type MessageItems ={
  isSentByOwner: boolean;
  id: number;
  value:string
}

export type MessageState ={
  roomId:string,
  MessageList:MessageItems[]
}
export enum ContextActionTypes{
    Get_All_Contact = "Get_All_Contact",
    Get_current_Contact = "Get_current_Contact",
    Get_Search_Contacts = "Get_Search_Contacts",
    Get_Current_Message = "Get_Current_Message",
    Send_New_Message = "Send_New_Message",
    Delete_Message = "Delete_Message",
    Edit_Current_Message = "Edit_Current_Message",
    Clear_Room_Id = "Clear_Room_Id",
    Login_Success = "Login_Success",
    Log_out = "Log_out"
}

export type ContextAction<T, K> = {
    type: T;
    payload?: K;
  };
  

export type CreateContext = {
    state:ContextAppState,
    dispatch:React.Dispatch<ContextAction<any,any>>
}
export type ContextAppState = {
  contacts: ContactListState;
  messages: MessageState;
  user:UserAppState;
};
export type ContactListState = {
  contactsList: ContactState[];
  searchList: ContactState[];
};

export type UserAppState = {
  username: string;
  token: string;
};