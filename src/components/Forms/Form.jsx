import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import {
    loginValidationSchema,
    registerValidationSchema
} from '../../validation/signInSchemes.js';
import { ReactComponent as IconShowPass } from '../../images/icon/eye-off.svg';
import { ReactComponent as IconHidePass } from '../../images/icon/eye.svg';
import css from './Forms.module.css';

export const UniversalForm = (props) => {
    const { title, text, inputs, handleUserSubmit, button } = props;
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (values) => {
        handleUserSubmit(values);
    };

    return (
        <div>
            <h2 className={css.title}>{title}</h2>
            <p className={css.textDesc}>{text}</p>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                }}
                onSubmit={handleSubmit}
                validationSchema={
                    inputs.length === 3 ? registerValidationSchema : loginValidationSchema
                }
            >
                {({ values }) => (
                    <Form>
                        <div className={css.container}>
                            {inputs.map(({ name, label }) => (
                                <div className={css.inputsContainer} key={name}>
                                    {name === 'password' ? (
                                        <>
                                            <button
                                                className={css.signupToggleBtn}
                                                type="button"
                                                onClick={handleTogglePassword}
                                            >
                                                {showPassword ? <IconHidePass /> : <IconShowPass />}
                                            </button>
                                            <Field
                                                className={css.input}
                                                type={showPassword ? 'text' : name}
                                                id={name}
                                                name={name}
                                                autoComplete="on"
                                                placeholder={label}
                                            />
                                        </>
                                    ) : (
                                        <Field
                                            className={css.input}
                                            type={name}
                                            id={name}
                                            name={name}
                                            placeholder={label}
                                            autoComplete="on"
                                        />
                                    )}
                                    <label
                                        className={`${css.label} ${values[name] ? css.transparentLabel : ''
                                            }`}
                                        htmlFor={name}
                                    >
                                        {label}
                                    </label>
                                    <ErrorMessage
                                        name={name}
                                        component="div"
                                        className={css.errorMessage}
                                    />
                                </div>
                            ))}
                        </div>
                        <button className={css.submitBtn} type="submit">
                            {button}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};