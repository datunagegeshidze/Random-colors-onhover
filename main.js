let container = document.querySelector(".container");
for (let i = 0; i < 1296; i++) {
  let kubi = document.createElement("div");
  container.appendChild(kubi);
  kubi.classList.add("kubiki");
  kubi.addEventListener("mouseover", function () {
    kubi.style.backgroundColor =
      "rgb(" +
      Math.round(Math.random() * 256) +
      "," +
      Math.round(Math.random() * 256) +
      "," +
      Math.round(Math.random() * 256) +
      ")";
  });
  kubi.addEventListener("mouseout" , function(){
    kubi.style.backgroundColor = "grey"
    kubi.style.transition = "all 2s"
  })
}
