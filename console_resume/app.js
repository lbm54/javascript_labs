console.log("lee benson martin".toUpperCase());

console.log("Career: Full Stack Engineer / Instructor");
console.log("Description: I like turtles");

console.log("My Interests");
var interests = ['Fall TV', 'Locomotives', 'Observing awkward situations', 'film soundtracks'];
var prevExperience = ['math', 'undergraduate', 'lead'];

for (var i = 0; i < interests.length; i++) {
    console.log(`* ${interests[i]}`);
}
console.log("My previous Experience");

var displayPosition = function (companyName, jobTitle, description) {
    console.log(`* ${companyName} ${jobTitle} ${description}`);
};

displayPosition('some school', 'tutor', 'something');
displayPosition('some school2', 'tutor2', 'something');
displayPosition('some school3', 'tutor3', 'something');

var displaySkill = function(skillName, val) {
    (val) ? console.log(`* BAM: ${skillName}`) : console.log(`* ${skillName}`);

}

displaySkill("French", false);
displaySkill("Trombone", true);
