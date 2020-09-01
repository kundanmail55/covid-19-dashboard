export const validEmailRegex = /\S+@\S+\.\S+/;
export const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};


export const InputError = (errors, type, value) => {
    switch (type) {
        case 'email': 
          errors.email = 
            validEmailRegex.test(value)
              ? ''
              : 'Email is not valid!';
          break;
        case 'password': 
          errors.password = 
            value.length < 8
              ? 'Password must be at least 8 characters long!'
              : '';
          break;
          case 'registrationEmail': 
          errors.registrationEmail = 
            validEmailRegex.test(value)
              ? ''
              : 'Email is not valid!';
          break;
        case 'registrationPassword': 
          errors.registrationPassword = 
            value.length < 8
              ? 'Password must be at least 8 characters long!'
              : '';
          break;
        default:
          break;
    }
    return errors;
}