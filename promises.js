const userLeft=true;
const userWatchingCatMeme=false;

function watchTutorialCallBack(callback,errorCallBack)
{
    if(userLeft)
    {
        errorCallBack({
            name:'User Left ',
            message:'😁😀😀😀😀😀😁'
        })
    }
    else if(userWatchingCatMeme)
    {
        errorCallBack({
            name:'User Watching the Cat Meme',
            message:'🐈🐈🐈🐈🐈🐈🐱🐱🐱🐱🐱🐱‍🚀🐱‍🚀'
        })
    }
    else{
        callback('Thumbs up 👍👍👍👍👍👍📌📌🍔🍔🍟🍟');
    }
};






function watchTutorialPromises()
{

    return new Promise((resolve,reject)=>{

        if(userLeft)
    {
        reject({
            name:'User Left ',
            message:'😁😀😀😀😀😀😁'
        })
    }
    else if(userWatchingCatMeme)
    {
       reject({
            name:'User Watching the Cat Meme',
            message:'🐈🐈🐈🐈🐈🐈🐱🐱🐱🐱🐱🐱‍🚀🐱‍🚀'
        })
    }
    else{
        resolve('Thumbs up 👍👍👍👍👍👍📌📌🍔🍔🍟🍟');
    }


    });
    
};


watchTutorialPromises().then((message)=>{
    console.log('Success::'+message);
}).catch((error)=>{
console.log(error.name+"    "+error.message);
});
