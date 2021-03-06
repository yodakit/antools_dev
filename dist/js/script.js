window.addEventListener('DOMContentLoaded', () => {
    //spoiler
    const arrowSpoiler = document.querySelector('.arrow__min'),
          spoiler = document.querySelector('.menu__spoiler-item');


    function showSpoiler() {
        arrowSpoiler.addEventListener('click', () => {
            arrowSpoiler.classList.toggle('arrow__min_active');
            spoiler.classList.toggle('menu__spoiler-item_active');
        });
    }
    
    showSpoiler();

    //burger
    const menu = document.querySelector('.menu__body'),
          burger = document.querySelector('.burger');

    function showBurgerMenu() {
        burger.addEventListener('click', () => {
            document.body.classList.toggle('_lock');
            menu.classList.toggle('menu__body_active');
            burger.classList.toggle('_active');
        });
    }

    showBurgerMenu();

    //favorite
    const likeIcon = document.querySelectorAll('.card__like'),
          fileIcon = document.querySelectorAll('.card__file'); 

    function selectFavorite(elem) {
        elem.forEach((item) => {
            item.addEventListener('click', (event) => {
                event.target.classList.toggle('_active');
            });
        });
    }

    selectFavorite(likeIcon);
    selectFavorite(fileIcon);

    //slider
    const prev = document.querySelector('.slider__back'),
          next = document.querySelector('.slider__next'),
          sliderItem = document.querySelector('.slider__item'),
          sliderInner = document.querySelector('.slider__inner'),
          slides = document.querySelectorAll('.slider__slides'),
          width = window.getComputedStyle(sliderItem).width,
          sliderSteps = document.querySelectorAll('.slider__step'),
          descr = document.querySelectorAll('.slider__descr'),
          pageWidht = document.documentElement.scrollWidth,
          imgMember = document.querySelectorAll('.slider__img'),
          stepsCount = document.querySelector('.slider__count'),
          widthValue = +width.slice(0, width.length - 2);

    let count = 0,
        offset = 0;

    sliderInner.style.width = 100 * slides.length + '%';
    sliderInner.style.transition = '0.5s all';

    sliderItem.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    if (pageWidht < 575) {
        setMargin(count);
    }
    setSliderStep(count);

    next.addEventListener('click', () => {
        if (offset === widthValue * (slides.length - 1)) {
            offset = 0;
            count = 0;
        } else {
            offset += widthValue;
            count++;
        }
        if (pageWidht < 575) {
            setMargin(count);
        }
        sliderInner.style.transform = `translateX(-${offset}px)`;
        setSliderStep(count);
    });

    prev.addEventListener('click', () => {
        if (offset === 0) {
            offset = widthValue * (slides.length - 1);
            count = slides.length - 1;
        } else {
            offset -= widthValue;
            count--;
        }
        if (pageWidht < 575) {
            setMargin(count);
        }
        sliderInner.style.transform = `translateX(-${offset}px)`;
        setSliderStep(count);
    });

    sliderSteps.forEach(step => {
        step.addEventListener('click', (event) => {
            offset = widthValue * (event.target.dataset.slide - 1);

            sliderInner.style.transform = `translateX(-${offset}px)`;

            setSliderStep(event.target.dataset.slide - 1);
        });
    });
    
    function setSliderStep(index) {
        sliderSteps.forEach(step => {
            step.classList.remove('slider__step_active');
        });
        sliderSteps[index].classList.add('slider__step_active');
    }

    function setMargin(index) {
        let margin = 0;
        const heightImg = window.getComputedStyle(imgMember[index]).height;
        const heightDescr = window.getComputedStyle(descr[index]).height;

        margin = (+heightDescr.slice(0, heightDescr.length - 2)) + (+heightImg.slice(0, heightImg.length - 2));

        sliderItem.style.height = `${margin + 40}px`;
        stepsCount.style.top = `${margin}px`;
    }

    //load-more

    const loadMoreBtn = document.querySelector('.btn_big'),
          cardParent = document.querySelector('.tools__cards');


    class Card {
        constructor(src, alt, title, subtitle, descr,) {
            this.src = src;
            this.title = title;
            this.subtitle = subtitle;
            this.alt = alt;
            this.descr = descr;
        }

        render() {
            cardParent.insertAdjacentHTML("beforeEnd", `
                <div class="tools__card card">
                    <div class="card__header">
                        <img src="${this.src}" alt="${this.alt}" class="card__img">
                        <div class="card__name">
                            <h3 class="card__title card__title_figma">${this.title}</h3>
                            <h4 class="card__price">${this.subtitle}</h4>
                        </div>
                    </div>
                    <p class="card__descr">${this.descr}</p>
                    <div class="card__footer">
                        <div class="card__icon">
                            <div class="card__like icon-heart"></div>
                            <div class="card__file icon-file"></div>
                        </div>
                        <button class="card__btn btn btn__card">Visit</button>
                    </div>
                </div>
            `);  
        }
    }

    loadMoreBtn.addEventListener('click', () => {
        new Card(
            "img/popular-tools/figma.svg",
            "figma",
            'FIGMA',
            "Free",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ).render();
        new Card(
            "img/popular-tools/figma.svg",
            "figma",
            'FIGMA',
            "Free",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ).render();
        new Card(
            "img/popular-tools/figma.svg",
            "figma",
            'FIGMA',
            "Free",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        ).render();
    });

});