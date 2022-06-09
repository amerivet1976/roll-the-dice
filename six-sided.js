let dice = Math.random()*6

let floor = Math.floor(dice);
let ceil = Math.ceil(dice)

if (floor<5 && floor >0){
console.log(floor);
}else{
    console.log(ceil)
}