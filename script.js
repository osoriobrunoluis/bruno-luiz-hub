// Dispara a animação de entrada após o primeiro frame.
// requestAnimationFrame garante que o estado inicial (opacity: 0)
// seja renderizado antes de aplicarmos .is-ready.
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.body.classList.add("is-ready");
  });
});
