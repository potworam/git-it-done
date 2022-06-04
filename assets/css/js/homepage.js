var getUserRepos = function(user) {
   var apiUrl = "https://api.github.com/users/" + user + "/repos";
   fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
});

   
};
 

  getUserRepos();
  var response = fetch("https://api.github.com/users/octocat/repos").then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });