let myLeads = []
// let myLeads = `["www.awesome.com"]`;
// myLeads = JSON.parse(myLeads);
// myLeads.push("www.epiclead.com")
// myLeads = JSON.stringify(myLeads);
// console.log(typeof myLeads)
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
// localStorage.setItem("myLeads ", "www.eaxpleLead.com")
// console.log(localStorage.getItem("myLeads"))
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function () {
    // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // })

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // console.log(tabs[0].url);
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})


function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
        listItems += `<li>
                         <a target='_blank' href='${leads[i]}'>
                            ${leads[i]}
                         </a>
                      </li>`;
        //crete element
        //set text content
        //appemd to ul
        // const li = document.createElement("li")
        // li.textContent = myLeads[i];
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear();
    myLeads = []
    render(myLeads);
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    // console.log(myLeads);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);
})






























