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
    console.log(selected);

    selected.classList.remove('bg-white', 'text-[#64748B]');
    selected.classList.add('bg-[#3B82F6]', 'text-white');
}

mainContainer.addEventListener('click', function(event){
    console.log(event.target);
})