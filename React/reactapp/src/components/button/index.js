import styles from "./button.module.css";

const PrimaryBtn = (props) => {
  return (
    <div className="pt-4">
      <input
        className={`${styles.auth_btn} btn`}
        style={{ width: "100%" }}
        type="submit"
        {...props}
      />
    </div>
  );
};

export { PrimaryBtn };
