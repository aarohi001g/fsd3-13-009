const products=[
    {id:1, name:'marker', qty:10, price:100},
    {id:2, name:'pen', qty:20, price:200},
    {id:3, name:'pencil', qty:30, price:300}
]

let nextID= 3;

export const getAllProducts=()=>{
 return products;
};

export const addProduct=(item)=>{

    item.id=nextId;
     nextID++;
    products.push(item);
    return item;
};