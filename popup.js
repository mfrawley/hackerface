
var hackerFace = {

  /**
   * Handle the 'onload' event of our kitten XHR request, generated in
   * 'requestKittens', by generating 'img' elements, and stuffing them into
   * the document for display.
   *
   * @param {ProgressEvent} e The XHR ProgressEvent.
   * @private
   */
  showPhotos: function () {
    var names = document.querySelectorAll('.comhead a')
    console.log(names);
    for(var i=0; i < names.length; i++) { 
      var img = document.createElement('img');
      img.src = this.constructAvatarURL(names[i].innerHTML);
      console.log(img.src)
      names[i].appendChild(img);
    }
  },

  /**
   * Given a photo, construct a URL using the method outlined at
   * http://www.flickr.com/services/api/misc.urlKittenl
   *
   * @param {DOMElement} A kitten.
   * @return {string} The kitten's URL.
   * @private
   */
  constructAvatarURL: function (name) {
    return "http://avatar.io/twitter/"+name;
  }
};

// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  details = {
    'code' : "var names = document.querySelectorAll('.comhead a'); console.log(names); for(var i=0; i < names.length; i++) { var img = document.createElement('img'); img.src = 'http://avatars.io/twitter/'+names[i].innerHTML; console.log(img.src); names[i].appendChild(img);}"
  }
  chrome.tabs.executeScript(null, details, function() {});

});
