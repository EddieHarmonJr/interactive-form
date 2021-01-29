

document.getElementById('title').addEventListener('change', function() {
  if (this.value === 'other') {
    otherJobRole.style.display = "block";
    // console.log('You selected: ', this.value);
  } 

  if (this.value !== 'other') {
    otherJobRole.style.display = "none";
  }
});

// Turns off the t-shirt color options dropdown menu
document.getElementById('color').disabled = true;

document.getElementById('design').addEventListener('change', function() {
  document.getElementById('color').disabled = false;

})



// const jobTitles = document.getElementById('title');
// const choices = jobTitles.querySelectorAll("option");
const otherJobRole = document.getElementById("other-job-role");