import React from 'react';

import './form-input.styles.scss';

export const FormInput = ({label, handleChange, ...otherProps}) => (
    <div className="group"> 
        <input onChange={handleChange} {...otherProps} className="form-input" />
        {
            label ?
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : 
            null
        }
    </div>
)