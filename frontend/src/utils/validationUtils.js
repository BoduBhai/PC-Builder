export const validateSignupForm = (values) => {
  const errors = {};

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  if (values.password && values.password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (values.email && !emailRegex.test(values.email)) {
    errors.email = "Please enter a valid email address";
  }

  return errors;
};
