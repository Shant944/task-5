let elements = [];
function getData(){
    fetch("http://localhost:3023/products")
    .then(res =>{
        if(!res.ok){
            throw new Error("network issue");

        }else{
            return res.json();
        }
    })
    .then( data =>{
        data.forEach(element => {
            elements.push(element);
        });
    })
    .catch( (e)=>{
        console.log(e);
    })
}
getData();

console.log(elements);