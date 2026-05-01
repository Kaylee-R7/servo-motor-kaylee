input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Surprised)
    servos.P0.setAngle(0)
    basic.pause(2000)
    servos.P0.setAngle(90)
    basic.showIcon(IconNames.Yes)
})
servos.P0.setRange(0, 180)
servos.P0.setAngle(90)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
