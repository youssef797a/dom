let plusButtons = document.getElementsByClassName("fa-plus")
console.log(plusButtons);
let quantity = document.getElementsByClassName("quantity")
for (let i=0; i<plusButtons.length; i++){
    plusButtons[i].addEventListener("click", function(){
        quantity[i].innerHTML++
        sum()
    })
    
}
let minusButtons = document.getElementsByClassName("fa-minus")
for (let i=0; i<minusButtons.length; i++){
    minusButtons[i].addEventListener("click", function(){
        quantity[i].innerHTML--
        while(minusButtons[i].previousElementSibling.innerHTML >0) {
            minusButtons[i].previousElementSibling.innerHTML-= 1
        }
        Sum()

    })
    
}
function sum() {
    let quantity = document.getElementsByClassName("quantity")
    let price = document.getElementsByClassName("price")
    
    let sum = 0

    for(let i=0; i<price.length; i++){
        sum = sum + (quantity[i].innerHTML * price[i].innerHTML)
    }
    console.log(sum);
    document.getElementById("total").innerHTML = "total: $"+sum
}
sum()
let trashButtons = document.getElementsByClassName("fa-trash")
    for (const trash of trashButtons){
    trash.addEventListener("click", function(){
        trash.closest(".card").remove()
    })
}
let heartButtons = Array.from(document.getElementsByClassName("fa-heart"))

for (const heart of heartButtons) {
    heart.addEventListener("click", function(){
        //heart.classList.toggle("red")
        if(heart.classList.contains("red")){
        heart.classList.remove("red")
        }else{
            heart.classList.add("red")
        }

    })

}