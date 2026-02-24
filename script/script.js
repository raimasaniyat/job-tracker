let interviewList = [];
let rejectedList =[];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const allCardSection = document.getElementById('allCards');

// interviewList.push({name: 'hello'},{name: 'hello'});
const mainContainer = document.getElementById('button-parent');
console.log(mainContainer);

function calcCount(){
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calcCount()