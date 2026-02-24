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
const filteredSection = document.getElementById('filtered-section');

function calcCount(){
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
// console.log(total);
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

    if(id == 'interviewBtn'){
        allCardSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
    }
    else if(id == 'allBtn'){
        allCardSection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    }
}

mainContainer.addEventListener('click', function(event){
    
    if(event.target.classList.contains('interview-btn')){
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
    addInterview()
    }
})

function addInterview(){
    filteredSection.innerHTML = ''

    for(let interview of interviewList){
        let div = document.createElement('div');

        div.className = 'card-item bg-white px-5 py-4 rounded-md'
        div.innerHTML =`
        <div class="card-inner flex justify-between">
                            <div class="card-main">
                                <h4 class="card-title">${interview.cardTitle}</h4>
                                <p class="job-title text-[#64748B]">${interview.jobTitle}</p>
                                <p class="specification my-2.5 text-[#64748B]">${interview.speciFication}</p>
                                <p class="not-applied-box bg-[#EEF4FF] w-[120px] text-center p-2">Not Applied</p>
                                <p class="build-para py-2 text-[#64748B]">${interview.buildPara}</p>

                                <div class="indicator flex gap-2">
                                    <button class="interview-btn px-4 py-2 text-[#10B981] border border-[#10B981] rounded-md">interview</button>
                                    <button class="rejected-btn px-4 py-2 text-[#EF4444] border border-[#EF4444] rounded-md">Rejected</button>
                                </div>
                            </div>
                            <div class="card-delete">
                                <a class="cardDelete text-[#64748B]" href="#"><i class="fa-regular fa-trash-can"></i></a>
                            </div>
                        </div>
        `
        console.log(div);
        filteredSection.appendChild(div);
    }
    
}
