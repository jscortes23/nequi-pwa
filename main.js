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
const viewFoundTaxi = $('.view-found-taxi')
const viewIHaveArrived = $('.view-i-have-arrived')
const viewCancelTrip = $('.view-cancel-trip')
const viewOptionCancelTrip= $('.view-option-cancel-trip')
const viewCancelTripSuccessful = $('.view-cancel-trip__successful')
const viewRouteDriverInfo = $('.view-route-driver-info')
const viewFinishedTrip = $('.view-finished-trip')
const viewEcoTaxi = $('.view-eco-taxi')

/* Buttons */
const btnGo = $('.view-start .btn-lg-xxx')
const btnsSuggestedGo = $$('.view-here-pick-me-up .slider__item')
const btnHere = $('.view-my-location .btn-lg-xxx.btn-green')
const btnsSuggestedHere = $$('.view-where-i-go .slider__item')
const btnGoingThere = $('.view-my-destiny .btn-lg-xxx.btn-dark-blue')
const btnOrderTaxi= $('.view-route .btn-lg-xxx.btn-green')
const btnCancelTaxi= $('.view-with-destiny .btn-alternative')
const btnCloseInfo= $('.view-found-taxi .btn.btn-green.p-14-18')
const btnFoundTaxi= $('.view-i-have-arrived .btn.btn-sm.btn-green')
const btnOrderAfter= $('.view-cancel-trip .btn.btn-sm.btn-green')
const btnCancelTrip= $('.view-option-cancel-trip .btn.btn-green')
const btnNextView= $('.view-cancel-trip__successful .btn')
const btnCloseInfoTaxi= $('.view-route-driver-info .btn.btn-green.p-14-18')
const btnBack= $('.view-finished-trip .btn')

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

btnCancelTaxi.addEventListener('click', () => {
    nextView(viewWithDestiny, viewFoundTaxi)
})

btnCloseInfo.addEventListener('click', () => {
    nextView(viewFoundTaxi, viewIHaveArrived)
})

btnFoundTaxi.addEventListener('click', () => {
    nextView(viewIHaveArrived, viewCancelTrip)
})

btnOrderAfter.addEventListener('click', () => {
    nextView(viewCancelTrip, viewOptionCancelTrip)
})

btnCancelTrip.addEventListener('click', () => {
    nextView(viewOptionCancelTrip, viewCancelTripSuccessful)
})

btnNextView.addEventListener('click', () => {
    nextView(viewCancelTripSuccessful, viewRouteDriverInfo)
})

btnCloseInfoTaxi.addEventListener('click', () => {
    nextView(viewRouteDriverInfo, viewFinishedTrip)
})

btnBack.addEventListener('click', () => {
    nextView(viewFinishedTrip, viewEcoTaxi)
})