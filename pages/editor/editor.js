export const loadImageSelecOptions= (images) => {
  const select = document.forms["meme-form"]["imageId"];
  select.innerHTML="";

images.forEach((image) => {
  const opt = document.createElement("option");

  opt.value = image.id;
  opt.textContent = image.name;

  select.appendChild(opt);
});
}