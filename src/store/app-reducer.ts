const appInitialState = {
    tempValue: 'fahrenheit' as const,
    isError: false,
    isLoading: false
}
type AppInitialStateType = {
    tempValue: TempType
    isError: boolean
    isLoading: boolean
}

type TempType = 'fahrenheit' | 'celsius'

type AppActionType = SetTempValueACType
    | SetErrorValueACType
    | SetAppLoadingACType

export const appReducer = (state: AppInitialStateType = appInitialState, action: AppActionType) => {
    switch (action.type) {
        case "APP/SET-TEMP-VALUE":
            return {...state, tempValue: action.value}
        case "APP/SET-ERROR-VALUE":
            return {...state, isError: action.value}
        case "APP/SET-APP-LOADING":
            return {...state, isLoading: action.value}
        default:
            return state
    }
}

export const setTempValueAC = (value: TempType) => {
    return {type: 'APP/SET-TEMP-VALUE', value} as const
}
export const setErrorValueAC = (value: boolean) => {
    return {type: 'APP/SET-ERROR-VALUE', value} as const
}
export const setAppLoadingAC = (value: boolean) => {
    return {type: 'APP/SET-APP-LOADING', value} as const
}
type SetTempValueACType = ReturnType<typeof setTempValueAC>
type SetErrorValueACType = ReturnType<typeof setErrorValueAC>
type SetAppLoadingACType = ReturnType<typeof setAppLoadingAC>