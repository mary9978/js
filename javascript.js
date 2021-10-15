//find min and max in array and convert them to object
let arr = [11,56,9,18,60];
let max = arr.reduce(function(a, b) {
    return Math.max(a, b);
}, 0);
let min = arr.reduce(function(a, b) {
    return Math.min(a, b);
});
let output=[['max',max],['min',min]];
const obj = Object.fromEntries(output);
console.log("max and min of array :");
console.log(obj);
//show number and their occurence into object
let dataset = [2,2,4,2,6,4,7,8];
let max1=Math.max.apply(null,dataset);
let min1=Math.min.apply(null,dataset);
let counter=0;
let array=[];
for (let i=min1;i<max1;i++){
    counter=0;
   for (let j=0;j<dataset.length;j++){
       if (dataset[j] === i) counter++;
   }
   if (counter!==0)
      array.push([i,counter]);

}
const obj2 = Object.fromEntries(array);
console.log(obj2);
