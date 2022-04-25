const petsBase = [
    {

        "id": "1",
        "name": "Jennifer",
        "img": "./assets/images/jpg/pets-jennifer.jpg",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "2",
        "name": "Sophia",
        "img": "./assets/images/jpg/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "3",
        "name": "Woody",
        "img": "./assets/images/png/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "id": "4",
        "name": "Scarlett",
        "img": "./assets/images/jpg/pets-scarlet.jpg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "5",
        "name": "Katrine",
        "img": "./assets/images/png/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "6",
        "name": "Timmy",
        "img": "./assets/images/jpg/pets-timmy.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "id": "7",
        "name": "Freddie",
        "img": "./assets/images/jpg/pets-freddie.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "8",
        "name": "Charly",
        "img": "./assets/images/jpg/pets-charly.jpg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
]


console.log(petsBase)

const burgerBtnAll = document.querySelectorAll('.burger__btn')
const burgerMenu = document.querySelector('.burger')
const burgerNav = document.querySelector('.header__menu--burger')
const burgerOverlay = document.querySelector('.burger__overlay')
const headerLinkBurger = document.querySelectorAll('.header__link-burger')
const sliderLinePets = document.querySelector('.slider__line--ourpets')
const btnFirst = document.querySelector('.btn--our-pets-first')
const btnPrev = document.querySelector('.btn--our-pets-prev')
const btnNext = document.querySelector('.btn--our-pets-next')
const btnLast = document.querySelector('.btn--our-pets-last')


function burgerToggle(event) {
    body.classList.toggle('lock')
    burgerMenu.classList.toggle('run')
    burgerOverlay.classList.toggle('run')
    burgerNav.classList.toggle('active')
}




burgerBtnAll.forEach((btn) => {
    btn.classList.toggle('btn-burger-active')
    btn.addEventListener('click', (e) => {
        burgerToggle(e)
    })

})

burgerOverlay.addEventListener('click', (e) => {
    burgerToggle(e)
})


headerLinkBurger.forEach(link => link.addEventListener('click', (e) => burgerToggle(e)))


// =========================SLIDER==================================
let offset = 1080 // смещение от левого края
let move = 550


if (window.matchMedia('(max-width: 1279.98px)').matches) {
    alert('max-width: 1279.98px!')
    offset = 540
    move = 540

}

if (window.matchMedia('(max-width: 767.98px)').matches) {
    alert('max-width: 767.98px!')
    offset = 270
    move = 270

}



// document.querySelector('.btn-arrow--right').addEventListener('click', function () {
//     generateCards()
//     offset += move
//     sliderLine.style.left = -offset + 'px'
// })

// document.querySelector('.btn-arrow-left').addEventListener('click', function () {
//     // generateCards()
//     offset -= move

//     sliderLine.style.left = -offset + 'px'


// })

btnNext.addEventListener( 'click', () => {
    offset += move
    sliderLinePets.style.left = -offset + 'px'
})

btnPrev.addEventListener( 'click', () => {
    offset -= move
    sliderLinePets.style.left = -offset + 'px'
})



function generateCards() {

    //     sliderLine.insertAdjacentHTML('afterbegin',
    //         '<div class="slider__item"><img src = "./assets/images/png/pets-katrine.png" alt = "beautiful cat" class= "slider__img"><p class="slider__text">Katrine</p><a href="#" class="slider__link btn">Learn more</a></div>')
    //         sliderLine.insertAdjacentHTML('afterbegin',
    //         '<div class="slider__item"><img src = "./assets/images/png/pets-katrine.png" alt = "beautiful cat" class= "slider__img"><p class="slider__text">Katrine</p><a href="#" class="slider__link btn">Learn more</a></div>')
    //         sliderLine.insertAdjacentHTML('afterbegin',
    //         '<div class="slider__item"><img src = "./assets/images/png/pets-katrine.png" alt = "beautiful cat" class= "slider__img"><p class="slider__text">Katrine</p><a href="#" class="slider__link btn">Learn more</a></div>')

    for (let pet of petsBase) {
        sliderLine.insertAdjacentHTML('beforeend',
            `<div class="slider__item"><img src = ${pet['img']} alt = "pet" class= "slider__img"><p class="slider__text">${pet['name']}</p><a href="#" class="slider__link btn">Learn more</a></div>`)

    }

}

