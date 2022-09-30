/* eslint-disable no-useless-escape */
/* eslint-disable no-mixed-operators */
import React from 'react'
import { useState } from 'react';
import './Form.css'

function Form() {
    // const [details, setDetails] = useState({
    //     email: '', firstName: '', lastName: '', password: '',
    // })
    // const [error, setError] = useState({
    //     errorFirstName: '', errorLastName: '', errorPassword: ''
    // })
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
        setErrorFirstName(validation(firstName));
        setErrorLastName(validation(lastName));
        setErrorEmail(validation(email));
        setErrorPassword(validation(password));
    }

    const validation = (value) => {
        if (value === firstName && !firstName) {
            return "First name cannot be empty";
        }
        if (value === lastName && !lastName) {
            return "Last name cannot be empty";
        }
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (value === email && !email || regex.test(email) === false) {
            return "looks like this is not an email";
        }
        if (value === password && !password) {
            return "Password cannot be empty";
        } return;
    }
    return (
        <>
            <div className='bottom'>
                <div className="ad">
                    <span className='desktop'>
                        <span className="bold">Try it free 7 days</span>  then $20/mo. thereafter
                    </span>
                </div>
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
                                <p className="error">{errorFirstName}</p>
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

                        <button className='btn' onClick={() => { return '' }}>
                            Claim your free trial
                        </button>
                        <section>
                            <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
                        </section>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Form