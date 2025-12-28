const eltextContent = document.querySelector(".text-content");
const eltextQuestion = document.querySelector(".text-question");


function hideAll() {
    eltextContent.innerHTML = "";
    eltextQuestion.innerHTML = "";
  }



// Catogoriya render part start
function renderCatagoriya(arr, list) {
  list.innerHTML = "";
  arr.forEach(item => {
    const elItem = document.createElement("li");
    elItem.className = "list-group-item";
    elItem.textContent = item.name;
    list.appendChild(elItem);
  });
}
function hendleCatagoriyaBtn() {
    eltextQuestion.classList.remove("border")

    hideAll()
    async function getAllCatagoriya() {
        const { data: res } = await axios.get("http://localhost:1802/categories");
        renderCatagoriya(res, eltextContent);    
    }
    getAllCatagoriya();
}
// Catogoriya render part end


// Admin part start
function hendleadminBtn() {
    eltextQuestion.classList.remove("border")
    hideAll()
    function renderAdmin(li) {
        li.innerHTML = null
        const elItem = document.createElement("li")
        elItem.textContent = `
            Lorem ipsum  molestias error necessitatibus ut praesentium ipsam quaerat numquam esse doloribus nam eaque! Saepe.
        `
        li.appendChild(elItem)
    }
    
    renderAdmin(eltextContent)
}
// Admin part end

// 
function renderQuestion(arr, list) {
    list.innerHTML = null;
    arr.forEach(item => {
      const elItem = document.createElement("li");
      elItem.innerHTML = `
        <li>${item.question}</li>
        <li>${item.options[0]}</li>
        <li>${item.options[1]}</li>
        <li>${item.options[2]}</li>
        <li>${item.options[3]}</li>
      `
      list.appendChild(elItem);
    });
  }
  function hendleQuestionsBtn() {
    eltextQuestion.classList.add("border")
    hideAll()
      async function getAllCatagoriya() {
          const { data: res } = await axios.get("http://localhost:1802/questions")
          renderQuestion(res, eltextQuestion);    
      }
      getAllCatagoriya();
  }







