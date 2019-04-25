// ES6
//Promises

// PENDING => event happens => SETTLED/RESOLVED  => 1. FULFILLED or 2. REJECTED
const getIDs = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
        //reject([523, 883, 432, 974]);   // marked as rejectred
    }, 1500);
});

const getRecipe = recId => {
    return new Promise(((resolve, reject)=>{
        setTimeout((ID) => {
            const recipe = { title: 'Fresh tomato pasta', publisher: 'Jonas'};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recId);
    }));
};

const getRelatedRecipe = publisher => {
    return new Promise(((resolve, reject)=>{
        setTimeout((pub) => {
            const recipe = { title: 'Italian Pizza', publisher: 'Jonas'};
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    }));
};


getIDs
.then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[2]);
})
.then(recipe => {
    console.log(recipe);
    return getRelatedRecipe('Jonas');
})
.then(recipe => {
    console.log(recipe);
})
.catch(error => console.log('Error!', error));
