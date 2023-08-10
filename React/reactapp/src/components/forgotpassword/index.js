import { AuthInputbox, Authpasswordbox } from "../../components/inputbox";
import { PrimaryBtn } from "../../components/button";
import React from "react";
import { Formik, Form } from "formik";
import { Forgotpasswordschema } from "./schema";
import { Link } from "react-router-dom";
import styles from "./forgotpassword.module.css";

export default function ForgotPassword() {
  const initialValues = {
    email: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={Forgotpasswordschema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {() => (
          <div className="d-flex justify-content-center">
            <div className="mt-5 card border-0 bg-transparent col-xxl-5 col-xl-6 col-lg-7 col-md-9 col-12">
              <div className="card-body">
                <h1 className={`fs-1 ${styles.primary_txt}`}>
                  Reset Your Password
                </h1>
                <h2 className={`fs-6 ${styles.secondary_txt}`}>
                  Type in your email and we'll send you a link to reset your
                  password
                </h2>
                <Form>
                  <div className="form-group pt-4">
                    <label
                      htmlFor="email"
                      className={`fs-6 pb-3 ${styles.secondary_txt}`}
                    >
                      Email
                    </label>
                    <AuthInputbox
                      type="email"
                      name="email"
                      placeholder="your@gmail.com"
                      autoComplete="off"
                    />
                  </div>
                  <div className="pt-3">
                    <PrimaryBtn type="submit" value="Send Reset Email" />
                  </div>
                  <div className="d-flex justify-content-center pt-3">
                    <span
                      htmlFor="password"
                      className={`fs-6 ${styles.secondary_txt}`}
                    >
                      Have an account?&nbsp;
                    </span>
                    <Link className={styles.link_txt} to="/">
                      <p className={`fs-6 ${styles.primary_txt}`}>
                        Sign In Now
                      </p>
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
