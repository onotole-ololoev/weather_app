import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {useAppDispatch} from "../../store/store";
import {setErrorValueAC} from "../../store/app-reducer";
import {useEffect} from "react";

export function BasicAlert() {

    const dispatch = useAppDispatch()

    const onCloseError = () => {
        dispatch(setErrorValueAC(false))
    }
    // const autoClose = () => {
    //     setTimeout(() => {
    //         dispatch(setErrorValueAC(false))
    //     }, 3000)
    // }
    useEffect(() => {
        setTimeout(() => { onCloseError()}, 2000)
    }, [])
    return (
        <Stack sx={{width: '100%'}} spacing={2}>
            <Alert severity="error" onClose={onCloseError} >please, type only numbers...</Alert>
        </Stack>
    );
}