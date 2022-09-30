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
        const regex = /^[a-z ,.'-]+$/i
        if (value === firstName && !firstName || regex.test(firstName) === false) {
            return "First name cannot be empty";
        }
        const regex2 = /^[a-z ,.'-]+$/i
        if (value === lastName && !lastName || regex2.test(lastName) === false) {
            return "Last name cannot be empty";
        }
        const regex3 = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (value === email && !email || regex3.test(email) === false) {
            return "looks like this is not an email";
        }
        const regex4 = /^[a-z ,.'-]+$/i
        if (value === password && !password || regex4.test(lastName) === false) {
            return "Password cannot be empty";
        } return;
    }
    return (
        <>
            <div className='bottom'>
                <div className="ad">
                    {/* <span className='mobile'>
                        <span className="bold">Try it free 7 days</span>  then <br /> $20/mo. thereafter
                    </span> */}
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