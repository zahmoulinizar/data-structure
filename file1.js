var set1 = [3, 1, 7, 9];
var set2 = [2, 4, 1, 9, 3];
var sum = 0; 
var distinct=set1[0]
for (var i = 0; i < set1.length; i++) {
    for (let j = 0; j < set2.length; j++) {
        if (set1[i]!=distinct && set1[i]!=set2[j]) {
            sum=sum+distinct
        }
        else {
            distinct=set1[i]
        }
    }   
}

console.log(sum)



