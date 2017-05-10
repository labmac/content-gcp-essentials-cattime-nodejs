var getACat = function() {
  var xhttp = new XMLHttpRequest();
  parser = new DOMParser();

  xhttp.open("GET", "http://thecatapi.com/api/images/get?format=xml", false);
  xhttp.send();

  xmlOutput = parser.parseFromString(xhttp.response, "text/xml")

  return xmlOutput.getElementsByTagName("url")[0].childNodes[0].nodeValue;
}

var updatePic = function() {
  var catPic = document.getElementsByClassName('cat-pic')[0];
  catPic.src = getACat();
}
