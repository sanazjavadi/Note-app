const validate = (values) => {
    const errors = {};

    // Name
    if (!values.name) {
        errors.name = 'Name is required';
    }

    // Email
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    // password
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
    }

    return errors;
};

export default validate;
