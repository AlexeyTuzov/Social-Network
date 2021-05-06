import React from 'react';
import s from "./Settings.module.css"

const Settings = (props) => {

    let EmailInput = (item) => props.EditEmail(item.target.value);
    let FirstNameInput = (item) => props.EditFirstName(item.target.value);
    let LastNameInput = (item) => props.EditLastName(item.target.value);
    let PasswordInput = (item) => props.EditPassword(item.target.value);
    let SendCredentials = () => props.SendCredentials();

    return (
        <>
            <div className={s.Grid}>
                <div className={s.InputCage}>
                    <div className={s.Credential}>
                        <div>Required field!</div>
                        <input placeholder='Enter the E-mail'
                               className={s.Input}
                               value={props.email}
                               onChange={EmailInput}
                        />
                    </div>
                    <div className={s.Credential}>
                        <div>Required field!</div>
                        <input placeholder='Enter the First Name'
                               className={s.Input}
                               value={props.firstName}
                               onChange={FirstNameInput}
                        />
                    </div>
                    <div className={s.Credential}>
                        <div>Optional field!</div>
                        <input placeholder='Enter the Last Name'
                               className={s.Input}
                               value={props.lastName}
                               onChange={LastNameInput}
                        />
                    </div>
                    <div className={s.Credential}>
                        <div>Password length must be min 6 symbols!</div>
                        <input placeholder='Enter the Password'
                               className={s.Input}
                               value={props.password}
                               onChange={PasswordInput}
                        />
                    </div>
                </div>
                <div className={s.ButtonBlock}>
                    <button className={s.Button}
                            onClick={SendCredentials}
                    >Send credentials!
                    </button>
                </div>
            </div>
        </>
    );
}

export default Settings;