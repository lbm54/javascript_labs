var friends = ['a', 'b', 'c', 'd', 'e'];
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i] + ":");
    for (var j = 99; j >= 0; j--) {
        console.log(`${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j} lines of code in the file`);
    }
}