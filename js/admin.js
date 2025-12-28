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
    hideAll()
    function renderAdmin(li) {
        li.innerHTML = null
        const elItem = document.createElement("li")
        elItem.textContent = `
            Lorem ipsum  molestias error necessitatibus ut praesentium ipsam quaerat numquam esse doloribus nam eaque! Saepe.
        `
        elItem.className = "list-unstyled"
        li.appendChild(elItem)
    }
    
    renderAdmin(eltextContent)
}
// Admin part end

function renderQuestion(arr, list) {
    list.innerHTML = null;
    arr.forEach(item => {
      const elItem = document.createElement("li")
      elItem.className = "list-unstyled";
      elItem.innerHTML = `
      <div class="p-3 list-unstyled border border-2">
        <h3 border>${item.question}</h3>
        <div>
            <p>${item.options[0]}</p>
            <p>${item.options[1]}</p>
            <p>${item.options[2]}</p>
            <p>${item.options[3]}</p>
        </div>
      </div>
      `
      list.appendChild(elItem);
    });
  }
  function hendleQuestionsBtn() {
    hideAll()
      async function getAllCatagoriya() {
          const { data: res } = await axios.get("http://localhost:1802/questions")
          renderQuestion(res, eltextQuestion);    
      }
      getAllCatagoriya();
  }







