// your code here
function getRepositories() {
  const req = new XMLHttpRequest;
  req.addEventListener('load', displayRepositories);
  req.open('GET', 'https://api.github.com/users/octocat/repos')
  req.send();
}

function displayRepositories() {
  const repos = this.responseText;

}
