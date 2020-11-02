vec = [
  "imagenes/pic5.jpg",
  "imagenes/pic6.jpg",
  "imagenes/pic7.jpg",
  "imagenes/pic8.png",
];

const btn = document.querySelectorAll(".btn");

function cambiar(pos) {
  document.getElementById("imagen").src = vec[pos - 1];
  btn[pos - 1].className = "btn activar";

  for (var i = 0; i < btn.length; i++) {
    if (i != pos - 1) {
      btn[i] .className = "btn";
    }
  }
}
