$(document).ready(() => {
  let x = $(".calculator").css("display");
  const startButton = () => {
    const el = $("#start-btn");
    el.on("click", () => {
      $(".start-message").slideUp(200);
      $(el).slideUp();
      if (x == "none") {
        $(".calculator").slideDown(1500);
      }
    });
  };

  startButton();
});
