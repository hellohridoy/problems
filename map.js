const array = [1,2,3,4,5];

var answer = 0;

array.map(ele =>{
    answer = answer + ele;
});
console.log(answer);


array.map(ele =>{
    if(ele%2==!0){
        console.log(ele);
    }
});