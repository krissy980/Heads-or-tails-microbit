let Heads_Wins = 0
let Tails_Wins = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # . . . #
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # . . . #
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    if (Math.randomBoolean()) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
        Heads_Wins += 1
    } else {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        Tails_Wins += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (Heads_Wins > Tails_Wins) {
        basic.showString("Heads won")
    } else if (Heads_Wins < Tails_Wins) {
        basic.showString("Tails won")
    } else {
        basic.showString("Draw")
    }
})
