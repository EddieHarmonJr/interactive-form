const jobTitle = document.getElementById('title');
const otherRole = document.getElementById("other-job-role");


jobTitle.addEventListener('click', hideJobRole);


function hideJobRole() {
  otherRole.style.display = 'none';
}