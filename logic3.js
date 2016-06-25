/*
Project Euler Logic problem 3
The Odin Project - JavaScript

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?

Note: problem modified by TOP to not include numbers over 1000.
Current version below is not optimized given my current skills and
is correct but will crash the browser when 600851475143 is entered.
*/

function isPrime(n) {
  if (n<2) return false;
  for(var i=2; i < n; i++) {
    if (n%i === 0) {
      return false;
    }
  }
  return true;
}

function findLargestPrime(n) {
  var nFactors = [];
  for(var i=0;i <= n/2;i++) {
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

findLargestPrime(13195);
