document.querySelector('.toggle-switch').addEventListener('change', (event) => {
    console.log('log');
    if (event.target.checked) {
      document.documentElement.className = 'dark';
    } else {
      document.documentElement.className = 'light';
    }
  });
  