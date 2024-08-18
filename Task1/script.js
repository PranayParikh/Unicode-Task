const URL = "https://fakestoreapi.com/products";
const title1 = document.getElementById("title1");
const pic1 = document.getElementById("pic1");
const id1 = document.getElementById("id1");
const desc1 = document.getElementById("desc1");
const price1 = document.getElementById("price1");

function getData(){
    fetch(URL)
    .then((response)=> {
        return response.json();
    })
    .then((data)=>{
        return data
    });
}

/*
for(let i = 0;i<8;i++){
    function getAllProduct(){
        fetch(URL)
        .then((response)=> {
            return response.json();
        })
        .then((data)=>{
            title1.textContent = data[i].title;
            pic1.setAttribute('src',data[i].image);
            id1.textContent = data[i].id;
            desc1.textContent = data[i].description;
            price1.textContent = data[i].price;
        });
    }
}
*/