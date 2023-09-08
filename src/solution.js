/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/


function partitionStudentsByScore(students, score) {
  let lowestScore = [];
  let highestScore = [];
  for (let student of students) {
    if (student.score <= score) {
      lowestScore.push(student);
    } else {
      highestScore.push(student);
    }
  } return [lowestScore, highestScore];
}

module.exports = partitionStudentsByScore;