console.log("Hello");

function LoaDate() {
  var footer = document.querySelector("footer");

  footer.innerHTML = new Date().toLocaleString();

  setInterval(function () {
    footer.innerHTML = new Date().toLocaleString();
  }, 1000);
}

// dqdqdqsdqsdqsd

document.addEventListener("DOMContentLoaded", function () {
  LoaDate();
  wrapper = document.querySelector("#wrapper");
  initNavbar();
  constructMainRouteContent(location.pathname);
});

function initNavbar() {
  var links = document.querySelectorAll("nav a");

  links.forEach(function (link) {
    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      console.log(evt);
      constructMainRouteContent(evt.target.attributes["href"].value);
      history.pushState(null, "", evt.target.attributes["href"].value);
    });
  });
}

function constructMainRouteContent(Path) {
  switch (Path) {
    case "/editor":
      loadDOMEditor();
      break;
    case "/thumbnail":
      loadDOMThumbnail();
      break;

    default:
      loadDOMHome();
      break;
  }
}

//a revoir
function loadDOMEditor() {
loadWrapperContent("/pages/editor/editor.html")
  // document.querySelector("#wrapper").innerHTML = "<h1>Editor</h1>";
}

function loadDOMThumbnail() {
  document.querySelector("#wrapper").innerHTML = "<h1>Thumbnail</h1>";
}


// function loadDOMHome() {
//   document.querySelector("#wrapper").innerHTML = "<h1>Home</h1>";
// }

function loadDOMHome() { //déclare la fonction
  loadWrapperContent("/pages/home/home.html")
}

 /**
  * fonction de chargement
   * @param {string} pageUrl url de la oage html a changé par appel http
   * @returns {void} aucun retour
   */

const loadWrapperContent=(pageUrl)=>{
  const promise = fetch(pageUrl).then((response) => { //promise = fetch() retourne une Promise, stocker dans promise et attend la réponse
    return response.text(); //et attend la réponse en texte
  });

  promise.then((html) => { //Quand la réponse en texte est terminé
    wrapper.innerHTML = html; //insert le html dans le wrapper.
  });
}
