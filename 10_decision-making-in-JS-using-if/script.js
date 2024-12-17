const username = prompt('Please enter your name' ) || 'ritik'
const userAge = parseInt(prompt('Please enter your age')) || 22




console.log(`Name: ${username}`);
console.log(`Age: ${userAge}`);

if (userAge >=0 && userAge <=4) 
    {
        console.log(`${username} is a kid.`);
        console.log('And he/she  is playing.');
    }

if (userAge >=5 && userAge <=17) 
    {
        console.log(`${username} is a school student.`);
        console.log('And he/she  is science and maths.');
    }

if (userAge >=18 && userAge <=23) 
{
    console.log(`${username} is a college student.`);
    console.log('And he/she  is learning computer science.');
}

if (userAge >=25 && userAge <=45)
{
    console.log(`${username} is a working professional.`);
    console.log('he/she is a web developer.');
}

if (userAge > 45)
{
    console.log(`${username} is a retired professional.`);
    console.log('he/she reads newspaper.');
}


console.log('Program Ended!!');

