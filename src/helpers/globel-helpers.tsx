// export const minToHours = (n: number) => {
//     var num = n;
//     var hours = num / 60;
//     var rhours = Math.floor(hours);
//     var Totalhours = rhours > 0 ? rhours + " hrs " : null;
//     var minutes = (hours - rhours) * 60;
//     var rminutes = Math.round(minutes);
//     return Totalhours + rminutes + " mins";
//   };
  
  export const convertHMS = (value:any) => {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours: any = Math.floor(sec / 3600); // get hours
    let minutes: any = Math.floor((sec - hours * 3600) / 60); // get minutes
    let seconds: any = sec - hours * 3600 - minutes * 60; //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds; // Return is HH : MM : SS
  };
  
  export const convertToUTCFormat = () => {
    let date = new Date();
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Month is 0-based
    const day = String(date.getUTCDate()).padStart(2, "0");
  
    const hour = String(date.getUTCHours()).padStart(2, "0");
    const minute = String(date.getUTCMinutes()).padStart(2, "0");
    const second = String(date.getUTCSeconds()).padStart(2, "0");
  
    const strDate = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    return strDate;
  };
  
  export const getDifferenceBetweenTime = (date1 :any, date2:any) => {
    let d = new Date();
    let gmtHours = -d.getTimezoneOffset() * 60;
    if (date1 && date2) {
      let diff = Math.abs((date1.getTime() - date2.getTime()) / 1000);
      return diff + gmtHours;
    }
    return 86400;
  };
  
  export const numberWithCommas = (x: any) => {
    if (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return 0;
  };
  
  export const convertToCapitalized = (str: string) => {
    if (str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    return "";
  };
  
  export const convertToLowerCase = (str: string) => {
    if (str) {
      return str?.toLowerCase().trim();
    }
    return "";
  };
  
  export const convertToLowerCaseWithReplaceHyphen = (str: string) => {
    if (str) {
      return str?.toLowerCase().trim().replace(/ /g, "-");
    }
    return "";
  };
  
  export const convertToUpperCase = (str: string) => {
    if (str) {
      return str?.toUpperCase().trim();
    }
    return "";
  };
  
  export const removeSpecialCharacterInPhone = (value:any) => {
    if (value) {
      // return value.replace(/\D/g, "");
      //return value.replace(/ /g, "").replace(/-/g, "");
      return value
        .replace(/ /g, "")
        .replace(/-/g, "")
        .replace(/[\(\)']+/g, "");
    }
    return "";
  };
  
  export const convertToRoman = (num: number) => {
    var roman: any = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    var str = "";
  
    for (let i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }
    return str;
  };
  
  export const getAlphabeticalOrder = (list: any, key: string) => {
    if (list && list.length) {
      list.sort((a: any, b: any) => {
        if (convertToLowerCase(a[key]) < convertToLowerCase(b[key])) {
          return -1;
        }
        if (convertToLowerCase(a[key]) > convertToLowerCase(b[key])) {
          return 1;
        }
        return 0;
      });
    }
    return list;
  };