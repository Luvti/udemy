// ES6
//Async - await

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

async function getRecipesAW() {
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const relatedRecipe = await getRelatedRecipe('Jonas');
    console.log(relatedRecipe);
    return recipe;
}
// returns promise
//const rec = getRecipesAW();
//console.log(rec);

getRecipesAW().then(res=> console.log(`${res} is the best ever!`));