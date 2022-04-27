const petsBase = [
    {

        "id": "0",
        "name": "Jennifer",
        "img": "../../assets/images/jpg/pets-jennifer.jpg",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "1",
        "name": "Sophia",
        "img": "../../assets/images/jpg/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "2",
        "name": "Woody",
        "img": "../../assets/images/png/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "id": "3",
        "name": "Scarlett",
        "img": "../../assets/images/jpg/pets-scarlet.jpg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "4",
        "name": "Katrine",
        "img": "../../assets/images/png/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "5",
        "name": "Timmy",
        "img": "../../assets/images/jpg/pets-timmy.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "id": "6",
        "name": "Freddie",
        "img": "../../assets/images/jpg/pets-freddie.jpg",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "id": "7",
        "name": "Charly",
        "img": "../../assets/images/jpg/pets-charly.jpg",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }

]
// =========================UI ELEM=====================================

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
const currentPageElem = document.querySelector('.current-page')
const modalCloseBtn = document.querySelector('.modal-pet__close-icon')



// =========================BURGER==================================

function burgerToggle(event) {
    body.classList.toggle('lock')
    burgerMenu.classList.toggle('run')
    burgerOverlay.classList.toggle('run')
    burgerNav.classList.toggle('active')
}

burgerBtnAll.forEach((btn) => {
    
    btn.addEventListener('click', (e) => {
        burgerToggle(e)
        btn.classList.toggle('btn-burger-active')
    })

})

burgerOverlay.addEventListener('click', (e) => {
    burgerToggle(e)
    
})


headerLinkBurger.forEach(link => link.addEventListener('click', (e) => burgerToggle(e)))



// =========================PAGINATOR==================================



let currentPage = 1
let itemsToShow = 8
let startItem = 0
const amountItems = 48
let pages = amountItems / itemsToShow
let randomIdArray = []

if (window.matchMedia('(max-width: 1279.98px)').matches) {
    itemsToShow = 6
    pages = amountItems / itemsToShow
}

if (window.matchMedia('(max-width: 767.98px)').matches) {
    itemsToShow = 3
    pages = amountItems / itemsToShow
}

createRandomIdArray()

function createRandomIdArray() {

    for (let i = 0; i < pages; i++) {
        randomIdArray.push([])
    }
    // debugger
    randomIdArray.forEach((array, index) => {

        for (let i = 0; array.length < itemsToShow; i++) {
            let randomId = Math.floor(Math.random() * 8)
            // debugger
            if (!array.includes(randomId)) {

                if (itemsToShow == 3 && index != 0) {
                    !randomIdArray[index - 1].includes(randomId) ? array.push(randomId) : ''
                } else array.push(randomId)

                
            }

        }
    })

    randomIdArray = randomIdArray.flat()

    console.log(randomIdArray)

}



if (currentPage === 1) {
    btnFirst.setAttribute('disabled', 'disabled')
    btnPrev.setAttribute('disabled', 'disabled')
}


generateCards()


btnNext.addEventListener('click', () => {
    startItem += itemsToShow
    currentPage++
    currentPageElem.innerHTML = currentPage
    btnFirst.removeAttribute('disabled')
    btnPrev.removeAttribute('disabled')
    if (currentPage === pages) {
        btnLast.setAttribute('disabled', 'disabled')
        btnNext.setAttribute('disabled', 'disabled')
    }
    generateCards()
})

btnPrev.addEventListener('click', () => {
    startItem -= itemsToShow
    currentPage--
    currentPageElem.innerHTML = currentPage
    btnLast.removeAttribute('disabled')
    btnNext.removeAttribute('disabled')

    if (currentPage === 1) {
        btnFirst.setAttribute('disabled', 'disabled')
        btnPrev.setAttribute('disabled', 'disabled')
    }

    generateCards()
})

btnLast.addEventListener('click', (e) => {
    startItem = petsBase.length - itemsToShow
    currentPage = pages
    currentPageElem.innerHTML = currentPage

    btnLast.setAttribute('disabled', 'disabled')
    btnNext.setAttribute('disabled', 'disabled')

    btnFirst.removeAttribute('disabled')
    btnPrev.removeAttribute('disabled')
    generateCards()

})

btnFirst.addEventListener('click', (e) => {
    startItem = 0
    currentPage = 1
    currentPageElem.innerHTML = currentPage

    btnFirst.setAttribute('disabled', 'disabled')
    btnPrev.setAttribute('disabled', 'disabled')

    btnLast.removeAttribute('disabled')
    btnNext.removeAttribute('disabled')
    generateCards()
})




function generateCards() {
    sliderLinePets.innerHTML = ''

    for (let i = startItem; i < startItem + itemsToShow; i++) {
        let id = randomIdArray[i]
        // debugger
        sliderLinePets.insertAdjacentHTML('beforeend',
            `<div class="slider__item slider__item--our-pets"><img src = ${petsBase[id]['img']} alt = "pet" class= "slider__img"><p class="slider__text">${petsBase[id]['name']}</p><button id=${petsBase[id]["id"]} class="slider__link btn">Learn more</button></div>`)
    }

    let cardLink = document.querySelectorAll('.slider__link')
    cardLink.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let petId = btn.getAttribute("id")
            body.classList.toggle('lock')
            for (let elem of petsBase) {
                if (elem['id'] == petId) {

                    document.querySelector('.modal-overlay').style.display = 'flex'
                    document.querySelector('.modal-pet__title').innerHTML = elem['name']
                    document.querySelector('.modal-pet__subtitle').innerHTML = `${elem['type']} - ${elem['breed']}`
                    document.querySelector('.modal-pet__text').innerHTML = elem['description']
                    document.querySelector('.modal-pet__item-description-age').innerHTML = elem['age']
                    document.querySelector('.modal-pet__item-description-ino').innerHTML = elem['inoculations']
                    document.querySelector('.modal-pet__item-description-dis').innerHTML = elem['diseases']
                    document.querySelector('.modal-pet__item-description-par').innerHTML = elem['parasites']
                    document.querySelector('.modal-pet__picture').src = elem['img']

                }
            }
        })
    })

}

// =======================MODAL===============================

modalCloseBtn.addEventListener('click', (e) => {

    e.stopPropagation()
    document.querySelector('.modal-overlay').style.display = 'none'
    body.classList.toggle('lock')

})

document.querySelector('.modal-overlay').addEventListener('click', (e) => {
    e.stopPropagation()
    document.querySelector('.modal-overlay').style.display = 'none'
    body.classList.toggle('lock')
})









