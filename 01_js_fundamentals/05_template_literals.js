const name = 'Jamal';
const age = 24;
const job = 'Web Developer';
const city = 'Lagos';

let html;

// without template strings(es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + ' </li>';

html = '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>' +
        '</ul>';


// with template strings (es6)

function hello(){
  return 'Hi';
}

html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2+2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>

`


document.body.innerHTML = html


// let principalValue = prompt('Enter Principal Value')
// let rateVlue = prompt('Enter Rate Value')
// let timeValue = prompt('Enter Time Value')

// let prtTotal = principalValue * rateValue * timeValue

// let simpleInterest = prtTotal 

// document.write(simpleInterest)

// let inittislAmount = 4000

// console.log(simpleInterest);