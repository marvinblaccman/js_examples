let deMo = document.getElementById("demo")
let saVel = document.getElementById("savel");
let count = 0;

function increment(){
    count += 1
    deMo.textContent = count
}
increment()

function save() {
    let vars = count + "- "
    saVel.textContent += vars
    deMo.textContent = 0
    count = 0
}
save()




