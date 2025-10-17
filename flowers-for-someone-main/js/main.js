
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titleElement = document.getElementById('title');

    function typeText(text, done) {
      titleElement.innerHTML = '';
      const chars = text.split('');
      let i = 0;
      function step() {
        if (i < chars.length) {
          titleElement.innerHTML += chars[i];
          i++;
          setTimeout(step, 300);
        } else if (typeof done === 'function') {
          done();
        }
      }
      step();
    }

    // First: "5 month anniversary", then: "I LOVE U"
    typeText('5 month anniversary', () => {
      setTimeout(() => {
        typeText('I LOVE U');
      }, 600);
    });

    clearTimeout(c);
  }, 1000);
};