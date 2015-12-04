$(document).ready(function(){
  $.ajax({
    type:"GET",
    url:"https://api.github.com/users/Steph-harris/repos",
    success: function (userInfo) {
      // debugger;
      for(var i=0; i<userInfo.length; i++){
        var repoNms = repoLink(userInfo[i]);
        // var newH2 = $("<h2>").append(repoNms);
        $(".list-group").append(repoNms);
      // .append(repoNms)
      }
    }  
  })

  function repoLink (repoData) {
    // create unique url for each repo
    var repoUrl = repoData.html_url + "/commits";
    // create a link to attach to each repo
    var newLink = $("<a>")
      .attr("href", repoUrl)
      .addClass("list-group-item")
      .append(repoData.name)

    return newLink;
  }   
})