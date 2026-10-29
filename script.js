const tasks = document.querySelectorAll('.task');
const progress = document.getElementById('progress');
const resetButton = document.getElementById('reset');

function updateProgress() {
  const completed = [...tasks].filter(task => task.checked).length;
  progress.textContent = completed === tasks.length
    ? '🎉 All done! Your website is deployment-ready!'
    : `${completed} of ${tasks.length} tasks completed`;
}

tasks.forEach(task => task.addEventListener('change', updateProgress));
resetButton.addEventListener('click', () => {
  tasks.forEach(task => { task.checked = false; });
  updateProgress();
});

updateProgress();
