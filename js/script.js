var links = [{label: 'About', bg: "html/about.html"},
			 {label: 'LawORDate', bg: "html/lawordate.html"}, 
             {label: 'Añotador', bg: "html/anotador.html"}, 
             {label: 'WhenTheFact', bg: "html/wtf.html"},];
var windowHeight = window.innerHeight;
if(windowHeight === 0) windowHeight = 238;
var radius = windowHeight*0.6,
    circle = document.createElement('div'),
    borderSize = radius*0.021;
    totalArea = 48, 
    increment = totalArea/(links.length-1),
    startPoint = 0-(totalArea/2),
    fontSize = 22,
    linkSize = radius*0.25;
	

styleCircle();
addCircle();
addLinks();
styleLinks();

function styleCircle() {
  circle.style.border= borderSize+'px solid #5f646e';
  circle.style.width = radius*2+'px';
  circle.style.height = radius*2+'px';
  circle.style.borderRadius = radius+'px';
  circle.style.position = 'absolute';
  circle.style.top = '-'+radius*0.2+'px';
  circle.style.left = radius*-1.6+'px';
}

function addCircle() {
	document.getElementById("svg").appendChild(circle);
}

function addLinks() {
  for (var i=0, l=links.length; i<l; i++) {
    link = document.createElement('a'),
    hover = document.createElement('span');
    link.href = "#";
    link.dataset.cosa = links[i].bg;
    link.style.display = 'inline-block';
    link.style.textDecoration = 'none';
    link.style.color = '#5f646e';
    link.style.position = 'absolute';
    link.style.zIndex = 100;
    link.innerHTML = links[i].label;
    hover.style.position = 'absolute';
    hover.style.display = 'inline-block';
    hover.style.zIndex = 50;
    hover.style.opacity = 0;
    document.getElementById("svg").appendChild(link);
    document.getElementById("svg").appendChild(hover);
    link.addEventListener('mouseover', linkOver);
    link.addEventListener('mouseout', linkOut);
    links[i].elem = link;
    links[i].hover = hover;
  }
}

function styleLinks() {
  for (var i=0, l=links.length; i<l; i++) {
    var link = links[i].elem, hover = links[i].hover, deg = startPoint+(i*increment);  
    link.style.paddingLeft = radius*1.05+'px';
    link.style.fontSize = fontSize+'px';
    link.style.height = linkSize+'px';
    link.style.lineHeight = linkSize+'px';
    setTransformOrigin(link, '0px '+linkSize*0.5+'px');
    setTransition(link, 'all 0.2s ease-out');
    setTransform(link, 'rotate('+deg+'deg)');
    link.style.left = radius*-0.6+borderSize+'px';
    link.style.top = (windowHeight/2) - (windowHeight*0.1)+borderSize+'px';

    hover.style.left = radius*-0.6+borderSize+'px';
    setTransformOrigin(hover, '0px '+linkSize*0.5+'px');
    setTransition(hover, 'all 0.2s ease-out');
    setTransform(hover, 'rotate('+deg+'deg)');
    hover.style.top = (windowHeight*0.4)+borderSize +'px';
    hover.style.width = radius+(borderSize/2)+'px';
    hover.style.height = linkSize+'px';
    hover.style.borderRight = borderSize*2+'px solid #5f646e';
  
  }
}

window.onresize = function() {
  windowHeight = window.innerHeight;
  radius = windowHeight*0.6,
  borderSize = radius*0.021;  
  fontSize = 22,
  linkSize = radius*0.25;
  styleCircle();
  styleLinks();
}

function linkOver(e) {
  var thisLink = e.target, thisHover = thisLink.nextSibling;
  thisLink.style.paddingLeft = radius*1.05+'px';
  thisHover.style.opacity = 1;
      document.getElementById("texto").innerHTML='<object id="ob" type="text/html" data="' + thisLink.dataset.cosa + '" style="min-height: 50rem; height : inherit;width : -moz-available;min-width : -webkit-fill-available;overflow : hidden;"></object>';
	  /*document.getElementById("texto").height=document.getElementById("ob").height;*/
	  
}

function linkOut(e) {
  var thisLink = e.target, thisHover = thisLink.nextSibling;
  thisLink.style.paddingLeft = radius*1.05+'px';
  thisHover.style.opacity = 0;
}

function setTransform(element, string) {
  element.style.webkitTransform = string;
  element.style.MozTransform = string;
  element.style.msTransform = string;
  element.style.OTransform = string;
  element.style.transform = string;
}

function setTransformOrigin(element, string) {
  element.style.webkitTransformOrigin = string;
  element.style.MozTransformOrigin = string;
  element.style.msTransformOrigin = string;
  element.style.OTransformOrigin = string;
  element.style.transformOrigin = string;
}

function setTransition(element, string) {
  element.style.webkitTransition = string;
  element.style.MozTransition = string;
  element.style.msTransition = string;
  element.style.OTransition = string;
  element.style.transition = string;
}