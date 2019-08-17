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
       '<li>' + repo.name + ' - <a href="' + repo.html_url + '">' + repo.html_url + '</a> + ' + '- <a href="#" data-owner="' + repo.owner.login + '"- <a href="#" data-name="' + repo.name + '" onclick="getCommits(this)">Get Commits</a>' + '- <a href="#" data-owner="' + repo.owner.login + '"- <a href="#" data-name="' + repo.name + '"onclick="getBranches(this)">Get Branches</a></li>'
    ).join(' ')}</ul>`;
  document.getElementById('repositories').innerHTML = repos;
}

function getCommits(repo) {;
  const owner = repo.dataset.owner;
  const name = repo.dataset.name;
  const req = new XMLHttpRequest;
  req.addEventListener('load', displayCommits);
  req.open('GET', `https://api.github.com/repos/${owner}/${name}/commits`);
  req.send();
}

function displayCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsHTML = `<ul>${ commits
    .map( commit =>
      '<li>' + commit.commit.author.name + ' @ ' + commit.author.login + ' - ' + commit.commit.message + '</li>'
  ).join(' ')}</ul>`;
  document.getElementById('details').innerHTML = commitsHTML;
}

function getBranches(repo) {
  const owner = repo.dataset.owner;
  const name = repo.dataset.name;
  const req = new XMLHttpRequest;
  req.addEventListener('load', displayBranches)
  req.open('GET', `https://api.github.com/repos/${owner}/${name}/branches`)
  req.send()
}

function displayBranches() {
  const branches = JSON.parse(this.responseText);
  const branchesHTML = `<ul>${branches
  .map(
    branch => '<li>' + branch.name + '</li>'
  ).join(' ')}</ul>`;
  document.getElementById('details').innerHTML = branchesHTML;
}
