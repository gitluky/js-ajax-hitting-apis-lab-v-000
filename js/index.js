// your code here
function getRepositories() {
  const username = document.getElementById('username').value;
  const req = new XMLHttpRequest;
  req.addEventListener('load', displayRepositories);
  req.open('GET', `https://api.github.com/users/${username}/repos`)
  req.send();
}

function displayRepositories() {
  console.log(this.responseText);
  const reposResponse = JSON.parse(this.responseText);
  const repos = `<ul>${ reposResponse
    .map( repo =>
      '<li>' + repo.name + ' - ' + '<a href="' + repo.html_url + '">' + repo.html_url + '</a> + ' + '<a href="#" onclick="getCommits(this)">Get Commits</a></li>'
    ).join(' ')}</ul>`;
  document.getElementById('repositories').innerHTML = repos;
}
