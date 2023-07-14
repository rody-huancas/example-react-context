import { GET_USERS, GET_PROFILE } from "../types"

export const UserReducer = (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload
            }
        case GET_PROFILE:
            return {
                ...state,
                selectedUsers: payload
            }
        default:
            return state;
    }
}