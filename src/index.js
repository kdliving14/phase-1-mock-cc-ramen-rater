const url = "http://localhost:3000/ramens";

document.addEventListener("DOMContentLoaded", getRamen)

function getRamen()
{
    fetch(url)
    .then(res => res.json())
    .then(res => renderRamenPics(res))

    const form = document.getElementById('new-ramen');
    
    form.addEventListener('submit', (e) => 
    {
        e.preventDefault();

        const ramenObj = {};

        ramenObj.name = document.getElementById('new-name').value;
        ramenObj.restaurant = document.getElementById('new-restaurant').value;
        ramenObj.image = document.getElementById('new-image').value;
        ramenObj.rating = document.getElementById('new-rating').value;
        ramenObj.comment = document.getElementById('new-comment').value;

        displayRamen(ramenObj);
    })
    
}

function displayRamen(item)
{
    const image = document.createElement('img')
    image.src = item.image;
    
    document.querySelector("#ramen-menu").appendChild(image);
    
    image.addEventListener('click', () => 
    {
        document.querySelector(".detail-image").src = item.image;
        document.querySelector(".name").textContent = item.name;
        document.querySelector(".restaurant").textContent = item.restaurant;
        document.querySelector("#rating-display").textContent = item.rating;
        document.querySelector("#comment-display").textContent = item.comment;
    })
}

function renderRamenPics(ramen)
{
    ramen.forEach(item => 
    {
       displayRamen(item);
    });   
}





