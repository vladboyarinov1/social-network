type AuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean

}
type SetUserData = ReturnType<typeof setAuthUserData>


const initState: AuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
export type ActionTypes = SetUserData

export const authReducer = (state: AuthType = initState, action: ActionTypes) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state
    }
};

export const setAuthUserData = (data: AuthType) => ({type: 'SET-USER-DATA', payload: data} as const)

