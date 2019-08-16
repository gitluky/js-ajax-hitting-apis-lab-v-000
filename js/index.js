// your code here
function getRepositories() {
  const req = new XMLHttpRequest;
  req.open('load', 'https://api.github.com/users/octocat/repos')
  req.send();
}
