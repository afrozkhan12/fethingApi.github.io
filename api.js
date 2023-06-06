fetch('https://fakestoreapi.com/products').then((data) =>{
    // console.log(data);
    return data.json();
}).then((finaldata) => {
    // console.log(finaldata[2].id);
    // console.log(finaldata[2].title);
    // console.log(finaldata[2].price);
    // console.log(finaldata);
    let data1 ="";
    finaldata.map((value) => {
        data1= data1 + ` <div class="card">
        <h1 class="title">${value.title}</h1>
        <img src="${value.image}" alt="img" class="images">
        <p class="description">${value.description}</p>
        <div class="category">Category: ${value.category}</div>
        <div class="price"> Price:${value.price}</div>
    </div>`;
    });

    document.getElementById("cards").innerHTML= data1;
   
}).catch((err) =>{
    console.log(err);
})