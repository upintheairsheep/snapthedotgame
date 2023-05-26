input.onButtonPressed(Button.A, function () {
    if (Sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.removeLife(1)
    }
})
let Sprite: game.LedSprite = null
Sprite = game.createSprite(2, 2)
basic.forever(function () {
    Sprite.move(1)
    basic.pause(500)
    Sprite.ifOnEdgeBounce()
})
