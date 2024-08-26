import React, { useEffect, useState } from "react";

export const removeSpecialCharacterInPhone = (value:any) => {
  if (value) {
    return value
      .replace(/ /g, "")
      .replace(/-/g, "")
      .replace(/[\(\)']+/g, "");
  }
  return "";
};

const useForm = (callback: any, data: any) => {

  const [values, setValues] = useState({});
  const [profileStatus, setProfileStatus] = useState(false);
  useEffect(() => {
    if (Object.keys(data)?.length) {
      setValues(data);
    }
  }, [data]);
  const [errors, setErrors]: any = useState({});

  const validate = (event: any, name: any, value: any, regex?: any) => {
    const linkedin = new RegExp(/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)/gm);
    const instagram = new RegExp(/(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/gim);
    const website = new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    );
    const facebook = new RegExp(
      /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/
    );
    switch (name) {
      case "username":
        if (value.length <= 4) {


          setErrors({
            ...errors,
            username: "Username atleast have 5 letters",
          });
        } else {
         
          delete errors["username"];
          setErrors(errors);
        }
        break;

      case "emailId":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            emailId: "Please Enter Valid Email!",
          });
        } else {
          delete errors["emailId"];
          setErrors(errors);
        }
        break;

      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Please Enter Valid Email!",
          });
        } else {
          delete errors["email"];
          setErrors(errors);
        }
        break;

      case "firstName":
        if (!new RegExp(/^[a-zA-Z ]{2,30}$/).test(value)) {
          setErrors({
            ...errors,
            firstName: `Enter valid ${name}`,
          });
        } else {
          delete errors["firstName"];
          setErrors(errors);
        }
        break;
      case "aboutme":
        if (!new RegExp(/^[a-zA-Z ]{2,30}$/).test(value.trim())) {
          setErrors({
            ...errors,
            aboutme: `please enter valid details`,
          });
        } else {
          delete errors["aboutme"];
          setErrors(errors);
        }
        break;
      case "lastName":
        if (!new RegExp(/^[a-zA-Z ]{2,30}$/).test(value)) {
          setErrors({
            ...errors,
            lastName: `Enter valid ${name}`,
          });
        } else {
          delete errors["lastName"];
          setErrors(errors);
        }
        break;

      case "password":
        if (!new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)) {
          setErrors({
            ...errors,
            password: "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
          });
        } else {
          delete errors["password"];
          setErrors(errors);
        }

      case "phone": {
        let newValue = removeSpecialCharacterInPhone(value);
        if (!new RegExp(regex).test(newValue)) {
          setErrors({
            ...errors,
            phone: "Enter valid phone number",
          });
        } else {
          delete errors["phone"];
          setErrors(errors);
        }

        break;
      }

      case "phonenumber": {
        let newValue = removeSpecialCharacterInPhone(value);
        if (!new RegExp(regex).test(newValue)) {
          setErrors({
            ...errors,
            phonenumber: "Enter valid phone number",
          });
        } else {
          delete errors["phonenumber"];
          setErrors(errors);
        }

        break;
      }

      case "designation":
        if (!new RegExp(/^[a-zA-Z ]{2,30}$/).test(value.trim())) {
          setErrors({
            ...errors,
            designation: `Enter valid ${name}`,
          });
        } else {
          delete errors["designation"];
          setErrors(errors);
        }
        break;

      case "linkedin":
        if (!new RegExp(/https?:\/\//).test(value)) {
          setErrors({
            ...errors,
            linkedin: `Enter valid linkedin url`,
          });
        } else {
          delete errors["linkedin"];
          setErrors(errors);
        }
        break;

      case "facebook":
        if (!new RegExp(/https?:\/\//).test(value)) {
          setErrors({
            ...errors,
            facebook: `Enter valid facebook url`,
          });
        } else {
          delete errors["facebook"];
          setErrors(errors);
        }
        break;

      case "instagram":
        if (!new RegExp(/https?:\/\//).test(value)) {
          setErrors({
            ...errors,
            instagram: `Enter valid instagram url`,
          });
        } else {
          delete errors["instagram"];
          setErrors(errors);
        }
        break;

      case "website":
        if (!new RegExp(/https?:\/\//).test(value)) {
          setErrors({
            ...errors,
            website: `Enter valid website url`,
          });
        } else {
          delete errors["website"];
          setErrors(errors);
        }
        break;

      case "behance":
        if (!new RegExp(/^[a-zA-Z ]{2,30}$/).test(value)) {
          setErrors({
            ...errors,
            behance: `Enter valid behance`,
          });
        } else {
          delete errors["behance"];
          setErrors(errors);
        }
        break;

   
      case "firstName":
        if (!new RegExp(/^[a-zA-Z ]{2,30}$/).test(value)) {
          setErrors({
            ...errors,
            firstName: `Enter valid firstName`,
          });
        } else {
          delete errors["firstName"];
          setErrors(errors);
        }
        break;

      case "lastName":
        if (!new RegExp(/^[a-zA-Z ]{2,30}$/).test(value)) {
          setErrors({
            ...errors,
            lastName: `Enter valid lastName`,
          });
        } else {
          delete errors["lastName"];
          setErrors(errors);
        }
        break;

      case "address1":
        if (!new RegExp(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/).test(value)) {
          setErrors({
            ...errors,
            address1: `Enter valid address`,
          });
        } else {
          delete errors["address1"];
          setErrors(errors);
        }
        break;

   

      case "city":
        if (!new RegExp(/^[a-zA-Z ]{2,30}$/).test(value)) {
          setErrors({
            ...errors,
            city: `Enter city`,
          });
        } else {
          delete errors["city"];
          setErrors(errors);
        }
        break;

      case "pincode":
        if (!new RegExp(/^[0-9]*$/).test(value)) {
          setErrors({
            ...errors,
            pincode: `Enter valid pincode`,
          });
        } else {
          delete errors["pincode"];
          setErrors(errors);
        }
        break;

      default:
        break;
    }
  };

  //A method to handle form inputs
  const handleChange = (event: any, regex: any) => {
    //To stop default events
    event.persist();

    let name = event.target.name;
    let val = event.target.value;
    validate(event, name, val, regex);
 
    setValues({
      ...values,
      [name]: val,
    });
  };


  const handleChangeMyProfile = (event: any, regex: any) => {
    //To stop default events
    event.persist();

    let name = event.target.name;
    let val = event.target.value;
    if(val?.length==1 && val==" "){
      val=val.trim();
    }else if(val.includes("  ")){
      val=val.trim();
    }
    validate(event, name, val, regex);
    //Let's set these values in state

    setValues({
      ...values,
      [name]: val,
    });
    setProfileStatus(true);
  };
  const handleSubmit = (event: any) => {
    if (event) event.preventDefault();
    if (Object.keys(errors).length === 0) {
      callback();
    } else {
      console.log("There is an Error!");
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleChangeMyProfile,
    profileStatus,
  };
};

export default useForm;
