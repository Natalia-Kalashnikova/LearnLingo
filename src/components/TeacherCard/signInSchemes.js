import * as Yup from 'yup';

const mainSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required')
        .matches(/[A-Za-z]+/, 'Name must contain at least one letter')
        .matches(/^[A-Za-z\s]+$/, 'Name must contain only letters and spaces'),
    email: Yup.string()
        .required('Email is required')
        .matches(
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Invalid email. Example: example@mail.com'
        )
        .email('Invalid email format, example@mail.com'),
    password: Yup.string()
        .required('Password is required. Example: Password123')
        .min(6, 'Password must be at least 6 characters long')
        .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
        .matches(/[0-9]/, 'Password must contain at least one number'),
    phone: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(9, 'Too short')
        .max(15, 'Too long'),
});

export const loginValidationSchema = Yup.object().shape({
    email: mainSchema.fields.email,
    password: mainSchema.fields.password,
});

export const registerValidationSchema = Yup.object().shape({
    name: mainSchema.fields.name,
    email: mainSchema.fields.email,
    password: mainSchema.fields.password,
});

export const entryValidationSchema = Yup.object().shape({
    name: mainSchema.fields.name,
    email: mainSchema.fields.email,
    phone: mainSchema.fields.phone,
});