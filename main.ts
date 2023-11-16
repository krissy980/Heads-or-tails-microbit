input.onButtonPressed(Button.B, function () {
    if (Heads_Wins > Tails_Wins) {
        basic.showString("Heads won")
    } else if (Heads_Wins < Tails_Wins) {
        basic.showString("Tails won")
    } else {
        basic.showString("Draw")
    }
})
input.onGesture(Gesture.Shake, function () {
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
let Heads_Wins = 0
let Tails_Wins = 0
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.LoopingInBackground)
Tails_Wins = 0
Heads_Wins = 0
basic.showString("Shake to play!")
