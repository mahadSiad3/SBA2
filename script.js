
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

function getLearnerData() {
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
//.log(scores125)
//console.log(scores132)
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
//console.log("neeeeeewwwwww:" + totalScore125)
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
//console.log("added:" + totalScore132)
results.push(learner132);
//console.log(results);

let total = 0;
let possiblePoints = []
AssignmentGroup.assignments.forEach((student) => {
    const now = new Date();
    //console.log(student.due_at)
    if (student.due_at <= now.toISOString().substring(0, 10)) {
        possiblePoints.push(student.points_possible)
        total += student.points_possible
        //console.log(now.toISOString().substring(0, 10))
    }//avg =Math.floor(avg/student.grades.length)
    //console.log("bal" + total)

})

//console.log(possiblePoints.length)
let average125 = totalScore125 / total
results[0].avg = (average125);
//console.log(results)
let average132 = totalScore132 / total
results[1].avg = (average132);
console.log(results)
}

const result = getLearnerData();

