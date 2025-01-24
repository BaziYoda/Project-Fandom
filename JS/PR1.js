document.addEventListener('DOMContentLoaded', function() {
    const swiperContainer = document.querySelector('.swiper');
    const closeModal = document.querySelector('.close-button');
    const modal = document.getElementById('modal');
    const modalBody = modal.querySelector('.modal-body');
    const originalContent = modalBody.innerHTML; 

    swiperContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('custom-open-button-1')) {
            modalBody.innerHTML = originalContent; 
            modal.showModal();
        } else if (event.target.classList.contains('custom-open-button-2')) {
            // Set different content for button 2
            modalBody.innerHTML = `
                <p>The <strong>Gundam Epyon</strong> model kit is a stunning representation of the formidable mobile suit piloted by Zechs Merquise in "Gundam Wing." This 1/100 scale kit features impressive articulation and a design that stays faithful to the original, allowing you to recreate its iconic look and dynamic poses. With its distinctive heat rod and impressive mobility, the Gundam Epyon kit is a captivating addition to any Gunpla collection, perfect for both display and battles on your shelf.</p>
                <div class="row justify-content-space-evenly">
                    <img class="wing" src="img/epyon1.png">
                    <img class="wing" src="img/epyon2.png">
                    <img class="wing" src="img/epyon3.png">
                </div>
            `;
            modal.showModal();
        } else if (event.target.classList.contains('custom-open-button-3')) {
            // Set different content for button 3 if needed
            modalBody.innerHTML = `
            <p>The <strong>Gundam Tallgeese</strong> model kit offers fans and builders the chance to recreate the formidable Tallgeese mobile suit from the "Gundam Wing" series. This 1/100 scale kit boasts impressive articulation, intricate details, and the iconic design of the Tallgeese, making it a striking addition to any Gunpla collection. With its distinctively powerful appearance and sleek, menacing aesthetic, the Gundam Tallgeese model kit is a must-have for enthusiasts looking to showcase the might of this legendary mobile suit on their shelves.</p>
            <img class="wing" src="img/tallgeese1.png">
            <img class="wing" src="img/tallgeese2.png">
            <img class="wing" src="img/tallgeese3.png">
            `;
            modal.showModal();
        }
    });

    closeModal.addEventListener('click', () => {
        modal.close();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const startBuildButton = document.getElementById('startBuildButton');
    const followBuildButton = document.getElementById('followBuildButton');

    startBuildButton.addEventListener('click', function() {
        // Define the build links for each slide here
        const buildLinks = {
            'slide-1': 'https://www.youtube.com/watch?v=aBIacmIZ4OI',
            'slide-2': 'https://www.youtube.com/watch?v=5NaDtGkEPOY',
            'slide-3': 'https://www.youtube.com/watch?v=fsO2wj6_Lss'
        };

        const currentSlide = swiper.activeIndex; 
        const buildLink = buildLinks[`slide-${currentSlide + 1}`]; 
        if (buildLink) {
            window.open(buildLink, '_blank');
        }
    });

    followBuildButton.addEventListener('click', function() {
        
        const followLinks = {
            'slide-1': 'https://gundampros.com/product/mg-ver-ka-wing-gundam-zero-ew/',
            'slide-2': 'https://gundampros.com/product/mg-oz-13ms-gundam-epyon-ew/',
            'slide-3': 'https://gundampros.com/product/mg-oz-00ms-tallgeese-ew/'
        };

        const currentSlide = swiper.activeIndex; 
        const followLink = followLinks[`slide-${currentSlide + 1}`]; 
        if (followLink) {
            window.open(followLink, '_blank');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const startBuildButton = document.getElementById('startBuildButton');
    const followBuildButton = document.getElementById('followBuildButton');

    startBuildButton.addEventListener('click', function() {
        const buildLink = 'https://www.amazon.com/Bandai-Hobby-Gundam-Model-Scale/dp/B00O3RU8G2';
        window.open(buildLink, '_blank');
    });

    followBuildButton.addEventListener('click', function() {
        const followLink = 'https://www.youtube.com/watch?v=aBIacmIZ4OI';
        window.open(followLink, '_blank');
    });
});
