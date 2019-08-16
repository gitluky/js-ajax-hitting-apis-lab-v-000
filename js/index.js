// your code here
function getRepositories() {
  const req = new XMLHttpRequest;
  req.addEventListener('load', displayRepositories);
  req.open('GET', 'https://api.github.com/users/octocat/repos')
  req.send();
}

function displayRepositories() {
  const reposResponse = this.responseText;
  const repos = `<ul>${ reposResponse
    .map( repo =>
      '<li>' + repo.name + '<a href="' + repo.html_url + '"</li>'
    ).join(' ')
  }</ul>`;
}
