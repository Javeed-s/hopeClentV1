
import { useEffect } from "react";
import { convertToCapitalized } from "../helpers/globel-helpers";
export const useValidate = (formData: any) => {
  let errorObj: any = {};
  useEffect(() => {
    Object.entries(formData).map(([key, value]: any,index:any) => {
      let errorLabel = convertToCapitalized(key);
      if (key == "address2") {
        return;
      }
      if (!value) {
        errorObj[key] = `Please Enter ${errorLabel}!`;
      }
      if (value && key === "city") {
        if (!value.trim()) {
          errorObj[key] = `Please Enter Valid ${errorLabel}`;
        }
      }
      if (value && key === "pincode") {
        if (!value.trim()) {
          errorObj[key] = `Please Enter Valid ${errorLabel}`;
        }
      }
      if (value && (key === "emailId" || key === "email")) {
        let emailRegex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!value.match(emailRegex)) {
          errorObj[key] = `Please Enter Valid Email!`;
        }
      }
      if (value && key == "password") {
        if (value.length < 8) {
          errorObj[key] = `${errorLabel} Length must be greater than or equal to 8 characters!`;
        }
        if (value.length > 128) {
          errorObj[key] = `${errorLabel} Length must be less than 128 characters!`;
        }
      }
      if (value && key === "firstName") {
        let firstName = /^[a-zA-Z ]{1,30}$/;

        if (!value.match(firstName)) {
          errorObj[key] = `Please Enter Valid ${errorLabel}`;
        }
      }
      if (value && key === "lastName") {
        let lastName = /^[a-zA-Z ]{1,30}$/;

        if (!value.match(lastName)) {
          errorObj[key] = `Please Enter Valid ${errorLabel}`;
        }
      }
      // if (value && key === "phone") {
      //   let phone = /^[a-zA-Z ]{2,30}$/;

      //   if (!value.match(phone)) {
      //     errorObj[key] = `Please Enter Valid ${errorLabel}`;
      //   }
      // }
    });
  }, [{ ...formData }]);

  return { errorObj };
};
