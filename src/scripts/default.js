const ripples = document.querySelectorAll('.ripples');

const createCallback = (ripple, onPlay) => entries => {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting && !ripple.classList.contains('ripples_play')) {
      ripple.classList.add('ripples_play');
      onPlay(entry.target);
    }
  });
};

ripples.forEach(ripple => {
  const target = ripple.classList.contains('ripples_position_bottom')
    ? ripple.parentElement.lastElementChild
    : ripple.parentElement;

  console.log(target, ripple);

  let observer;

  const onPlay = target => {
    observer.unobserve(target);
  };

  observer = new IntersectionObserver(createCallback(ripple, onPlay), {
    rootMargin: '500px',
  });
  observer.observe(target);
});
