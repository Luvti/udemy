//maps

const question = new Map();
question.set('question', 'What is the name of the latest major JS version');

question.set(1, 'ES5'); //2009
question.set(2, 'ES5.1'); //2011
question.set(3, 'ES6'); //2015
question.set(4, 'ES7'); //2016
question.set(5, 'ES8'); // 2017
question.set(6, 'ES9'); // 2018

question.set('answer', 6);
question.set(true, 'Correct answer');
question.set(false, 'Wrong, please try again');


console.log(question.get('question'));
//console.log(question.size);

if(question.has(4)) {
    //question.delete(4);
    //console.log('answer is here');
}

//question.clear();

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for(let [key, value] of question.entries()) {
    //console.log(`This is ${key}, and it's set to ${value}`);    
    
}

for(let [key, value] of question.entries()) {
    if(typeof(key)==='number') {
        console.log(`Answer ${key}: ${value}`);   
    } 
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('answer')));
