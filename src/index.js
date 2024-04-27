import "./style.css"
import getHome from "./home"
import getAbout from "./about";
import getContact from "./contact";

const content = document.querySelector("#content")

const nav_items=document.querySelectorAll(".nav-item");

const home_btn = document.querySelector("#home");
const about_btn = document.querySelector("#about");
const contact_btn = document.querySelector("#contact");


content.appendChild(getHome())
home_btn.classList.add("selected-btn")

nav_items.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        const current = document.querySelector(".selected-btn");
        if(current){
            current.classList.remove("selected-btn");
        }
        e.target.classList.add("selected-btn")
    })
})


home_btn.addEventListener("click",(e)=>{
        content.innerHTML = ""
        content.appendChild(getHome())
})


about_btn.addEventListener("click",(e)=>{
    content.innerHTML = ""
    content.appendChild(getAbout())
})


contact_btn.addEventListener("click",(e)=>{
    content.innerHTML = ""
    content.appendChild(getContact())
})