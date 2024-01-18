const aprilBatch = ['Tina','Rina','Madhu'];
const mayBatch = ['Tanu','Rohit','Kartik'];
const julyBatch = ['Moni','Soni'];

// function addStudent(batch, student){
//     batch.push(student);
//     console.log(batch);
// }

// addStudent(aprilBatch, 'Ramina','Karina');

// Rest ...

function addStudents(batch, ...students){
    for(let i of students){
        batch.push(i);
    }
    console.log(batch);
}

addStudents(aprilBatch,'Sunny','Hunny');

// Spread ...

