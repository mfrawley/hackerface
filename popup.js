

// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  details = {
    'file' : 'hackerface.js'
    //'code' : "var names = document.querySelectorAll('.comhead a'); console.log(names); for(var i=0; i < names.length; i++) { var img = document.createElement('img'); img.src = 'http://avatars.io/twitter/'+names[i].innerHTML; console.log(img.src); names[i].appendChild(img);}"
  }
  chrome.tabs.executeScript(null, details, function() {});

});
