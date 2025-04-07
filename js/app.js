window.addEventListener('load', () => {
    const photos = document.querySelectorAll('.photo img');
    const viewer = document.getElementById('viewer');
    const closeBtn = document.getElementById('closeBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
  
    let currentIndex = 0;
    const imageList = Array.from(photos);
  
    function showImage(index) {
      const img = imageList[index];
      const rect = img.getBoundingClientRect();
      const clone = img.cloneNode();
  
      clone.classList.add('expanded-img');
      setTimeout(() => clone.classList.add('show'), 10); 
      clone.style.top = rect.top + 'px';
      clone.style.left = rect.left + 'px';
      clone.style.width = rect.width + 'px';
      clone.style.height = rect.height + 'px';
  
      viewer.innerHTML = '';
      viewer.appendChild(closeBtn);
      viewer.appendChild(prevBtn);
      viewer.appendChild(nextBtn);
      viewer.appendChild(clone);
      viewer.classList.add('active');
  
      requestAnimationFrame(() => {
        clone.style.top = '50%';
        clone.style.left = '50%';
        clone.style.transform = 'translate(-50%, -50%)';
        clone.style.width = '90vw';
        clone.style.height = 'auto';
      });
    }
  
    photos.forEach((img, index) => {
      img.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
      });
    });
  
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % imageList.length;
      showImage(currentIndex);
    });
  
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
      showImage(currentIndex);
    });
  
    closeBtn.addEventListener('click', () => viewer.classList.remove('active'));
  
    viewer.addEventListener('click', (e) => {
      if (e.target === viewer) viewer.classList.remove('active');
    });
  });
  