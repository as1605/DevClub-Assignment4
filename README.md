# Tasks

## Task 1: Moodle+

You must have used moodle in your first semester, and observed it required you to solve a simple math question as a CAPTCHA.

Now, build a chrome extension which will solve this question automatically!

Head over to the [Moodle+](/Moodle+) folder for instructions

## Task 2: Wordle+

The current implementation of [Wordle](https://www.nytimes.com/games/wordle/index.html) is based completely on the front-end javascript code, so it is possible to find the answer by looking at the main javascript file of that page. Try doing this yourself!

This is not a secure way, so we are going to make a simple API, where the user can only make requests to our server with the guess, and the server returns the feedback response. This way, the user will not be able to directly hack the secret answer out of the program

Head over to the [Wordle+](/Wordle+) folder for instructions

## Task 3: Covid Stats

It has been almost 2 years since the pandemic started, and you must have been regularly checking data of how many covid cases happened today and in the last few days. There are large datasets available on this, and many APIs have been developed with which you can easily fetch this data for your own analysis. 

One such repository is by [John Hopkins University](https://github.com/CSSEGISandData/COVID-19), and there are some helper APIs like [covid19api.com](https://covid19api.com/) which make it convenient to fetch data from it. See the [documentation](https://documenter.getpostman.com/view/10808728/SzS8rjbc) and select Javascript in the language, and instead of `console.log`, save the response string in a variable and then parse it using `JSON.parse`

### TODO
* Your task is to fetch this data and then visualise it using [ChartJS](https://www.chartjs.org/) library. Work in the boilerplate [`index.html`](index.html) and [`script.js`](script.js) files.
* You can also use your HTML/CSS designs from [DevClub-Assignment1](https://github.com/as1605/DevClub-Assignment1) in this assignment to make your page look nice, and host it using GitHub Pages. You can even use the frameworks which were allowed in the `bonus` task
* Your webpage should atleast show a basic summary of total cases and cases today Globally and in India
* Draw the chart of last 30 days cases in India

### Bonus
You can think of more useful data points to display, and also try to give more controls in the chart, allowing the user to select the number of days they want to see, and maybe even select the location to global, or country-wise or state-wise. Feel free to show your creativity in this


# Submission Instructions

* **FORK** this repository, by clicking the "Fork" button on top right
* For Task 1, edit the code in the [Moodle+](/Moodle+/) folder, and after successfully setting it up, take a screenshot or a short video showing the functioning of your extension, and include it in the [README](/Moodle+/README.md)
* For Task 2, edit the code in the [Wordle+](/Wordle+/) folder, and include a screenshot of the request and response in the [README](/Wordle+/README.md). If you deployed your API to heroku, include the link in the README too!
* For Task 3, edit the code in [`index.html`](index.html) and [`script.js`](script.js) files. Deploy your page using GitHub Pages
* When you are done, fill this [Google Form](https://forms.gle/HxARCuEAaUdc5HsL8) to submit finally

# Resources

* [Mozilla Docs for JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [JavaScript Basics](https://youtu.be/W6NZfCO5SIk)
* [Objects in JavaScript](https://youtu.be/PFmuCDHHpwk)
* [ES6 (Modern JavaScript Features)](https://youtu.be/NCwa_xi0Uuc)
* [Functional Programming in JavaScript](https://youtu.be/e-5obm1G_FY)
* [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/)
* [node http](https://youtu.be/aTThXMRxmiE)
* [fetch](https://youtu.be/Vj7W8pI-L6w)
* [Postman Docs for APIs](https://learning.postman.com/docs/getting-started/introduction/)
* [ChartJS Docs](https://www.chartjs.org/docs/latest/) (We are using the CDN option)
* [ngrok Docs](https://ngrok.com/docs)
* [GitHub Markdown Docs](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
