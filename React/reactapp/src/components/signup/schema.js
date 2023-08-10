import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstname: Yup.string().required("Enter your firstname"),
  lastname: Yup.string().required("Enter your lastname"),
  username: Yup.string().required("Enter Your Username"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Enter your email"),
  password: Yup.string()
    .required("Enter your password")
    .min(8, "Pasword must be 8 or more characters")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])\w+/,
      "Password ahould contain at least one uppercase and lowercase character"
    )
    .matches(/\d/, "Password should contain at least one number")
    .matches(
      /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
      "Password should contain at least one special character"
    ),
  confirmPassword: Yup.string().when("password", (password, field) => {
    if (password) {
      return field
        .required("The passwords do not match")
        .oneOf([Yup.ref("password")], "The passwords do not match");
    }
  }),
  
});

export { SignupSchema };
