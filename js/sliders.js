$(document).ready(function () {
  const $slides = $(".cd-slider > li");
  const $navItems = $(".cd-slider-navigation li");
  const slideCount = $slides.length;
  const $contentWrapper = $(".cd-slider-wrapper");
  let currentIndex = 0;

  // Ajusta a altura do wrapper para caber todos os slides
  function adjustWrapperHeight() {
    const maxHeight = Math.max(...$slides.map((_, el) => $(el).outerHeight()).get());
    $contentWrapper.css("height", maxHeight);
  }

  // Atualiza o Slider
  function updateSlider(index) {
    $slides.removeClass("visible").eq(index).addClass("visible");
    $navItems.removeClass("selected").eq(index).addClass("selected");
    adjustWrapperHeight();
  }

  // Clique na Navegação
  $navItems.on("click", function () {
    const newIndex = $(this).index();
    if (newIndex !== currentIndex) {
      currentIndex = newIndex;
      updateSlider(newIndex);
    }
  });

  // Mostrar o primeiro slide ao carregar
  updateSlider(0);

  // Ajustar altura ao redimensionar a janela
  $(window).on("resize", adjustWrapperHeight);
});