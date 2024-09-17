/**
 * #8: classSorter
 *
 * `classSorter` sorts a roster of students and teachers into classes based on their grades.
 * `classSorter` accepts a roster object containing students and teachers, and sorts them into classes based on their grades.
 *
 * `classSorter` returns an object with grades as keys, each containing an array of student names and an array of teacher names for that grade.
 *
 * @category 07 - Adv Objects
 * @function classSorter
 * @param {Object} roster - The roster object containing arrays of students and teachers.
 * @param {Array} roster.students - Array of student objects.
 * @param {Array} roster.teachers - Array of teacher objects.
 * @param {Object} roster.students[].name - The name of the student.
 * @param {number} roster.students[].grade - The grade of the student.
 * @param {Object} roster.teachers[].name - The name of the teacher.
 * @param {number} roster.teachers[].grade - The grade the teacher teaches.
 * @returns {Object} - An object where keys are grades and values are objects containing arrays of student and teacher names.
 *
 * @example
 * const roster = {
 *  students: [
 *     { name: "Abigail Danielski", grade: 7 },
 *     { name: "Theresina Simeons", grade: 7 },
 *     { name: "Riobard Schanke", grade: 7 },
 *   ],
 *  teachers: [{ name: "Joby Bulloch", grade: 7 }],
 * };
 *
 * const sortedClass = classSorter(roster)
 * console.log(sortedClass)
 * {
 *   7: {
 *     students: ["Abigail Danielski", "Theresina Simeons", "Riobard Schanke"],
 *     teachers: ["Joby Bulloch"],
 *   },
 * };
 */
//restructuring an object from roster.students/teachers[{name: value, grade: value}] to roster.grade:{students: [StudentNames] teachers: [TeacherNames]}
//create new blank object
//use a for loop for each array(student and teacher)
//if grade key does not exist in sortedRoster create the object with students/teacher blank arrays and then add the current name to array as its value
export function classSorter(roster) {
  let sortedRoster = {};
  if (roster.students !== undefined) {
    for (let i = 0; i < roster.students.length; i++) {
      let currentStudent = roster.students[i];
      if (!sortedRoster[currentStudent.grade]) {
        sortedRoster[currentStudent.grade] = {
          students: [],
          teachers: [],
        };
      }
      sortedRoster[currentStudent.grade].students.push(currentStudent.name);
    }
  }
  if (roster.teachers !== undefined) {
    for (let i = 0; i < roster.teachers.length; i++) {
      let currentTeacher = roster.teachers[i];
      if (!sortedRoster[currentTeacher.grade]) {
        sortedRoster[currentTeacher.grade] = {
          students: [],
          teachers: [],
        };
      }
      sortedRoster[currentTeacher.grade].teachers.push(currentTeacher.name);
    }
  }
  return sortedRoster;
}
