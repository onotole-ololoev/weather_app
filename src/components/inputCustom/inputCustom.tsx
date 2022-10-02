import React, {ChangeEvent} from 'react';
import {useAppDispatch} from "../../store/store";
import {setErrorValueAC} from "../../store/app-reducer";

type InputCustomType = {
    onCallback: (value: string) => void
    value?: string
    name: string
}
export const InputCustom = (props: InputCustomType) => {

    const dispatch = useAppDispatch()

    const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (/^\s*\d*[\.\,]?\d*\s*$/.test(e.currentTarget.value)) {
            props.onCallback(e.currentTarget.value)
        } else {
            // alert('please, type only numbers...')
            dispatch(setErrorValueAC(true))
        }
    }

    return (
        <div>
            <input
                className='input'
                placeholder={props.name}
                onChange={onHandleChange}
                value={props.value}
                type={'text'}/>
        </div>
    );
};
