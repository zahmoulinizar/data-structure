let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];
let sum1 = 0; // sum of the elements that appeared more than once across the sets
let sum2 = 0; // sum of the elements that appeared once across the sets

// To get the sum of the elements that appeared more than once across the sets

for (let i = 0; i < set1.length; i++) {
    for (let j = 0; j < set2.length; j++) {
        if (set1[i] === set2[j]) {
            sum += (set1[i] + set2[j])
        }
    }
}
console.log(sum)

//  To get the sum of the elements that appeared once across the sets

for (let i = 0; i < set1.length; i++) {
    if (!set2.includes(set1[i])) {
        sum2 += set1[i]
    }
}

for (let j = 0; j < set2.length; j++) {
    if (!set2.includes(set2[j]))
    sum2 += set2[j]
}

console.log(sum2)