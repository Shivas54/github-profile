window.onload = () => {
  const boatWrapper = document.getElementById('boat-wrapper');
  const bubble = document.getElementById('speech-bubble');

  // Only run the boat animation if the boat elements exist on the page
  if (boatWrapper && bubble) {
    setTimeout(() => { boatWrapper.style.left = '40%'; }, 500);

    setTimeout(() => {
      bubble.style.opacity = '1';
      bubble.innerText = 'Hi!';
      bubble.style.transform = 'translateY(0)';
      
      // Trigger the hand wave shortly after "Hi!"
      setTimeout(() => {
        const wavingArm = document.getElementById('waving-arm');
        if (wavingArm) {
          wavingArm.classList.add('wave-action');
        }
      }, 200);

    }, 3500);

    setTimeout(() => {
      bubble.innerText = 'About Me';
      boatWrapper.classList.add('wiggle');
    }, 5500);

    boatWrapper.addEventListener('click', () => {
      window.location.href = 'about.html';
    });
  }
};
