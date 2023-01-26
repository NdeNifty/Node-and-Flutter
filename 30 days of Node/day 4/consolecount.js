//the consolecount() is uded to count distinct instances of a console output
console.count('dog');
console.count('cat');
console.count('dog');
console.count('cat');
console.count('cat');
console.count('chicken');
console.count('pig');
console.count('pig');
console.count('dog');
console.count('chicken');
// the consoleReset() is used to reset the counter of a particular instatnce. We will reset chicken
console.countReset('dog'); 
console.count()