var input  = document.getElementById("input")
var button = document.getElementById("button")
var list = document.getElementById("todolist")

let storage = []
button.onclick = click;

function click(){
storage.push(input.value)
console.log(storage)
input.value = ""
showtodos()
}

function showtodos(){
todolist.innerHTML=""
storage.forEach(function(todo,index){
    todolist.innerHTML +=
   `<li>
        ${todo}
        <a onclick=editHandle(${index})>EditTodo</a>+
        <a onclick=deleteHandle(${index})>&times</a>+
    </li>`
})

}

function editHandle(index){
    let newvalue= prompt("Enter New Todo")
    if(newvalue.length > 0)
    storage.splice(index,1,newvalue)
    showtodos()
}

function deleteHandle(index){
    storage.splice(index, 1)
    showtodos()
}

// when we use for each it iterates through each element but does not store it.

// when we use map it also itereates through each element but stores it in a new array.