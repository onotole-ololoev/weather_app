const appInitialState = {
    tempValue: 'fahrenheit' as const
}
type AppInitialStateType = {
    tempValue: TempType
}

type TempType = 'fahrenheit' | 'celsius'

type AppActionType = SetTempValueACType

export const appReducer = (state: AppInitialStateType = appInitialState, action: AppActionType) => {
    switch (action.type) {
        case "APP/SET-TEMP-VALUE":
            return {...state, tempValue: action.value}
        default:
            return state
    }
}

export const setTempValueAC = (value: TempType) => {
    return {type: 'APP/SET-TEMP-VALUE', value} as const
}
type SetTempValueACType = ReturnType<typeof setTempValueAC>