
import { useEffect } from "react";
import { convertToCapitalized } from "../helpers/globel-helpers";

export const useValidateLogin = (formData: any) => {
  let errorObj: any = {};

  useEffect(() => {
    Object.entries(formData).forEach(([key, value]: any) => {
      let errorLabel = convertToCapitalized(key);
      if (!value) {
        errorObj[key] = `Please Enter Valid ${errorLabel}`;
      }

      if (value && key === "emailId" || key === "email") {
        let emailRegex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!value.match(emailRegex)) {
          errorObj[key] = `Please Enter Valid Email id !`;
        }
      }

      if (value && key === "password") {
        if (value.length < 8) {
          errorObj[key] = `Password must be at least 8 characters long`;
        }
      }
    });
  }, [{ ...formData }]);

  return { errorObj };
};

