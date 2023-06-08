const initState = {
    themeId: 1,
}

type changeThemeIdAT = {
    type: 'SET_THEME_ID',
    id: number
}

export const themeReducer = (state = initState, action: changeThemeIdAT): { themeId: number } => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdAT => ({type: 'SET_THEME_ID', id}) // fix any
