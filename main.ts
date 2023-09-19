input.onButtonPressed(Button.A, function () {
    images.createImage(`
        # . # . .
        # . # . #
        # # # . .
        # . # . #
        # . # . #
        `).showImage(0)
    basic.pause(100)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
})
input.onButtonPressed(Button.AB, function () {
    images.createImage(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `).scrollImage(1, 200)
    images.createImage(`
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `).scrollImage(1, 200)
    images.createImage(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # # # .
        `).scrollImage(1, 200)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).scrollImage(1, 200)
})
input.onButtonPressed(Button.B, function () {
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    basic.pause(20)
    images.createImage(`
        . . . . .
        . . . . #
        . . . . #
        . . . . .
        . . . . .
        `).showImage(0)
    basic.pause(20)
    images.createImage(`
        . . . . .
        . . . # #
        . . . # #
        . . . . .
        . . . . .
        `).showImage(0)
    basic.pause(20)
    images.createImage(`
        . . . . .
        . . # # .
        . . # # #
        . . . . #
        . . . # .
        `).showImage(0)
    basic.pause(20)
    images.createImage(`
        . . . . .
        . # # . .
        . # # # #
        . . . # .
        . . . # .
        `).showImage(0)
    basic.pause(20)
    images.createImage(`
        . . . . .
        # # . . .
        # # # # #
        . . # . .
        . . . # .
        `).showImage(0)
    basic.pause(20)
    images.createImage(`
        . . . . .
        # . . . .
        # # # # #
        . # . . #
        . # . # .
        `).showImage(0)
    basic.pause(20)
    images.createImage(`
        . . . . .
        . . . . .
        # # # # #
        # . . . #
        . . . . #
        `).showImage(0)
    basic.pause(20)
    images.createImage(`
        . . . . .
        . . . . .
        # # # # #
        . . . # .
        . . . . #
        `).showImage(0)
    basic.pause(20)
    images.createImage(`
        . . . . .
        . . . . .
        # # # # #
        . . # . .
        . . # . .
        `).showImage(0)
    basic.pause(20)
    images.createImage(`
        . . . . .
        . . . . .
        # # # # .
        . # . . .
        # . . . .
        `).showImage(0)
    basic.pause(20)
    images.createImage(`
        . . . . .
        . . . . .
        # # # . .
        # . . . .
        # . . . .
        `).showImage(0)
    basic.pause(20)
    images.createImage(`
        . . . . .
        . . . . .
        # # . . .
        . . . . .
        # . . . .
        `).showImage(0)
    basic.pause(20)
    images.createImage(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    basic.pause(20)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
})
basic.forever(function () {
	
})
