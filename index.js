const table= document.querySelector("body");
const cont= document.getElementsByClassName("container");
const tr= document.getElementsByClassName("table table-striped");
 console.log(tr)

 const tables= (Id,Image,Category,Description,Price,Delete )=>{
    const table=`<table class=" table-striped">
    <thead>
      <tr>
        <th>Id</th>
        <th>Image</th>
        <th>Category</th>
        <th>Description</th>
        <th>Price</th>
        <th>Delete</th>
        
       
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${Id}</td>
        <td>${Image}</td>
        <td>${Category}</td>
        <td>${Description}</td>
        <td>${Price}</td>
        <td>${Delete}</td>
      </tr>`
    
    

      part.innerHTML+=table;
}

const dany= fetch("https://fakestoreapi.com/products")

  .then(dany=>dany.json())
  .then(table=>{console.log(table)

    console.log(dany)
 dany.map(item=>{
    tables(item.Id,item.Image,item.Category,item.Description,item.Price,item.Delete)
 })
})