
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('mousemove', e => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;
    const offsetX = deltaX * 10; // Adjust the scale factor as needed
    const offsetY = deltaY * 10; // Adjust the scale factor as needed
    const scale = 1.2;
    const img = button.querySelector('img');
    img.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
  });

  button.addEventListener('mouseleave', () => {
    const img = button.querySelector('img');
    img.style.transform = 'translate(0, 0) scale(1)';
  });
});

const btn = document.querySelector('.btn');

btn.addEventListener('mousemove', e => {
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  btn.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.8) 100%)`;
});

btn.addEventListener('mouseleave', () => {
  btn.style.backgroundImage = '';
});