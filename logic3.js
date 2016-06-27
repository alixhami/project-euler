/*
Project Euler Logic problem 3
The Odin Project - JavaScript

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?

Note: The Odin Project modified the requirements for this problem to take only numbers
under 100,000. My solution works for the example problem, but takes too long to
calculate to run 600851475143. This can be avoided if the factors are limited
to 7,000 on line 31.
*/

// function to determine if a number is prime
function isPrime(n) {
  if (n<2) return false;
  for(var i=2; i < n; i++) {
    if (n%i === 0) {
      return false;
    }
  }
  return true;
}

/* This function finds a number's factors and checks if each is prime.
If a factor is prime, it is set as the largest prime factor
Because the array of factors is in order from smallest to largest,
the last added prime factor will be the largest prime factor */
function findLargestPrime(n) {
  var nFactors = [];
  for(var i=0;i <= n/2;i++) {   // change 'n/2' to 7000 to try function on 600851475143
    if(n%i === 0) {
      nFactors[nFactors.length] = i;
    }
  }
  var largestPrimeFactor = 0;
  for (factor in nFactors) {
    if (isPrime(nFactors[factor])) {
      if (nFactors[factor] > largestPrimeFactor) {
        largestPrimeFactor = nFactors[factor];
      }
    }
  }
  console.log(largestPrimeFactor);
}

findLargestPrime(13195);    // Evaluates to 29. Original problem evaluates to 6,857
