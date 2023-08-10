import { AuthInputbox, Authpasswordbox } from "../../components/inputbox";
import { PrimaryBtn } from "../../components/button";
import React,{useContext,useEffect} from "react";
import { Formik, Form } from "formik";
import { LoginSchema } from "./schema";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
import axios from "axios";
import { toast } from 'react-toastify';
import { url } from "../url/url";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context";




const Login = () => {
  const {setUser,user}=useContext(UserContext)
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  useEffect(() => {
    console.log(user)
  }, [user]);

  const handleSubmit = (values) => {
    axios({
      method: "post",
      url: url+"/login",
      data: {
        email: values.email,
        password: values.password
      }
    })
      .then((response) => {
        toast.success("Login successful");
        console.log(response.data);
        localStorage.setItem("AuthToken",response.data.token);
        setUser(true);
        console.log(user)

      })
      .catch((error) => {
        toast.error("Login failed");
        console.error(error.message);
      });
    
  };

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {() => (
          <div className="d-flex justify-content-center">
            <div className="mt-5 card border-0 bg-transparent col-xxl-5 col-xl-6 col-lg-7 col-md-9 col-12">
              <div className="card-body">
                <h1 className={`fs-1 ${styles.primary_txt}`}>Welcome back</h1>
                <h2 className={`fs-6 ${styles.secondary_txt}`}>
                  Sign in to your account
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
                  <div className="form-group pt-4">
                    <div className="d-flex justify-content-between">
                      <label
                        htmlFor="password"
                        className={`fs-6 ${styles.secondary_txt}`}
                      >
                        Password
                      </label>
                      <Link className={styles.link_txt} to="/forgotpassword">
                        <p className={`fs-6 ${styles.secondary_txt}`}>
                          Forgot Password?
                        </p>
                      </Link>
                    </div>
                    <Authpasswordbox
                      name="password"
                      placeholder="•••••••"
                      autoComplete="off"
                    />
                  </div>
                  <div className="pt-4">
                    <PrimaryBtn type="submit" value="Login" />
                  </div>
                  <div className="d-flex justify-content-center pt-3">
                    <span
                      htmlFor="password"
                      className={`fs-6 ${styles.secondary_txt}`}
                    >
                      Don't have an account?&nbsp;
                    </span>
                    <Link className={styles.link_txt} to="/signup">
                      <p className={`fs-6 ${styles.primary_txt}`}>
                        Sign Up Now
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
};

export default Login;
