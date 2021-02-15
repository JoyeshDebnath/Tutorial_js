//function within a function example  


const sum_up= (a,b,c,...numbers) =>{

    const validate_num= (number) => {
        return isNaN(number)?0:number;
    }

    let sum=0;

    for(const num of numbers)
    {
        sum+=validate_num(num);
    }
    return sum;
}

console.log("Sum is="+ sum_up(1,2,3,3,4,5,6,7,8,10));