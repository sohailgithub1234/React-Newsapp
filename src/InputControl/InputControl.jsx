import React from "react";

import styles from "./InputControl.module.css";

const InputControl = (props) => {
  const { label, ...inputProps } = props;
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input type="text" {...inputProps} />
    </div>
  );
}

export default InputControl;