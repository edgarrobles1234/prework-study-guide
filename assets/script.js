var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics(){
for (var x = 0; x < topics.length; x++) {
 console.log(topics[x]);
}
}

function selectTopic(){
if (randomTopic === 'HTML') {
  console.log("Let's study HTML!");
} else if (randomTopic === 'CSS') {
  console.log("Let's study CSS!");
} else if (randomTopic === 'Git') {
  console.log("Let's study Git!");
} else if (randomTopic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();
















/*function helloWorld() {
  console.log("Hello, world, I am a function!")
 }
 
for(var x=0; x<5; x++) {
  helloWorld();
  console.log(x+1,"times!");
}*/


/*var shapes=["triangle","square","pentagon","hexagon","circle","you"];
console.log("Thses are some of my favorite shapes");

for(var x = 0; x < shapes.length; x++) {
    console.log("Go",shapes[x],"go!");
   }



var studentInfo = ["Edgar",28,true];
var deadlyage=28;

if(studentInfo[1]==deadlyage){
console.log(studentInfo[0], "is deadly.");
}else{
    console.log(studentInfo[0], "is bologna.");
}*/
