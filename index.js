
//fibonacci
// 0,1,1,2,3,5,8,13,21,34,55,89

function nfibonacci(n){
    
    if(n === 0) return 0;
    if(n === 1) return 1;
    
    return nfibonacci(n - 1) + nfibonacci(n - 2);
}

console.log(nfibonacci(9))
