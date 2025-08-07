import React from 'react';


const TextField = ({label,onChange,placeholder,value}) => {
    return (
        <label className="flex flex-col gap-1">
            <div className="input-group align-items-center m-0">
                <span className="input-group-text border-0">{label}</span>
                <input
                    type="text"
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </label>
    );
};

export default React.memo(TextField);
