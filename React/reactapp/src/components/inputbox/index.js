import styles from "./inputbox.module.css";
import { useState } from "react";
import { Field, ErrorMessage, useField, useFormikContext } from "formik";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import moment from "moment/moment";
import Select from "react-select";

const AuthInputbox = (props) => {
  return (
    <div className="auth-inputbox">
      <Field className={`${styles.auth_input_box} form-control`} {...props} />
      <ErrorMessage
        className={styles.error_txt}
        component="div"
        name={props.name}
      />
    </div>
  );
};

const Authpasswordbox = (props) => {
  const [ispassword, setIspassword] = useState(true);
  return (
    <div className={styles.password_container}>
      <Field
        type={ispassword ? "password" : "text"}
        {...props}
        className={`${styles.auth_input_box} form-control`}
      />
      <div
        className={styles.fa_eye}
        type="button"
        onClick={() => {
          setIspassword(!ispassword);
        }}
      >
        {!ispassword ? (
          <i className="bi bi-eye-slash fs-5"></i>
        ) : (
          <i className="bi bi-eye fs-5"></i>
        )}
      </div>
      <ErrorMessage
        className={styles.error_txt}
        component="div"
        name={props.name}
      />
    </div>
  );
};

const Textareabox = (props) => {
  return (
    <div className="auth-inputbox">
      <Field
        as="textarea"
        className={`${styles.auth_input_box} form-control`}
        style={{ maxHeight: "200px" }}
        {...props}
      />
      <ErrorMessage
        className={styles.error_txt}
        component="div"
        name={props.name}
      />
    </div>
  );
};

const Date_Picker = ({ label, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  const formate = "DD/MM/YYYY";

  return (
    <div>
      <DatePicker
        {...field}
        {...props}
        value={field.value}
        minDate={moment().toDate()}
        onChange={(val) => {
          val !== null
            ? setFieldValue(field.name, val.format(formate))
            : setFieldValue(field.name, "");
        }}
        format={formate}
        plugins={[<DatePanel />]}
        style={{ backgroundColor: "#1d1f21", color: "#ffffff", height: "35px" }}
      />
      <ErrorMessage
        className={styles.error_txt}
        name={props.name}
        component="div"
      />
    </div>
  );
};

const Dropdownbox = ({ data, ...props }) => {
  const options = data.map((val) => ({
    value: val,
    label: val,
  }));
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  const styles_ = {
    control: (base, state) => ({
      ...base,
      background: "#1d1f21",
      borderColor: "#ffffff",
      "&:hover": {
        borderColor: state.isFocused ? "#ffffff" : "#ffffff",
      },
    }),
    menu: (base, state) => ({
      ...base,
      backgroundColor: "#2c2e30",
    }),
    option: (base, state) => ({
      ...base,
      background: "#2c2e30",
      "&:hover": {
        background: state.isFocused ? "#ff6600" : "",
      },
    }),
    valueContainer: (base, state) => ({
      ...base,
      color: "blue",
      background: "#1d1f21",
    }),
  };
  return (
    <>
      <Select
        defaultValue={[]}
        isMulti
        name={props.name}
        onChange={(val) => {
          val !== null
            ? setFieldValue(
                field.name,
                val.map((item) => item.value)
              )
            : setFieldValue(field.name, "");
        }}
        styles={styles_}
        options={options}
        {...props}
      />
    </>
  );
};

const Dropdownbox_single = ({ data, ...props }) => {
  const options = data.map((val) => ({
    value: val,
    label: val,
  }));
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  const styles_ = {
    control: (base, state) => ({
      ...base,
      background: "#1d1f21",
      borderColor: "#ffffff",
      "&:hover": {
        borderColor: state.isFocused ? "#ffffff" : "#ffffff",
      },
    }),
    menu: (base, state) => ({
      ...base,
      backgroundColor: "#2c2e30",
    }),
    option: (base, state) => ({
      ...base,
      background: "#2c2e30",
      "&:hover": {
        background: state.isFocused ? "#ff6600" : "",
      },
    }),
    valueContainer: (base, state) => ({
      ...base,
      color: "blue",
      background: "#1d1f21",
    }),
  };
  return (
    <>
      <Select
        defaultValue={[]}
        name={props.name}
        onChange={(val) => {
          val !== null
            ? setFieldValue(
                field.name,
                val.map((item) => item.value)
              )
            : setFieldValue(field.name, "");
        }}
        styles={styles_}
        options={options}
        {...props}
      />
    </>
  );
};

export {
  AuthInputbox,
  Authpasswordbox,
  Textareabox,
  Date_Picker,
  Dropdownbox,
  Dropdownbox_single,
};
