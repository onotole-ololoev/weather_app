import React, {ChangeEvent} from 'react';

type InputCustomType = {
    onCallback: (value: string) => void
    value?: string
    name: string
}
export const InputCustom = (props: InputCustomType) => {

    const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onCallback(e.currentTarget.value)
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
