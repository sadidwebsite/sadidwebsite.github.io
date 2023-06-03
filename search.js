function searchFile() 
{
    var input = document.getElementById("search-input").value.toLowerCase();
    var fileList = document.getElementsByClassName("file-name");
    
    for (var i = 0; i < fileList.length; i++) {
      var fileName = fileList[i].innerHTML.toLowerCase();
      var listItem = fileList[i].parentNode.parentNode.parentNode;

      if (fileName.includes(input)) 
      {
        window.addEventListener('DOMContentLoaded', scrollToFiles);
        listItem.style.display = "";
      } 
      else 
      {
        listItem.style.display = "none";
      }
    }
  }

function scrollToFiles() 
{
    var fileSection = document.getElementById("file-section");
    fileSection.scrollIntoView({ behavior: 'smooth' }); 
}
