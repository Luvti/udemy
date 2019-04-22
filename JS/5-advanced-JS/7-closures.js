// closures

function retirement(retirementAge) {
    return function(yearOfBirth) {
        var a = ' years left until retirement';
        var age = 2019-yearOfBirth;
        console.log((retirementAge - age) + a);
    };
}

var retirementUS = retirement(66);
retirementUS(1990);

//retirement(66)(1990);


var retirementGermany = retirement(65);
retirementGermany(1990);

var retirementIceland = retirement(67);
retirementIceland(1990);


/* это не замыкание
    function interviewQuestion (job) {
        if(job === 'designer') {
            return function(name) {
                console.log(name + ', can you please explain what UX design is?');
            };
        } else if(job === 'teacher') {
            return function(name) {
                console.log('What subject do you teach, ' + name + '?');
            };
        } else {
            return function(name) {
                console.log('Hello ' + name + ', what do you do?');
            };
        }
    }

    var teacherQuestion = interviewQuestion('teacher');
    teacherQuestion('John');
*/

//то же что выше но на замыкании
function interviewQuestion (job) {
    return function(name) {
        if(job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if(job === 'teacher') { 
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    };
}
interviewQuestion('teacher')('John');