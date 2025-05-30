radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
    basic.showString("R")
    basic.pause(100)
    basic.clearScreen()
})
radio.setGroup(42)
