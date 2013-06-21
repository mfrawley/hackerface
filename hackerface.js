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
      var br = document.createElement('br');
      var img = document.createElement('img');
      var name = names[i].innerHTML
      img.src = this.constructAvatarURL(name);
      
      p.innerHTML = name;
      p.appendChild(br)
      p.appendChild(img)

      
      names[i].innerHTML = '';
      names[i].appendChild(p);
      
    }
  },

  getThumbUrl: function(url) {
    return 'http://www.bitpixels.com/getthumbnail?code=58666&url='+url+'&size=50';
  },
  
  showWebThumbs: function() {
    console.log('showWebThumbs')
    var titles = document.querySelectorAll('.comhead');
    console.log(titles);
    for(var i=0; i < titles.length; i++) {
      var el = titles[i];
      var title = el.innerHTML.replace(' (', '').replace(') ', '');
      var url = hackerFace.getThumbUrl(title);
      var a = document.createElement('a');
      //a.href = 'http://'+title;
      var img = document.createElement('img');
      a.appendChild(img);
      
      var td = document.createElement('td');
      img.src= url;
      
      td.appendChild(a);
      // var firstChild = el.parentNode.parentNode.firstChild.nextSibling.nextSibling;
      var parent = el.parentNode.parentNode;
      // parent.insertBefore(td, firstChild);
      parent.appendChild(td);
//      console.log(url);
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
console.log( window.location.pathname )
if(window.location.pathname == '/') {
  hackerFace.showWebThumbs();
} else {
  hackerFace.showPhotos();  
}

