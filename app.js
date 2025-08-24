
let btn=document.querySelectorAll(".btn")

let messages=[
    "çox zarafatcılsan",
    "çox ağıllısan",
    "çox anlayışlısan",
    "keçisən :)",
    "qısaca mükkəməllsəəən",
]
btn.forEach((element,index) => {
    element.addEventListener("click", ()=>{
        element.nextElementSibling.innerText=messages[index];
        element.nextElementSibling.style.color="darkslateblue"
        
    })
});