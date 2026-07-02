function IntersectArray(arr1,arr2)
{
    let result=[];
   for (let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i])){
            result.push(arr1[i]);
        }
    }
console.log(result)

}
let arr1=[12,15,23,48]
let arr2 = [15,9,27,48]
IntersectArray(arr1,arr2);