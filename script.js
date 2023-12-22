var inputBox = document.getElementById("input-box");
var lists = document.getElementById("list-container");

inputBox.addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        event.preventDefault();
        document.getElementById("add-task").click();
    }
}); // This will click on button when Enter button is clicked.


function add_task(){
    if(inputBox.value == ''){
        alert("Add some text");
    }
    else{
        var task = document.createElement("li");
        task.innerHTML = inputBox.value;
        lists.appendChild(task);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        task.appendChild(span);
    }
    inputBox.value = '';
    save_data();
}  // Add task to your list

lists.addEventListener("click" , function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        save_data();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        save_data();
    }
}, false); // on clicking on task or cross button , this will make changes.

function save_data(){
    localStorage.setItem("data", lists.innerHTML);
} // used to save data in localstorage

function show_list(){
    lists.innerHTML = localStorage.getItem("data");
} // used to show data when browser is refreshed or opened once more

show_list();