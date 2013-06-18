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
    var names = document.querySelectorAll('.comhead a:first-child')
    console.log(names);
    for(var i=0; i < names.length; i++) { 
      var p = document.createElement('p');
      var img = document.createElement('img');
      var name = names[i].innerHTML
      img.src = this.constructAvatarURL(name);
      console.log(img.src)
      p.innerHTML = name;
      p.appendChild(img)
      names[i].innerHTML = '';
      names[i].appendChild(p);
      
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
    return "http://avatars.io/twitter/"+name;
  }
};
hackerFace.showPhotos();