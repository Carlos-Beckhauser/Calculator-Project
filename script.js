const handleclick = () => {
  const calc = $(".calculator");

  calc.css("position", "absolute");
  calc.css("left", "34vw");
  calc.css("top", "18vh");
  calc.css("width", "39rem");
  calc.css("height", "40rem");
  calc.css("backgroundColor", "#E1E1E1");
};

const startButton = () => {
  const el = $("#start-btn");
  el.on("click", () => {
    $(".start-message").slideUp();
    $(el).slideUp();
    $(calc).slideDown();
  });
};

$(document).ready(() => {
  startButton();
});
