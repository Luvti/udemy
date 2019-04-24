//rest parameters

//ES5
function isFullAge5() {
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur) {
        console.log((2019-cur) >=18);
    });
}

isFullAge5(1990, 2010,1965, 2016, 1987);

//ES6
function isFullAge6(...years) {
    console.log(years);
    years.forEach(cur => console.log((2019- cur) >=18));
}
isFullAge6(1990, 2010,1965, 2016, 1987);



function isFullAge51(limit) {
    console.log('----------------1');
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    argsArr.forEach(function(cur) {
        console.log((2019-cur) >= limit);
    });
}

isFullAge51(21, 1990, 2010,1965, 2016, 1987);

//ES6
function isFullAge61(limit, ...years) {
    console.log('----------------2');
    console.log(years);
    years.forEach(cur => console.log((2019- cur) >= limit));
}
isFullAge61(21, 1990, 2010,1965, 2016, 1987);
