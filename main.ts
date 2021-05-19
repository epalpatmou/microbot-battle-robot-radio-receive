radio.onReceivedNumberDeprecated(function (receivedNumber) {
    if (receivedNumber == 0) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 100)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        motobit.enable(MotorPower.Off)
    } else if (receivedNumber == 1) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 100)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
        basic.showLeds(`
            . # # # #
            . . . # #
            . . # . #
            . # . . #
            . # . . .
            `)
        motobit.enable(MotorPower.Off)
    } else if (receivedNumber == 2) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 100)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 100)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        motobit.enable(MotorPower.Off)
    } else if (receivedNumber == 3) {
        motobit.enable(MotorPower.On)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 100)
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . # .
            `)
        motobit.enable(MotorPower.Off)
    } else if (receivedNumber == 10) {
        for (let index = 0; index < 5; index++) {
            pins.servoWritePin(AnalogPin.P15, 90)
            pins.servoWritePin(AnalogPin.P16, 90)
            basic.pause(100)
            pins.servoWritePin(AnalogPin.P15, 45)
            pins.servoWritePin(AnalogPin.P16, 45)
            basic.pause(100)
        }
    }
    basic.clearScreen()
})
radio.setGroup(1)
motobit.invert(Motor.Left, true)
motobit.invert(Motor.Right, true)
basic.forever(function () {
	
})
