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
let dataset = [2, 2, 4, 2, 6, 4, 7, 8];
let counts = {}, i, value,count1;
for (i = 0; i < dataset.length; i++) {
    value = dataset[i];
    if (typeof counts[value] === "undefined") {
        counts[value] = 1;
    } else {
            count1 = dataset.reduce(function(n, val) {
            return   n + (val === value) ;
    }, 0);
            counts[value]=count1;
    }
}
console.log(counts);
