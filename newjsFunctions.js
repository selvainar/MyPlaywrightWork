function userProfile(Ename)
{
    console.log("Hello "+Ename + "!")
}
userProfile("Selva")
const double =(a) => 2*a
console.log(double(4))
// setTimeout(function() {
//    console.log("This message is delayed by 2 seconds")
// },2000)
function getUserData(x)
{
  setTimeout(function() {
   console.log("This message is delayed by 2 seconds")
   x()
},2000)
 

}
function callbackfunction()
{
    console.log("Call back function")
}
getUserData(callbackfunction)