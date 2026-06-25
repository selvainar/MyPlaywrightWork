


function reverse(charArray) {
let revstr="";
    
    for (let i=charArray.length-1;i>=0;i--)
    {
        revstr=revstr+charArray[i];
    }
    return revstr
}

function isPalindrome(instr) {
    if(instr===reverse(instr))
        return true;
    else
        return false
}

const instr="madam";
const charArray = instr.split('');
let revstring=reverse(charArray)
console.log(revstring);
let result=isPalindrome(instr)
if(result==true)
    console.log(instr+" is a Palindrome");
else
    console.log(instr+" is not a Palindrome");
    
    