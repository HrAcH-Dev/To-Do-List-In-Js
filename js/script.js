let input = document.querySelector("#inp");
let btn = document.querySelector("#btn");
let ul = document.querySelector("#ul-box");
let deletebox = document.querySelector(".delete-box"); 
let ulContainer = document.querySelector(".ul_container")

btn.addEventListener("click", function(event){
    event.preventDefault();
    let inp = input.value;
    if(inp.trim() === ""){
        input.classList.toggle("error")
    }else if(check(inp)){
        input.classList.toggle("error");
    }else{
        input.classList.remove("error")
        addElem("li",inp)
        input.value = "";
    }
})

function addElem(tagname,content){
    let tag = document.createElement(tagname);
    tag.textContent = content;
    ul.append(tag);
    let btn = document.createElement("button");
    btn.innerHTML = "delete"; 
    deletebox.append(btn);
    btn.addEventListener("click", function(e){
        tag.remove();
        btn.remove();
    })
}

function check(value){
    let answer = false;
    let list = document.querySelectorAll("#ul-box>li");
    answer = Array.from(list).some(elem => elem.textContent.toLowerCase() === value.toLowerCase())
    return answer;
}
