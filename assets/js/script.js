function openPopup(src, caption) {
    const popupOverlay = document.getElementById('image-popup');
    const popupImage = document.getElementById('popup-image');
    const popupCaption = document.querySelector('.image-popup-caption');

    popupImage.src = src;
    popupCaption.textContent = caption;
    popupOverlay.style.display = 'flex';

    const content = document.querySelector('.image-popup-content');
    let isDragging = false;
    let startX, startY, scrollLeft, scrollTop;

    content.addEventListener('mousedown', (e) => {
        isDragging = true;
        content.classList.add('is-dragging');
        startX = e.pageX - content.offsetLeft;
        startY = e.pageY - content.offsetTop;
        scrollLeft = content.scrollLeft;
        scrollTop = content.scrollTop;
        e.preventDefault();
    });

    content.addEventListener('mouseleave', () => {
        isDragging = false;
        content.classList.remove('is-dragging');
    });

    content.addEventListener('mouseup', () => {
        isDragging = false;
        content.classList.remove('is-dragging');
    });

    content.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const x = e.pageX - content.offsetLeft;
        const y = e.pageY - content.offsetTop;
        const walkX = (x - startX) * 2; // Pan speed
        const walkY = (y - startY) * 2;
        content.scrollLeft = scrollLeft - walkX;
        content.scrollTop = scrollTop - walkY;
    });
}

function closePopup() {
    document.getElementById('image-popup').style.display = 'none';
}