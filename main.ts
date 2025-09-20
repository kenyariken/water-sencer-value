let val = 0
basic.forever(function () {
    val = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(val)
    basic.pause(500)
})
