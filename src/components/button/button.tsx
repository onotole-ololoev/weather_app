import React from 'react';

type ButtonPropsType = {
    onCallback: () => void
    name: string
}

export const Button = (props: ButtonPropsType) => {

    const onHandleClick = () => {
        props.onCallback()
    }

    return (
        <button onClick={onHandleClick} className='button'>
            {props.name}
        </button>
    );
};

