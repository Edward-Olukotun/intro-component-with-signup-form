/* eslint-disable no-mixed-operators */
import React from 'react'
import { useState } from 'react';
import './Form.css'

function Form() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [errorFirstName, setErrorFirstName] = useState(false)
    const [errorLastName, setErrorLastName] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)

    const submit = (event) => {
        event.preventDefault();
        setErrorEmail(validation(email));
        setErrorFirstName(validation(firstName));
        setErrorLastName(validation(lastName));
        setErrorPassword(validation(password));
    }
    const validation = (value) => {

        const regex1 =
            // eslint-disable-next-line no-useless-escape
            /^[a-z ,.'-]+$/i
        if (value === firstName && !firstName || regex1.test(firstName) === false) {
            return "First name cannot be empty";
        }
        const regex2 =
            // eslint-disable-next-line no-useless-escape
            /^[a-z ,.'-]+$/i
        if (value === lastName && !lastName || regex2.test(lastName) === false) {
            return "Last name cannot be empty";
        }
        const regex3 =
            // eslint-disable-next-line no-useless-escape
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (value === email && !email || regex3.test(email) === false) {
            return "looks like this is not an email";
        }
        const regex4 =
            // eslint-disable-next-line no-useless-escape
            // /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/i
            /^[a-z ,.'-]+$/i
        if (value === password && !password || regex4.test(lastName) === false) {
            return "Password cannot be empty";
        } return;
    }
    return (
        <div className='form'>
            <form onSubmit={submit}>
                <input
                    type="text"
                    value={firstName}
                    placeholder="        First Name   "
                    onChange={(e) => setFirstName(e.target.value)}
                />
                {errorFirstName && (
                    <>
                        <img
                            className="error-icon"
                            src="./images/icon-error.svg"
                            alt="error-icon"
                        />
                        <p className="error">{setErrorFirstName}</p>
                    </>
                )}

                <input
                    type="text"
                    value={lastName}
                    placeholder="        Last Name   "
                    onChange={(e) => setLastName(e.target.value)}
                />
                {errorLastName && (
                    <><img
                        className="error-icon"
                        src="./images/icon-error.svg"
                        alt="error-icon"
                    />
                        <p className="error">{errorLastName}</p>
                    </>
                )}

                <input
                    type="email"
                    value={email}
                    placeholder="        Email Address   "
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errorEmail && (
                    <> <img
                        className="error-icon"
                        src="./images/icon-error.svg"
                        alt="error-icon"
                    />
                        <p className="error">{errorEmail}</p>
                    </>
                )}

                <input
                    type="password"
                    value={password}
                    placeholder="        Password   "
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorPassword && (
                    <><img
                        className="error-icon"
                        src="./images/icon-error.svg"
                        alt="error-icon"
                    />
                        <p className="error">{errorPassword}</p>
                    </>
                )}

                <button className='btn'>
                    Claim your free trial
                </button>
                <section>
                    <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
                </section>
            </form>

        </div>
    )
}

export default Form