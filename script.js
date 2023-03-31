var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var projectDueDateInputEl = $('#project-due-date-input');
var projectTableEl = $('#project-table');

// Attach submit event listener to form
projectFormEl.on('submit', function(event) {
  event.preventDefault();

  // Capture input values from form
  var projectName = projectNameInputEl.val().trim();
  var projectType = projectTypeInputEl.val();
  var projectDueDate = projectDueDateInputEl.val();

