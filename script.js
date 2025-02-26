@ -0,0 +1,19 @@
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', () => {
    const container = noBtn.parentElement;
    const containerRect = container.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const offset = 50; // Distance to move the button
    let newTop = Math.random() * (containerRect.height - noBtnRect.height);
    let newLeft = Math.random() * (containerRect.width - noBtnRect.width);

    // Ensure the button doesn't move out of the container
    newTop = Math.min(newTop, containerRect.height - noBtnRect.height - offset);
    newLeft = Math.min(newLeft, containerRect.width - noBtnRect.width - offset);

    noBtn.style.position = 'absolute';
    noBtn.style.top = '${newTop}px';
    noBtn.style.left = '${newLeft}px';
});
