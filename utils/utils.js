export const validateEmail = (rule, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value || emailRegex.test(value)) {
        return Promise.resolve();
    }
    return Promise.reject('Please enter a valid email address');
};

export const validatePassword = (rule, value) => {
    if (!value || value.length >= 6) {
        return Promise.resolve();
    }
    return Promise.reject('Password must be at least 6 characters long');
};