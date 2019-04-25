// old way
//async JS with callback 
function getRecipe() {
    setTimeout(() => {
        const recipeID = [523, 883, 432, 974];
        console.log(recipeID);
        setTimeout((id) => {
            const recipe = { title: 'Fresh tomato pasta', publisher: 'Jonas'};
            console.log(`${id}: ${recipe.title}`);

            setTimeout((publisher) => {
                const recipe2 = { title: 'Italian Pizza', publisher: 'Jonas'};
                console.log(recipe2);
            }, 1500, recipe.publisher);    //arguments (id) for setTimeout passing here

        }, 1500, recipeID[2]);    //arguments (id) for setTimeout passing here
    }, 1500);
}
getRecipe();