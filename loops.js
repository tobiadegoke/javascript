/********************     For loop    *********************/

const arr1= [
    [1, 2], [3, 4], [5, 6]
  ];

//  Modify function multiplyAll so that it returns the product of all the numbers in 
//  the sub-arrays of arr.

function multiplyAll(arr1) {
    let product = 1;
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr1[i].length; j++){
            product *= arr1[i][j];
        }
    }
    return product;
  }
  
  multiplyAll(arr1);


/**********************  Do while loop   **********************/

const arr2 = [];
let j = 0;

do {
  arr2.push(j);
  j++;
} while (j < 5);
return arr2;


/****************   while loop   *****************/
const arr3 = [];
let k = 0;

while (k <= 10){
    arr3.push(k);
    k++;
}
return arr3;