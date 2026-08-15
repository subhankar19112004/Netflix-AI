export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/.test(password);
  const errMessage = "Invalid email or password.";

  if (!isEmailValid) return errMessage;
  if (!isPasswordValid) return errMessage;

  return null;
};
