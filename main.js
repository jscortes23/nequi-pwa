const $ = (element) => document.querySelector(element)
const $$ = (element) => document.querySelectorAll(element)

/* Views */
const viewStart = $('.view-start')
const viewHerePickMeUp = $('.view-here-pick-me-up')
const viewMylocation = $('.view-my-location')
const viewWhereIGo = $('.view-where-i-go')
const viewMyDestiny = $('.view-my-destiny')
const viewRoute = $('.view-route')
const viewWithDestiny = $('.view-with-destiny')

/* Buttons */
const btnGo = $('.view-start .btn-lg-xxx')
const btnsSuggestedGo = $$('.view-here-pick-me-up .slider__item')
const btnHere = $('.view-my-location .btn-lg-xxx.btn-green')
const btnsSuggestedHere = $$('.view-where-i-go .slider__item')
const btnGoingThere = $('.view-my-destiny .btn-lg-xxx.btn-dark-blue')
const btnOrderTaxi= $('.view-route .btn-lg-xxx.btn-green')


function nextView(viewCurrent, viewNext) {
    viewCurrent.classList.add('hidden')
    viewNext.classList.remove('hidden')
}

btnGo.addEventListener('click', () => {
    nextView(viewStart, viewHerePickMeUp)
})

btnsSuggestedGo.forEach( (btn) => {
    btn.addEventListener('click', () => {
        nextView(viewHerePickMeUp, viewMylocation)
    })
})

btnHere.addEventListener('click', () => {
    nextView(viewMylocation, viewWhereIGo)
})

btnsSuggestedHere.forEach( (btn) => {
    btn.addEventListener('click', () => {
        nextView(viewWhereIGo, viewMyDestiny)
    })
})

btnGoingThere.addEventListener('click', () => {
    nextView(viewMyDestiny, viewRoute)
})

btnOrderTaxi.addEventListener('click', () => {
    nextView(viewRoute, viewWithDestiny)
})