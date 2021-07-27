function bandScroll () {
    scroll = [
    "r/SeattlePunk",
    "Aurelio Voltaire",
    "Suffering For Kisses",
    "Hallows",
    "Mechanismus",
    "El Corazon, Seattle"
    ]
    random = randint(0, 3)
    if (random == 0) {
        scrollbit.setUpsideDown(Math.randomBoolean())
    } else {
        scrollbit.setUpsideDown(true)
    }
}
function dailyScroll () {
    random = randint(0, 17)
    scroll = [
    "think about how dumb the average person is... half of them are dumber than that",
    "@realRevJesus",
    "ask me about selling your soul",
    "OperationBrowniePockets.com",
    "I have seen the fnords",
    "I'm your huckleberry",
    "Nazi punks fuck off",
    "god is a crazy woman",
    "earth: mostly harmless",
    "we were somewhere around Barstow when the drugs began to take hold",
    "graffiti is beautiful, like a brick in the face of a cop",
    "have you tried turning it off and back on again?",
    "war is an ill thing, but 'twould be an ill world for weaponless dreamers if evil men were not now and then slain",
    "drinking my way through the Coronapocalypse",
    "those who dance are considered insane by those who cannot hear the music",
    "I must not fear - fear is the mind-killer",
    "'tis an ill wind that blows no minds",
    "there is no overkill; there is only 'open fire' and 'reload'",
    "hail eris",
    "time is an illusion; lunchtime, doubly so",
    "disembrace the Grayface",
    "disembrace the Greyface",
    "don't let THEM immanentize the eschaton",
    "ask me about Operation Brownie Pockets",
    "good fortune, like bad, can befall when least expected",
    "aren't you a little short for a stormtrooper?",
    "I brought some marshmallows - let's burn this world down",
    "I used to hope for the apocalypse; now there is no hope at all",
    "with one simple pill we cured unhappiness... and art",
    "nobody can fix the economy. nobody can be trusted with the nukes. nobody's perfect. vote for nobody",
    "you can't fight in here; this is the war room!",
    "castles don't have telephones, asshole",
    "opportunity is not a lengthy visitor",
    "my brain is trash and I live on the internet",
    "for further information, consult your pineal gland",
    "stupidity should be painful",
    "if at first you don't succeed, failure may be more your style",
    "those who make peaceful revolution impossible will make violent revolution ineveitable",
    "there is life before death",
    "the thing about Arsenal, is they always try to walk it in",
    "I am a leaf on the wind - watch how I soar",
    "you don't understand what I bring to friendship",
    "pubtoons.com",
    "that's just, like, your opinion, man",
    "this aggression will not stand, man",
    "I want to be the kind of person my dog thinks I am",
    "your purpose may be to serve as a warning to others",
    "megustalations",
    "whatever you do, do it well",
    "to live is an awfully big adventure",
    "a thing is not true just because a man dies for it",
    "stories of imagination tend to upset those without one",
    "coming back to where you started is not the same as never leaving",
    "too weird to live, too rare to die",
    "opportunity is not a lengthy visitor"
    ]
    if (random == 0) {
        scrollbit.setUpsideDown(Math.randomBoolean())
    } else {
        scrollbit.setUpsideDown(true)
    }
}
function eightBall () {
    scrollbit.setUpsideDown(true)
    basic.showNumber(8)
    scrollbit.scrollText("ASK A YES OR NO QUESTION", 66, 14)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    random = randint(0, 2)
    if (random == 0) {
        basic.showIcon(IconNames.No)
        scroll = [
        "very doubtful",
        "you've gotta be kidding",
        "not gonna happen",
        "outlook not so good",
        "yeah, and I'm the fuckin' pope",
        "my sources say no",
        "not a chance",
        "yeah, right",
        "not on your life",
        "you wish",
        "my reply is no",
        "don't count on it",
        "not in a million years",
        "no",
        "not just no, but hell no",
        "you must be joking",
        "the spirits say no",
        "obviously not"
        ]
    } else if (random == 1) {
        basic.showLeds(`
            . . . # .
            . . # . #
            . # . . .
            # . . . .
            . . . . .
            `)
        scroll = [
        "as I see it, yes",
        "it is certain",
        "it is decidedly so",
        "most likely",
        "outlook good",
        "signs point to yes",
        "without a doubt",
        "yes",
        "yes, definitely",
        "you may rely on it",
        "yeah, but do it drunk as fuck",
        "yes, if you leave me alone",
        "yeah, but it'll backfire",
        "more or less",
        "it is known",
        "well, obviously"
        ]
    } else {
        basic.showIcon(IconNames.Chessboard)
        scroll = [
        "my sources say no, but they also said Hillary would win",
        "don't ask me; I'm just a circuitboard",
        "concentrate, and ask again",
        "cannot predict now",
        "oh, please",
        "better not tell you now",
        "who cares",
        "get a clue",
        "ask again later",
        "outlook hazy",
        "perhaps",
        "maybe",
        "who knows",
        "fuck outta here",
        "attempting to care... task failed"
        ]
    }
    marquee()
    basic.clearScreen()
}
function altScroll () {
    scroll = [
    "EIGHT MINUTES AND FORTY-SIX SECONDS",
    "SAVE OUR LOCAL VENUES",
    "SUPPORT LOCAL MUSIC",
    "BUY LOCAL WEED - STARVE THE CARTELS",
    "LEGALIZE MEDICAL COCAINE",
    "LEGALIZE MEDICAL LSD",
    "TAKE A FRIEND TO VOTE",
    "WELCOME TO THE PRE-APOCALYPSE",
    "ELECTIONS HAVE CONSEQUENCES",
    "KICK OUT THE JAMS",
    "WAR IS PEACE",
    "IGNORANCE IS STRENGTH",
    "FREEDOM IS SLAVERY",
    "OVERALL THERE IS A SMELL OF FRIED ONIONS",
    "1312",
    "+++     OUT OF CHEESE ERROR    +++",
    "+++     REDO FROM START     +++",
    "+++     MELON    MELON     MELON     +++",
    "194,258,767 CASES      4,164,065 DEAD      176,307,140 RECOVERED      2.1% MORTALITY RATE      2.5% WORLD POP AFFECTED      GET THE FUCKING SHOT",
    "EWIGE BLUMENKRAFT",
    "HEUTE DIE WELT - MORGENS DAS SONNENSYSTEM",
    "FNORD",
    "IS THERE A VIRUS? IS THIS THE SOURCE?",
    "TASK FAILED SUCCESSFULLY",
    "SAVE LOCAL DIVE BARS"
    ]
    scrollbit.setUpsideDown(Math.randomBoolean())
}
input.onButtonPressed(Button.A, function () {
    coinFlip()
})
function coinFlip () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    scrollbit.scrollText("FLIPPING A COIN", 66, 23)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    flip = Math.randomBoolean()
    if (flip == true) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . # # # .
            `)
        scrollbit.setUpsideDown(false)
        scrollbit.scrollText("TAILS", 123, 14)
    } else {
        basic.showLeds(`
            . # # # .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        scrollbit.setUpsideDown(true)
        scrollbit.scrollText("HEADS", 123, 14)
    }
}
function heartBeat () {
    led.setBrightness(randint(8, 181))
    scrollbit.setUpsideDown(true)
    beats = randint(1, 99)
    if (showMode == true) {
        basic.showLeds(`
            . . # # #
            . . # # #
            # . # . .
            . # # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . # . # .
            . . . . .
            `)
    }
    basic.pause(10 * randint(23, 5 * input.temperature()))
    if (beats == 13) {
        basic.showLeds(`
            . # # # .
            . # # # .
            # # # # #
            # . # . #
            . # # # .
            `)
        if (showMode == true) {
            dailyScroll()
        } else {
            altScroll()
        }
    } else if (beats == Math.round(input.temperature())) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # .
            . . # # #
            . . # # .
            `)
        if (showMode == true) {
            dailyScroll()
        } else {
            altScroll()
        }
    } else if (beats == 66) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            `)
        if (showMode == true) {
            dailyScroll()
        } else {
            altScroll()
        }
    } else if (beats == 42) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            . . . . .
            . # . # .
            `)
        if (showMode == true) {
            dailyScroll()
        } else {
            altScroll()
        }
    } else if (beats == 99) {
        for (let index = 0; index < randint(3, 10); index++) {
            if (showMode == true) {
                basic.showLeds(`
                    . . # # #
                    . . # # #
                    # . # . .
                    . # # . .
                    . . # . .
                    `)
                basic.showLeds(`
                    . . # # .
                    . # # # #
                    # # # # #
                    . # . . #
                    . # . . #
                    `)
            } else {
                basic.showLeds(`
                    . . . . .
                    . . # . .
                    . # # # .
                    . # . # .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # # # # #
                    # # # # #
                    . # . # .
                    `)
            }
        }
        basic.clearScreen()
        if (showMode == true) {
            altScroll()
        } else {
            scroll = [""]
        }
    } else {
        if (showMode == true) {
            basic.showLeds(`
                . . # # .
                . # # # #
                # # # # #
                . # . . #
                . # . . #
                `)
            bandScroll()
        } else {
            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                # # # # #
                . # . # .
                `)
            dailyScroll()
        }
    }
    basic.pause(10 * randint(23, 5 * input.temperature()))
    basic.clearScreen()
    marquee()
    scroll = [""]
}
function marquee () {
    scrollbit.scrollText(scroll._pickRandom(), 2 * randint(37, 111), Math.round(beats / 3))
}
input.onButtonPressed(Button.AB, function () {
    modeSwitch()
})
input.onButtonPressed(Button.B, function () {
    eightBall()
})
function modeSwitch () {
    scrollbit.setUpsideDown(true)
    if (showMode == true) {
        showMode = false
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            # # # # #
            . . # . .
            `)
        scrollbit.scrollText("DAILY DRIVER", 128, 23)
    } else {
        showMode = true
        basic.showLeds(`
            # . # . #
            # # # # #
            # # # # #
            # . # . #
            . # # # .
            `)
        scrollbit.scrollText("SHOW MODE", 99, 23)
    }
    basic.clearScreen()
}
let beats = 0
let flip = false
let random = 0
let scroll: string[] = []
let showMode = false
showMode = true
modeSwitch()
basic.forever(function () {
    heartBeat()
})
