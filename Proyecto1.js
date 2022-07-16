var car = {
    a: 'Blue',
    c: 'xiaomy',
    d: 'Fiesta'
};
var keys = Object.keys(car);
var vals = Object.values(car);
keys.sort();
vals.sort();
console.log(keys, vals);
