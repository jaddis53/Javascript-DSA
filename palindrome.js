// checks if the number is palindrome or not\
//n=131  true
//n=12   false

const isPalindrome=function(x){
    // console.log(+"10")
    
    return x === +x.toString().split("").reverse().join("")
}

const res =isPalindrome(121);
console.log(res)
