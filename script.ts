// node script.ts multiply


import {multiply} from "./src/multiply";

if (process.argv[2] === "multiply") {
   multiply(1);
} else {
  console.log("引数エラー");
}
