document.addEventListener('DOMContentLoaded', function() {
            const sliderImages = document.getElementById('sliderImages');
            const nextButton = document.getElementById('nextButton');
            const dots = document.querySelectorAll('.dot');
            const imageCount = 3;
            let currentIndex = 0;
            
          
            function updateSlider(index) {
                sliderImages.style.transform = `translateX(-${index * 100}%)`;
                
                
                dots.forEach((dot, i) => {
                    if (i === index) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }
            
            
            function autoSlide() {
                currentIndex = (currentIndex + 1) % imageCount;
                updateSlider(currentIndex);
            }
            
           
            const intervalId = setInterval(autoSlide, 3000);
            
           
            nextButton.addEventListener('click', function() {
                clearInterval(intervalId); 
                updateSlider(currentIndex);
                
                setTimeout(() => {
                    clearInterval(intervalId);
                    setInterval(autoSlide, 3000);
                }, 5000);
            });
            
          
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    clearInterval(intervalId); 
                    currentIndex = parseInt(this.getAttribute('data-index'));
                    updateSlider(currentIndex);
                  
                    setTimeout(() => {
                        clearInterval(intervalId);
                        setInterval(autoSlide, 3000);
                    }, 5000);
                });
            });
        });