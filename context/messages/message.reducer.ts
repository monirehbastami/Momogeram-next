
import { ContextAction, ContextActionTypes, MessageState } from "../../@types/context/context.types";
import { ApiRoutes } from "../../constant/api.route";

export const MessageReducer = (state:MessageState,action:ContextAction<ContextActionTypes,any>): MessageState =>{
    switch(action.type){
        case ContextActionTypes.Get_Current_Message:
            state.roomId = action.payload.roomId;
            state.MessageList = action.payload.MessageList;
            return state;
        case ContextActionTypes.Send_New_Message:
            state.MessageList.push(action.payload)
            return state;
        case ContextActionTypes.Delete_Message:
            state.MessageList = state.MessageList.filter(
                (n) => n.id !== action?.payload
              );
            return state;
        case ContextActionTypes.Edit_Current_Message:        
          state.MessageList.filter(
            (n) => n.id == action?.payload.msgid
          )[0].value = action.payload.msgval;
           return state;
        case ContextActionTypes.Clear_Room_Id:
            state.roomId = action.payload;
            return state;
        default:
            return state;
    }
}