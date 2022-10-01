/* 
1. variable value not assigned 
2.function but didn't return anything 
3. just wrote return but did't return anything 
4. parameter that isn't passed 
*/

let first
console.log(first);

function second(x, y) {
    const sum = x + y;
}

const result = second(4, 5);
console.log(result);


function add(a, b) {
    const sum = a + b;
    return;
    if (b < 10) {
        return
    }
    const fun = a * b;
    return sum;
}

const fourth = add(2, 5);
console.log(fourth)


function double(a, b) {
    const result = a * 2;
    console.log(b);
    return result;
}



