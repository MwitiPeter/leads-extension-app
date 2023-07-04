let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderleads()
})


function renderleads() {
    let listItems = ""
    for (i = 0; i < myLeads.length; i++) {
        listItems +=
            `
    <li>
    <a target='_blank' href='${myLeads[i]}'>
    ${myLeads[i]}
    </a>
    </li>
    `

        ulEl.innerHTML = listItems    
    }
}