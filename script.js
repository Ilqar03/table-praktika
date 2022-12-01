const inpId = document.getElementById("Id")
const inpname = document.getElementById("name")
const inpsurname = document.getElementById("surname")
const btn = document.getElementById("btn")
const table = document.getElementById("table")
const tr=document.createElement("tr")
const th1=document.createElement("th")
th1.innerHTML="Id"
const th2=document.createElement("th")
th2.innerHTML="name"
const th3=document.createElement("th")
th3.innerHTML="surname"
tr.append(th1,th2,th3)
table.append(tr)




btn.addEventListener("click",function () {
    fetch("https://jsonplaceholder.typicode.com/users").then(ilqar=>ilqar.json()).then(aftandil=>aftandil.forEach(aftandil => {
        console.log(aftandil);
    const tr=document.createElement("tr")
    const td1=document.createElement("td")
    const td2=document.createElement("td")
    const td3=document.createElement("td")
    td1.innerHTML = aftandil.id
    td2.innerHTML = aftandil.name
    td3.innerHTML = aftandil.username
    tr.append(td1,td2,td3)
    table.append(tr)
}))

})

