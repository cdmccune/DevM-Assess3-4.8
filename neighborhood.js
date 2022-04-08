
const restaurants = [`South Hill Grill`, `Slick Rock Burrito`, `Hogans`]

document.getElementById(`rec`).addEventListener('click', ()=>{
    alert(`You should go to ${restaurants[Math.floor(Math.random()*3)]}!`)
})