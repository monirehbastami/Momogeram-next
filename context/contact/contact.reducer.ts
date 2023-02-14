import { ContactListState, ContextAction, ContextActionTypes } from "../../@types/context/context.types";

export const ContactReducer = (
    state:ContactListState,
    action:ContextAction<ContextActionTypes,any>
): ContactListState => {
    switch (action.type){
        case ContextActionTypes.Get_All_Contact:
            state.contactsList = action.payload
            return state
        case ContextActionTypes.Get_Search_Contacts:
            const filterContacts = state.contactsList.filter((n) =>
                n.name.includes(action.payload)
            );
            state.searchList = filterContacts;
            return state;
        default:
            return state;
    }
}