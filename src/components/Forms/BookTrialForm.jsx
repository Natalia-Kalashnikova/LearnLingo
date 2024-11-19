import { Formik, Form, Field, ErrorMessage } from 'formik';
import { entryValidationSchema } from '../../validation/signInSchemes.js';
import { showSuccessToast } from '../../components/ErrorMessages/errorMessages.js';
import css from './Forms.module.css';

const BookTrialForm = ({
    avatar_url,
    name,
    surname,
    setShowBookTrialForm,
}) => {
    const userInputs = [
        { name: 'name', type: 'text', label: 'Full Name' },
        { name: 'email', type: 'email', label: 'Email' },
        { name: 'phone', type: 'tel', label: 'Phone number' },
    ];

    const userRadioInputs = [
        { value: 'career', text: 'Career and business' },
        { value: 'kids', text: 'Lesson for kids' },
        { value: 'abroad', text: 'Living abroad' },
        { value: 'exams', text: 'Exams and coursework' },
        { value: 'hobby', text: 'Culture, travel or hobby' },
    ];

    const handleSubmit = () => {
        setShowBookTrialForm(false);
        showSuccessToast(
            'Thank you! The teacher will contact you shortly to arrange further details.'
        );
    };

    return (
        <div>
            <h2 className={css.title}>Book trial lesson</h2>
            <p className={css.textDesc}>
                Our experienced tutor will assess your current language level, discuss
                your learning goals, and tailor the lesson to your specific needs.
            </p>
            <div className={css.teacherWrapper}>                
                <img
                    className={css.teacherImg}
                    src={avatar_url}
                    alt={`${name} ${surname}`}
                    width={44}
                    height={44}
                />
                <div className={css.teacherTextWrapper}>
                    <p className={css.teacherText}>Your teacher</p>
                    <h3 className={css.teacherTitle}>
                        {name} {surname}
                    </h3>
                </div>
            </div>
            <p className={css.reasonText}>
                What is your main reason for learning English?
            </p>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    reason: 'career',
                }}
                onSubmit={handleSubmit}
                validationSchema={entryValidationSchema}
            >
                {({ values }) => (
                    <Form>
                        <ul className={css.radioList}>
                            {userRadioInputs.map(({ value, text }) => (
                                <li className={css.radioItem} key={value}>
                                    <Field
                                        className={css.radioInput}
                                        type="radio"
                                        name="reason"
                                        value={value}
                                        id={value} />
                                    <label className={css.radioLabel} htmlFor={value}>
                                        {text}
                                    </label>
                                </li>
                            ))}
                        </ul>
                        <div className={css.container}>
                            {userInputs.map(({ name, label, type }) => (
                                <div className={css.inputsContainer} key={name}>
                                    <Field
                                        className={css.input}
                                        type={type}
                                        id={name}
                                        name={name}
                                        autoComplete="on"
                                        placeholder={label}
                                        required
                                    />
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
                            Book
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default BookTrialForm;