

document.getElementById('title').addEventListener('change', function() {
  if (this.value === 'other') {
    otherJobRole.style.display = "block";
    // console.log('You selected: ', this.value);
  } 

  if (this.value !== 'other') {
    otherJobRole.style.display = "none";
  }
});

document.getElementById('color').disabled = true;


// const jobTitles = document.getElementById('title');
// const choices = jobTitles.querySelectorAll("option");
const otherJobRole = document.getElementById("other-job-role");