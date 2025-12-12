let sum = 0
for (let i=2;i<=1000; i=i+2) 
{
     //if(i%5==0)
    // sum=sum+i
     if(i%5==0)
        continue//skip following statment
    sum=sum+i
}
document.writeln("<h2>sum is",sum)
    

