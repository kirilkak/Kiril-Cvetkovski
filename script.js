const change = () => {
  const subLangs = document.getElementById("sub");
  const lang = document.getElementById("language");
  if (subLangs.style.visibility == "visible") {
    subLangs.style.visibility = "hidden";
  } else {
    subLangs.style.visibility = "visible";
  }
  if (lang.style.border == "1px solid black") {
    lang.style.border = "1px  black";
  } else {
    lang.style.border = "1px solid black";
  }
};
const awardPictures = (e) => {
  const identification = e.target.id;
  if (identification === "inter") {
    items = ["images/cagan.jpg", "images/cigan.jpg"];
    newItems = JSON.stringify(items);
    localStorage.setItem("path", newItems);
    window.location.href = "pictures.html";
  }
  if (identification === "kjus") {
    items = ["images/kago.jpg", "images/elstriper.jpg"];
    newItems = JSON.stringify(items);
    localStorage.setItem("path", newItems);
    window.location.href = "pictures.html";
  }
  if (identification === "teto") {
    items = ["images/lana.jpg", "images/kaka.jpg"];
    newItems = JSON.stringify(items);
    localStorage.setItem("path", newItems);
    window.location.href = "pictures.html";
  }
  if (identification === "meta") {
    items = ["images/lakaka.jpg"];
    newItems = JSON.stringify(items);
    localStorage.setItem("path", newItems);
    window.location.href = "pictures.html";
  }
  if (identification === "soli") {
    items = ["images/ficka.jpg", "images/bela.jpg"];
    newItems = JSON.stringify(items);
    localStorage.setItem("path", newItems);
    window.location.href = "pictures.html";
  }
  if (identification === "metaF") {
    items = ["images/roky.jpg"];
    newItems = JSON.stringify(items);
    localStorage.setItem("path", newItems);
    window.location.href = "pictures.html";
  }
  if (identification === "balkan") {
    items = ["images/kiko.jpg"];
    newItems = JSON.stringify(items);
    localStorage.setItem("path", newItems);
    window.location.href = "pictures.html";
  }
};

const elements = localStorage.getItem("path");
const picture = document.getElementById("pictures");
if (elements != "here") {
  if (picture) {
    if (elements.includes("]")) {
      const newEl = JSON.parse(elements);
      newEl.map((el) => {
        let img = document.createElement("img");
        img.src = el;
        picture.appendChild(img);
      });
    } else {
      const newEl = elements;
      newEl.map((el) => {
        let img = document.createElement("img");
        img.src = el;
        picture.appendChild(img);
      });
    }
  }
}

function redirect() {
  window.location.href = "https://www.instagram.com/kirilcvetkovski8/";
}
localStorage.setItem(
  "language",
  `english <img src="/images/angle-down-solid.svg" alt="" />`
);

function toLang(e) {
  const id = e.target.id;
  console.log(id);
  localStorage.setItem(
    "language",
    id + `<img src="/images/angle-down-solid.svg" alt="" />`
  );
  window.open(`/${id}.html`, "_self");
  localStorage.setItem("path", ["here"]);
  localStorage.setItem("vid", ["here"]);
}
