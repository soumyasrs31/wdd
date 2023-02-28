$(document).ready(function () {
  // Loop through array of students and append rows to table
  var row1 =
    "<tr><td>" +
    "Soumya Ranjan Sahoo" +
    "</td><td>" +
    "23" +
    "</td><td>" +
    "Computer Science" +
    "</td><td>" +
    "2021-2024" +
    "</td></tr>";
  var row2 =
    "<tr><td>" +
    "Sanjay Sahoo" +
    "</td><td>" +
    "21" +
    "</td><td>" +
    "Chemistry" +
    "</td><td>" +
    "2021-2024" +
    "</td></tr>";
  var row3 =
    "<tr><td>" +
    "Arup Dash" +
    "</td><td>" +
    "21" +
    "</td><td>" +
    "Physics" +
    "</td><td>" +
    "2021-2024" +
    "</td></tr>";
  var row4 =
    "<tr><td>" +
    "Dinesh Rout" +
    "</td><td>" +
    "23" +
    "</td><td>" +
    "English" +
    "</td><td>" +
    "2021-2024" +
    "</td></tr>";
  var row5 =
    "<tr><td>" +
    "Dinesh Rout" +
    "</td><td>" +
    "23" +
    "</td><td>" +
    "English" +
    "</td><td>" +
    "2021-2024" +
    "</td></tr>";
  $("#student-table tbody").append(row1, row2, row3, row4, row5);
});
