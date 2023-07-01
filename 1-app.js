// const amount =1;
// if(amount<10){
//     console.log('small number');
// }
// else{
//     console.log('large number');
// }

// console.log(`first node!!`); 


// ******GLOBALS
// console.log(__dirname); 
// setInterval(()=>{
//     console.log("say hello");
// },1000)

//************ MODULES- Encapsulated code(only share minimum)

const sayhi=(name)=>{
    console.log(`hello ${name}`)
}
module.exports=sayhi

