const numbers = document.querySelectorAll(".number")
console.log(numbers);

numbers.forEach(num =>{
    num.innerHTML = "0"

    function changeNum(){
        let value = +num.innerHTML
        let finalNum = num.getAttribute("data-num")
        let step = Math.ceil(+finalNum / 100)

        if(value < finalNum){
            value += step
            num.innerHTML = value
            setTimeout(changeNum, 1000)
        }
        else if(value >= finalNum){
            num.innerHTML = finalNum
        }
    }

    changeNum()
})