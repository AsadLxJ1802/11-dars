const elQuizBox = document.querySelector(".quizBox")
const elQuiztionNum = document.querySelector(".queztionNum"),
    elScoreText = document.querySelector(".score"),
    elQuestionText = document.querySelector(".questiontext"),
    elQuestionList = document.querySelector(".list-group"),
    elNextBtn = document.querySelector(".nextBtn"),
    elResulBox = document.querySelector(".resultBox"),
    elFinalScore = document.querySelector(".finalscore"),
    elResultText = document.querySelector(".resultText")



let questions =[]
let currentIndex = 0
let score = 0

async function getAllQuestin() {
    const {data: res} = await axios.get("http://localhost:1802/questions")
    questions = res     
    showQuestion()  
}

const showQuestion = function () {
    const question = questions[currentIndex]

    elQuestionText.textContent = question.question
    elQuestionList.textContent = ''
    elScoreText.textContent = score
    question.options.forEach((el,idx)=>{
        let li = document.createElement("li")
        li.className = "list-group-item list-group-item-action"
        li.textContent = el
        li.onclick = () => setAnwer(li,idx)
            
        elQuestionList.appendChild(li)
    })
    
}

function setAnwer(el,idx) {
    const correctIndex = questions[currentIndex].correctAnswer    
    console.log(el);
    if (elQuestionList) {
        [...elQuestionList.children].forEach(li => li.onclick = null)

    }

    if (idx === correctIndex) {
        el.classList.add('list-group-item-success')
        score += questions[correctIndex].points
    }else{
        el.classList.add('list-group-item-danger')
        elQuestionList.children[correctIndex].classList.add('list-group-item-success')
    }
    elNextBtn.classList.remove('d-none')
}

elNextBtn.onclick = () => {
    currentIndex++
    if (currentIndex < questions.length) {
        showQuestion()        
    }else{
        showResult()
    }

}

function showResult() {
    elResulBox.classList.remove('d-none')
    elQuizBox.classList.add('d-none')
    elFinalScore.textContent =`
        Soce ${score}/${questions.reduce((accum,curItem) => accum + curItem?.points, 0)}
    `
}

getAllQuestin()