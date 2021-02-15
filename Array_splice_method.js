//the splice() method helps us to insert an item in the desired location in an array 

//Syntax:  array_var.splice(start_index,no of items need to be deleted,insert elements )

//ex:arr.splice(1,0,item1,item2...)

const sports=['cricket','soccer','basketball'];

sports.splice(1,0,'baseball','swimming','hockey');
console.log(sports);
//[ 'cricket', 'baseball', 'swimming', 'hockey', 'soccer', 'basketball' ]

const deleted_sports=sports.splice(2,2);//splice(start_index,no of items to be deleted)

console.log(deleted_sports);//[ 'swimming', 'hockey' ]
console.log(sports);
//[ 'cricket', 'baseball', 'soccer', 'basketball' ]