const input = document.querySelector("input");
const botonmas = document.querySelector(".btn-add")
const ul = document.querySelector("ul")
const resultados = document.querySelector(".resultados")
 
botonmas.addEventListener("click",function(e){
    e.preventDefault()
    const valor = input.value
    const li = document.createElement("li")
    const p = document.createElement("p")
    p.textContent = valor
    li.appendChild(p)
    li.appendChild(añadirBoton())
    ul.appendChild(li)
})
function añadirBoton(){
    const borrar = document.createElement("button")
    borrar.textContent = "X"
    borrar.className = "btn-delete"

    borrar.addEventListener("click",function (e){
        const padre = e.target.parentElement;
        ul.removeChild(padre)

    })
    return borrar
}