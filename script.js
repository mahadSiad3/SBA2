
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};

// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];

function getLearnerData(course, ag, submissions) {
    // // here, we would process this data to achieve the desired result.
    // const result = [
    //     {
    //         id: 125,
    //         avg: 0.985, // (47 + 150) / (50 + 150)
    //         1: 0.94, // 47 / 50
    //         2: 1.0 // 150 / 150
    //     },
    //     {
    //         id: 132,
    //         avg: 0.82, // (39 + 125) / (50 + 150)
    //         1: 0.78, // 39 / 50
    //         2: 0.833 // late: (140 - 15) / 150
    //     }
    // ];

    // return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

//console.log(result);

// generate an array of students ids -> [125,125,125,132,132]
// generate the array from submissions data then make it unique -> [125,132]

let unique = function (){
let ids = [];
let studentIds = [];
let assignmentIds125 = [];
let assignmentIds132 = [];
let scores125 = [];
let scores132 = [];

LearnerSubmissions.forEach((items) => {
    //console.log(LearnerSubmissions.assignment_id)
    ids.push(items.learner_id)
    studentIds.push(items.learner_id)
    //assignmentIds.push(items.assignment_id)
    //scores.push(items.submission.score)
    return studentIds, ids
})

let results = []

//let resultsMap={}

for (let i = 0; i < LearnerSubmissions.length; i++) {
 
    if (LearnerSubmissions[i].learner_id == 125) {
        assignmentIds125.push(LearnerSubmissions[i].assignment_id)
        scores125.push(LearnerSubmissions[i].submission.score)
        //console.log(scores125)
    }
    else if (LearnerSubmissions[i].learner_id == 132) {
        assignmentIds132.push(LearnerSubmissions[i].assignment_id)
        scores132.push(LearnerSubmissions[i].submission.score )
        //console.log(AssignmentGroup.assignments[q].points_possible)
    }
}
console.log(scores125)
console.log(scores132)
//console.log(AssignmentGroup.assignments[0].points_possible)
//console.log(results)
let totalScore125 = 0

let learner125 = { id: 125 };
for (let i = 0; i < assignmentIds125.length; i++) {
    const now = new Date();
    if (AssignmentGroup.assignments[i].due_at <= now.toISOString().substring(0, 10)) {
        learner125[assignmentIds125[i]] = (scores125[i]/AssignmentGroup.assignments[i].points_possible);
        totalScore125 += scores125[i]
    }
}
console.log("neeeeeewwwwww:" + totalScore125)
results.push(learner125);
let deduction =0;
let totalScore132 = 0
let learner132 = { id: 132 };
for (let i = 0; i < assignmentIds132.length; i++) {
    const now = new Date();
    if (AssignmentGroup.assignments[i].due_at <= now.toISOString().substring(0, 10) ) {
        learner132[assignmentIds132[i]] = scores132[i] / AssignmentGroup.assignments[i].points_possible;
        totalScore132 += scores132[i]
    }
    if(LearnerSubmissions[i].submission.submitted_at > AssignmentGroup.assignments[i].due_at){
        deduction += LearnerSubmissions[i].submission.score[i]*.1;
       
    }
}
console.log("added:" + totalScore132)
results.push(learner132);
console.log(results);

let total = 0;
let possiblePoints = []
AssignmentGroup.assignments.forEach((student) => {
    const now = new Date();
    console.log(student.due_at)
    if (student.due_at <= now.toISOString().substring(0, 10)) {
        possiblePoints.push(student.points_possible)
        total += student.points_possible
        console.log(now.toISOString().substring(0, 10))
    }//avg =Math.floor(avg/student.grades.length)
    console.log("bal" + total)

})

//console.log(possiblePoints.length)
let average125 = totalScore125 / total
results[0].avg = (average125);
console.log(results)
let average132 = totalScore132 / total
results[1].avg = (average132);
console.log(results)
}
unique()
//results[0].push({avg :(totalScore125/total)})



/*
      id: 125,
            avg: 0.985, // (47 + 150) / (50 + 150)
            1: 0.94, // 47 / 50
            2: 1.0 // 150 / 150
        },
        {
            id: 132,
            avg: 0.82, // (39 + 125) / (50 + 150)
            1: 0.78, // 39 / 50
            2: 0.833 // late: (140 - 15) / 150


const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        */

//  4. we need to calculate the grade
//     go every student and match assignment using id to find points points_possible
//     you just divide the score by points points_possible
//     -> [{id:125,1:0.94,2:1.0}]
//     avg (add assignment scores together )/ (points possible)
//     remove not due assignments






// const resultsMap = {};

// LearnerSubmissions.forEach(({ learner_id, assignment_id, submission }) => {
//   if (!resultsMap[learner_id]) {
//     resultsMap[learner_id] = { id: learner_id };
//   }
//   resultsMap[learner_id][assignment_id] = submission.score;
// });

//  results = Object.values(resultsMap);

// console.log(results);


//}
//unique()

// 2. convert it into array of object where you have a key called id
//     then value be studendid -> [{id:125},{id:132}]

//   3. get the assignments and calulcate the grade
//     find the assignment for each student and thier score
//     -> [{id:125,1:47,2:150,3:400},{id:132,1:32,2:140}]
//     now you have an object for each student that has score

/*

    let ListedStudents = [{
        name:"Alice",
        age:20,
        grades:[
            85,
            95,
            88
        ]},
        {
        name:"bob",
        age:22,
        grades:[
            78,
            81,
            79
        ]},
        {
        name:"charlie",
        age:23,
        grades:[
           95,
           90,
           93
        ]
    },
    {
        name:"David",
        age:21,
        grades:[
            70,
            75,
            72
        ]
    
    }]
   ListedStudents.forEach(student =>{
        let avg=0
        student.grades.forEach(grade=>{
            avg += grade
        })
    student.averageGrade =Math.floor(avg/student.grades.length)
    //console.log(avg)
    //console.log(student.name)    
    })
    console.table(ListedStudents)

   let studentsummary = ListedStudents.map ((student) =>{
    let summary = student.name + "is " + student.age+ " years old and has and average grade of : "+ student.averageGrade
    return summary
})
console.log(studentsummary)

*/
