let interviewList = [];
let rejectedList =[];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const allCardSection = document.getElementById('allCards');

const allFilterBtn = document.getElementById('allBtn');
const interviewFilterBtn = document.getElementById('interviewBtn');
const rejectedFilterBtn = document.getElementById('rejectedBtn');

const mainContainer = document.getElementById('button-parent');

function calcCount(){
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calcCount()

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    allFilterBtn.classList.add('bg-white', 'text-[#64748B]');
    interviewFilterBtn.classList.add('bg-white', 'text-[#64748B]');
    rejectedFilterBtn.classList.add('bg-white', 'text-[#64748B]');

    const selected = document.getElementById(id);
    // console.log(selected);

    selected.classList.remove('bg-white', 'text-[#64748B]');
    selected.classList.add('bg-[#3B82F6]', 'text-white');
}

mainContainer.addEventListener('click', function(event){
    const parNode = event.target.parentNode.parentNode

    const cardTitle = parNode.querySelector('.card-title').innerText;
    const jobTitle = parNode.querySelector('.job-title').innerText;
    const speciFication = parNode.querySelector('.specification').innerText;
    const notAppliedBox = parNode.querySelector('.not-applied-box').innerText;
    const buildPara = parNode.querySelector('.build-para').innerText;

    const cardInfo = {
        cardTitle, 
        jobTitle, 
        speciFication, 
        notAppliedBox, 
        buildPara
    }
    
    const jobExist = interviewList.find(item => item.cardTitle == cardInfo.cardTitle)
    if(!jobExist){
        interviewList.push(cardInfo);
    }
    console.log(interviewList);
})