let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorgae = JSON.parse(localStorage.getItem("myLeads"))

const tabBtn = document.getElementById("tab-btn")


if (leadsFromLocalStorgae){
  myLeads = leadsFromLocalStorgae
  render(myLeads)
}

tabBtn.addEventListener("click", function(){
  //gtab the url
  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
  
  // })
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })
  //console.log(tabs[0].url)

})


function render(leads){
  let listItem = ""
  for (let i = 0; i<leads.length; i++){
    listItem += 
    `<li>
      <a target='_blank' href='${leads[i]}'> 
        ${leads[i]}
      </a>
    </li>`
  }
  ulEl.innerHTML = listItem
}

deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear()
  myLeads = []
  render(myLeads)

})


inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value)
  inputEl.value = ""
  //store in local storage
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
  
})

