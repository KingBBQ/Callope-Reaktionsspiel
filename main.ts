let Richtig = 0
input.onButtonPressed(Button.A, function () {
    let Spielstand = 0
    Richtig = 1
    while (Richtig) {
        if (randint(0, 1) == 0) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            Richtig = 0
            for (let Index = 0; Index <= 9; Index++) {
                if (input.buttonIsPressed(Button.A)) {
                    Richtig = 1
                    break;
                } else if (input.buttonIsPressed(Button.B)) {
                    Richtig = 0
                    break;
                } else {
                    basic.pause(100)
                }
            }
        } else {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            Richtig = 0
            for (let Index = 0; Index <= 9; Index++) {
                if (input.buttonIsPressed(Button.B)) {
                    Richtig = 1
                    break;
                } else if (input.buttonIsPressed(Button.A)) {
                    Richtig = 0
                    break;
                } else {
                    basic.pause(100)
                }
            }
        }
        if (Richtig == 1) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . # . # .
                # . . . #
                . # # # .
                `)
        } else {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
        }
    }
    basic.pause(1000)
    basic.showString("Game Over! Punkte:")
    basic.pause(1000)
    basic.showString("" + (Spielstand))
})
