




// prime number;

for (let i = 2; i <= 100; i++) {

    let isprime = true;
    for (let j = 2; j < i; j++) {

        if (i % j == 0) {

            isprime = false;
            break;
        }

    }
    if (isprime == true) {

        console.log(i + " " + " is prime number");
    }
}