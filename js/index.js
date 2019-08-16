// your code here
function getRepositories() {
  const username = document.getElementById('username').value;
  const req = new XMLHttpRequest;
  req.addEventListener('load', displayRepositories);
  req.open('GET', `https://api.github.com/users/${username}/repos`)
  req.send();
}

function displayRepositories() {
  const reposResponse = JSON.parse(this.responseText);
  const repos = `<ul>${ reposResponse
    .map(
      repo =>
      '<li>' + repo.name + ' - <a href="' + repo.html_url + '">' + repo.html_url + '</a> + ' + '- <a href="#" data-repo="' + repo.full_name + '" onclick="getCommits(this)">Get Commits</a></li>'
    ).join(' ')}</ul>`;
  document.getElementById('repositories').innerHTML = repos;
}

function getCommits(repo) {
  console.log(repo)
  const fullName = repo.dataset.repo;
  const req = new XMLHttpRequest;
  req.addEventListener('load', displayCommits);
  req.open('GET', `https://api.github.com/repos/${fullName}/commits`);
  req.send();
}

function displayCommits() {
  const commits = JSON.parse(this.responseText);
  console.log(commits);

  const commitsHTML = `<ul>${ commits
    .map( commit =>
      '<li>' + commit.commit.author.name + ' @ ' + commit.author.login + ' - ' + commit.commit.message + '</li>'
  ).join(' ')}</ul>`;
  document.getElementById('details').innerHTML = commitsHTML;
}
