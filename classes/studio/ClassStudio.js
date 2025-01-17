//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
   constructor(name, mass, scores = []) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
   }
   addScore(newScore) {
    return this.scores.push(newScore);
   }
}

average(){
    let sum= 0;
    for(let score of this.scores){
        sum += score;
    }
    let average = sum/ this.score.length;
    return Math.round(average*10)/10;
}

Status(){
    let averageScore = this.average();
    if (averageScore>=90){
        return "Accepted";
    }else if(averageScore>=80){
            return "Reserve";
     } else if(averageScore>=70){
        return "Probationary";
     } else {
        return "Rejected"
     }
        }
    }




let bubbaBear = new CrewCandidate('Bubba Bear', 135, [85, 85, 90]);
let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

console.log(bubbaBear, merryMaltese, gladGator);
console.log(bubbaBear.addScore(83));
console.l0g(bubbaBear.scores);

console.log(bubbaBear.scores);
console.log(gladGator.average());
console.log(bubbaBear.name, "earned an average test score of", bubbaBear.average(), '%', "and has a status of", bubbaBear.Status());
console.log(merryMaltese.name, "earned an average test score of", merryMaltese.average(), '%', "and has a status of", merryMaltese.Status())
console.log(gladGator.name, "earned an average test score of", gladGator.average(), '%', "and has a status of", gladGator.Status())
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.