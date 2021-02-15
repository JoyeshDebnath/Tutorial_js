//Slice()  --> this method is used to create a duplicate copy of an array and pereform various operations 

//syntax>>  arr.slice()..creates a new copy of the whole array
// arr.slice(start_index,end_index)...creates a new copy of the array frm the specified index to  the given range 

const movies=['Captain America','Iron man','Spider Man'];

const copy=movies.slice();
console.log(copy);
console.log(movies.slice(1,2));