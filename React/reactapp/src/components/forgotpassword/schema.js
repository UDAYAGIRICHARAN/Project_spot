import * as Yup from "yup";

const Forgotpasswordschema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Enter your email"),
});

export { Forgotpasswordschema };
