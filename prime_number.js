let number = +prompt('Input number');
if (number == 2 ) {
    alert(number+` is prime number`);
}
for (let i = 2; i <=Math.sqrt(number) ; i++) {
    if (number % i == 0) alert(number+' is not prime number');
    else alert(number+' is prime number');
}