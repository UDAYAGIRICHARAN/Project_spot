import { AuthInputbox, Authpasswordbox } from "../../components/inputbox";
import { PrimaryBtn } from "../../components/button";
import React, { useContext, useEffect } from "react";
import { Formik, Form } from "formik";
import { LoginSchema } from "./schema";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../url/url";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context";

const Login = () => {
  const { setUser, user } = useContext(UserContext);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(url + "/login", {
        email: values.email,
        password: values.password,
      });
      toast.success("Login successful");
      console.log(response.data);
      localStorage.setItem("AuthToken", response.data.token);
      setUser(true);
      console.log(user);
    } catch (error) {
      toast.error("Login failed");
      console.error(error.message);
    }
  };

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          await handleSubmit(values);
        }}
      >
        {() => (
          <div className={`d-flex justify-content-center ${styles.fadeIn}`}>
            <div className={`mt-5 card border-0 bg-transparent col-xxl-5 col-xl-6 col-lg-7 col-md-9 col-12 ${styles.card}`}>
              <div className="card-body">
                <h1 className={`fs-1 ${styles.primary_txt}`}>Project Handler</h1>
                <h2 className={`fs-6 ${styles.secondary_txt}`}>
                  Welcome back! Sign in to your account
                </h2>
                <Form>
                  {/* Rest of your form code */}
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
