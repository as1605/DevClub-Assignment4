console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector(""); // Fill the selector for the login element in ""
let login_text = login_element.innerText;

let question = ""; // Use split and array operations on the login_text string to extract the question

let answer = ""; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked

const captcha_input_element = document.querySelector(""); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;
