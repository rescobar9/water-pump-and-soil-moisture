let Reading = 0
led.setBrightness(64)
basic.clearScreen()
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    Reading = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P0, 0)
    led.plotBarGraph(
    Reading,
    1023
    )
    basic.showNumber(Reading)
    serial.writeValue("Value", Reading)
    basic.pause(5000)
    basic.clearScreen()
    if (Reading < 500) {
        basic.showIcon(IconNames.Umbrella)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(10000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(5000)
        basic.clearScreen()
    }
})
