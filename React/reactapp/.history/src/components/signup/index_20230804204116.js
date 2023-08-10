import { AuthInputbox, Authpasswordbox } from "../../components/inputbox";
import { PrimaryBtn } from "../../components/button";
import React from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import styles from "./signup.module.css";
import { SignupSchema } from "./schema";
import axios from "axios";
import { toast } from 'react-toastify';
import { url } from "../url/url";


const SignUp=()=> {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    username:"",
    password: "",
    confirmPassword:""
   
  };

  const handleSubmit = (values) => {
    axios({
      method: "post",
      url: url+"/users",
      data: {
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        username: values.username,
        password: values.password
      }
    })
      .then((response) => {
        toast.success("Signup successful");
        console.log(response.data);
      })
      .catch((error) => {
        toast.error("Signup failed");
        console.error(error.message);
      });
    
  };

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          handleSubmit(values);
          console.log(values);
        }}
      >
        {() => (
          <div className="d-flex justify-content-center">
            <div className="mt-5 card border-0 bg-transparent col-xxl-5 col-xl-6 col-lg-7 col-md-9 col-12">
              <div className="card-body">
                <h1 className={`fs-1 ${styles.primary_txt}`}>Get started</h1>
                <h2 className={`fs-6 ${styles.secondary_txt}`}>
                  Create a new account
                </h2>
                <Form>
                  <div className="form-group pt-3">
                    <label
                      htmlFor="firstname"
                      className={`fs-6 pb-3 ${styles.secondary_txt}`}
                    >
                      Firstname
                    </label>
                    <AuthInputbox
                      id="firstname"
                      type="text"
                      name="firstname"
                      placeholder="firstname"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group pt-3">
                    <label
                      htmlFor="lastname"
                      className={`fs-6 pb-3 ${styles.secondary_txt}`}
                    >
                      Lastname
                    </label>
                    <AuthInputbox
                      id="lastname"
                      type="text"
                      name="lastname"
                      placeholder="lastname"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group pt-3">
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
                  <div className="form-group pt-3">
                    <label
                      htmlFor="username"
                      className={`fs-6 pb-3 ${styles.secondary_txt}`}
                    >
                      Username
                    </label>
                    <AuthInputbox
                      id="username"
                      type="text"
                      name="username"
                      placeholder="username"
                      autoComplete="off"
                    />
                  </div>
                    
                  <div className="form-group pt-3">
                    <label
                      htmlFor="password"
                      className={`fs-6 pb-3 ${styles.secondary_txt}`}
                    >
                      Password
                    </label>
                    <Authpasswordbox
                      id="password"
                      name="password"
                      placeholder="•••••••"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group pt-3">
                    <label
                      htmlFor="confirmPassword"
                      className={`fs-6 pb-3 ${styles.secondary_txt}`}
                    >
                      Confirm Password
                    </label>
                    <Authpasswordbox
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="•••••••"
                      autoComplete="off"
                    />
                  </div>
                  <div className="pt-3">
                    <PrimaryBtn type="submit"  value="Signup" />
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

export default SignUp;
