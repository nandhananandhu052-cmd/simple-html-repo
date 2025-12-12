let marks = [34, 56, 70, 18, 25];
console.log("complete array", marks);
console.log("type:", typeof(marks));
// access using index
console.log("1st ele", marks[0]);
console.log("last ele", marks[marks.length - 1]);
// update
marks[0] = 44;
console.log("updated array", marks);
// add
marks.push(77);  // add at last
console.log("array after addition", marks);
// delete last element
marks.pop();
console.log("array after deletion", marks);
// iterate array
marks=[34,56,70,18,25]
for (let i = 0; i < marks.length; i++)
{
    console.log(marks[i]);
}
for(let ele of marks)
{
    console.log(ele);
}
//find largest value in marks array
let largest=marks[0];
for(let i=1;i<marks.length;i++)
{
    if mark[i]>largest){
    largest=marks[i];
    }
}
console.log("initial largest:",largest);



