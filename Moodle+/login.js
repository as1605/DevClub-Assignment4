console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector(".loginpanel"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;

let quest = login_text.split(' '); // Use split and array operations on the login_text string to extract the question
console.log(quest);
let ans=0;
if (quest[1+5]==='add'){
    ans=Number(quest[2+5])+Number(quest[4+5]);
}
if (quest[1+5]=='subtract'){
    ans=Number(quest[2+5])-Number(quest[4+5]);
}
if (quest[1+5]=='enter'){
    if (quest[2+5]=='second'){
        ans=quest[6+5];
    }
    if (quest[2+5]=='first'){
        ans=quest[4+5];
    }
}
console.log(ans);
 // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked

const captcha_input_element = document.querySelector("#valuepkg3"); // Fill the selector for the captcha input element in ""
captcha_input_element.value = ans;
document.getElementById("loginbtn").submit();
