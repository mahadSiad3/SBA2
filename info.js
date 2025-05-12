function getLearnerData(course, ag, submissions) {

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
    console.log(avg)
    console.log(student.name)    
    })
    console.table(ListedStudents)

   let studentsummary = ListedStudents.map ((student) =>{
    let summary = student.name + "is " + student.age+ " years old and has and average grade of : "+ student.averageGrade
    return summary
})
console.log(studentsummary)

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    /*

    here, we would process this data to achieve the desired result.

    1. first figure out who are the students
    generate an array of unique students ids
    generate an array of students ids -> [125,125,125,132,132]
    generate the array from submissions data then make it unique -> [125,132]

    2. convert it into array of object where you have a key called id
    then value be studendid -> [{id:125},{id:132}]

    3. get the assignments and calulcate the grade
    find the assignment for each student and thier score
    -> [{id:125,1:47,2:150,3:400},{id:132,1:32,2:140}]
    now you have an object for each student that has score

    4. we need to calculate the grade
    go every student and match assignment using id to find points points_possible
    you just divide the score by points points_possible
    -> [{id:125,1:0.94,2:1.0}]
    avg (add assignment scores together )/ (points possible)
    remove not due assignments

    const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0, // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833, // late: (140 - 15) / 150
      },
    ];

  */
 
  // let result = [];
  // write some code that makes results like that
  // for (let i = 0; i < submissions.length; i++) {
  //   //
  // }
  // result [125,125,125,32,32]
  // return result;
}









// let students = ['adam', "bob", "tommy", "oussama", "billy"]
// let grades = [5, 3, 7, 6, 10]
// for (let i =0;i<students.length;i++){
//   console.log(students[i])
// }
// ()=>{

// }
// function(){

// }
// ()=>{}
// students[i]
// you can give any name you want
// what matter it is parameter
// first parameter is place holder that represnets current element 
// second parameter is the index
//third paratmer reprensts the array
// students.forEach((student,index) =>{
//  console.log(student + " has a grade " + grades[index])
// })
// implecit return
// let newArray = students.map(student => student)
// let newArray = students.map((student) => {
//   return student + " is a student in perscholas"
// })
// console.log(newArray)

// let numbers = [3,5]
//1. using map i want to create a new array based on number where every every numbers is doubles by two [2,4,6,8,10,12]

// 2.create new array where the numbers are squared (doubled by themsevel)
// [1,4,9,16..]

//  3.["1 is odd","2 is even"]

// let doubledNumbers = numbers.map((number)=>{
//   if(number %2 ===0){
//     return number + " is even"
//   }else{
//     return number + ' is odd'
//   }
  
// })

// console.log(doubledNumbers)

let students = ['adam', "bob", "tommy", "oussama", "billy"]
let grades = [5, 3, 7, 6, 10]


// {name:"adam"},{name:"bob"}
let newStudents = students.map((student,index)=>{
  let obj = {
      name:student,
    }
  return obj
})

// console.log(newStudents)
// [
//     { name: 'adam', grade: 5 },
//     { name: 'bob', grade: 3 },
//     { name: 'tommy', grade: 7 },
//     { name: 'oussama', grade: 6 },
//     { name: 'billy', grade: 10 }
//   ]

let learners = newStudents.map((student) => {
  //add  passed  :either true or false, it is going to be true if the grade >5, and false if it less
  
  // if(student.grade > 5){
  //   student.passed = true
  // }else{
  //   student.passed = false
  // }
                    
  student.passed = student.grade > 5  // true or false
  student.school= "perscholas"
  return student
})


// let numbers = [2,-3,5,8,18,30, -6]

// let newNumbers = numbers.map((number)=>{
//   let obj= {
//     number:number,
//     isEven: number %2===0,
//     sign: number>0 ?"positive":"negative"
//   }

//   // if(number %2===0){
//   //   obj.isEven = true
//   // }else{
//   //   obj.isEven = false
//   // }
  
//   // if(number >0){
//   //   obj.sign= "positive"
//   // }else{
//   //   obj.sign = "negative"
//   // }
//   return obj
// })

// console.log(newNumbers)

// let numbers = [1,9,3,4,5,6,7,8,9]

// let evenNumbers = numbers.filter((number)=>{

//   // if number is even we return true so it gets added to the new array
//    // if(number %2===0){
//    //    return true
//    //  }
//    // if you are returning nothing it is emplicit return false since it is undefined

//   return number%2===0
// })
// let evenNumbers = numbers.filter((number)=>  number%2===0)

// console.log(evenNumbers)//keep only even numbers


let lastStudents =  [
      { name: 'adam', grade: 5 },
      { name: 'bob', grade: 3 },
      { name: 'tommy', grade: 7 },
      { name: 'oussama', grade: 6 },
      { name: 'billy', grade: 10 }
    ]

let passedStudents = lastStudents.filter((student)=>{


  return student.grade >5 && student.name[0] ==="b"
})


console.log(passedStudents)
// remove students who have a grade less than 6 
// extra, i want to keep students who's first letter of their name is b
// [
//   { name: 'tommy', grade: 7 },
//   { name: 'oussama', grade: 6 },
//   { name: 'billy', grade: 10 }
// ]


// find, it returns first match
//sort 
// reduce