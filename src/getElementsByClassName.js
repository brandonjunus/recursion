// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elementsWithClass = [];

  function findElementsWithClass(element) {
    if (element.classList && element.classList.contains(className)) {
      elementsWithClass.push(element);
    }
    if (element.childNodes) {
      _.each(element.childNodes, function(item) {
        findElementsWithClass(item);
      });
    }
  }
  findElementsWithClass(document);
  return elementsWithClass;
}
