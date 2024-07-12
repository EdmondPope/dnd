scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (Math.percentChance(1)) {
        evil_goblin = sprites.create(img`
            ................
            ...333333333....
            ...333333333....
            ...3f13331f3....
            .bb333333333bb..
            .b.3b33333b3.b..
            .bbbb33333bbbb..
            ..eeeeeeeeeee...
            .eeeeeeeeeeeee..
            eeeeeeeeeeeeeee.
            3eeeeeeeeeeeee3.
            3eeeeeeeeeeeee3.
            3eeeeeeeeeeeee3.
            355555555555553.
            .eeeeeeeeeeeee..
            ..eeeeeeeeeee...
            ...eeeeeeeee....
            .....ee.ee......
            .....ff.ff......
            `, SpriteKind.Enemy)
        evil_goblin.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 20)
        evil_goblin.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 20)
        evil_goblin.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), 20)
        evil_goblin.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), 20)
    }
})
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.A)) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . b . . . . . . . . . d . . 
            . . . b e e e e e e e e e e d . 
            . . . b . . . . . . . . . d . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), 50, 0)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . b b b . . . . . . . . 
            . . . . . . e . . . . . . . . . 
            . . . . . . e . . . . . . . . . 
            . . . . . . e . . . . . . . . . 
            . . . . . . e . . . . . . . . . 
            . . . . . . e . . . . . . . . . 
            . . . . . . e . . . . . . . . . 
            . . . . . . e . . . . . . . . . 
            . . . . . . e . . . . . . . . . 
            . . . . . . e . . . . . . . . . 
            . . . . . d e d . . . . . . . . 
            . . . . . . d . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), 0, 50)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . d . . . . . . . . . b . . . 
            . d e e e e e e e e e e b . . . 
            . . d . . . . . . . . . b . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), -50, 0)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . d . . . . . . 
            . . . . . . . . d e d . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . . e . . . . . . 
            . . . . . . . . b b b . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), 0, -50)
    }
    if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.A)) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 4 . . . . . 
            . . . . 2 . . . . 4 4 . . . . . 
            . . . . 2 4 . . 4 5 4 . . . . . 
            . . . . . 2 4 d 5 5 4 . . . . . 
            . . . . . 2 5 5 5 5 4 . . . . . 
            . . . . . . 2 5 5 5 5 4 . . . . 
            . . . . . . 2 5 4 2 4 4 . . . . 
            . . . . . . 4 4 . . 2 4 4 . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 50, 0)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 4 . . . . . 
            . . . . 2 . . . . 4 4 . . . . . 
            . . . . 2 4 . . 4 5 4 . . . . . 
            . . . . . 2 4 d 5 5 4 . . . . . 
            . . . . . 2 5 5 5 5 4 . . . . . 
            . . . . . . 2 5 5 5 5 4 . . . . 
            . . . . . . 2 5 4 2 4 4 . . . . 
            . . . . . . 4 4 . . 2 4 4 . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 0, 50)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 4 . . . . . 
            . . . . 2 . . . . 4 4 . . . . . 
            . . . . 2 4 . . 4 5 4 . . . . . 
            . . . . . 2 4 d 5 5 4 . . . . . 
            . . . . . 2 5 5 5 5 4 . . . . . 
            . . . . . . 2 5 5 5 5 4 . . . . 
            . . . . . . 2 5 4 2 4 4 . . . . 
            . . . . . . 4 4 . . 2 4 4 . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), -50, 0)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 4 . . . . . 
            . . . . 2 . . . . 4 4 . . . . . 
            . . . . 2 4 . . 4 5 4 . . . . . 
            . . . . . 2 4 d 5 5 4 . . . . . 
            . . . . . 2 5 5 5 5 4 . . . . . 
            . . . . . . 2 5 5 5 5 4 . . . . 
            . . . . . . 2 5 4 2 4 4 . . . . 
            . . . . . . 4 4 . . 2 4 4 . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 0, -50)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
let projectile: Sprite = null
let evil_goblin: Sprite = null
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . b b . . . . . . . . 
    . . . . . b b b b . . . . . . . 
    . . . . b b b b b b . . . . . . 
    . . . . . d d d d . . . . . . . 
    . . . . . f d d f . . . . . . . 
    . . . . . d d d d . . . . . . . 
    . e e e e e e e e e e e e . . . 
    . d e e e e e e e e e d d . . . 
    . d d d e e e e e e d d d . . . 
    . d d d e e e e e e d d d . . . 
    . d d d e e e e e e d d d . . . 
    . d d d 5 5 5 5 5 5 d d d . . . 
    . . . . e e e e e e . . . . . . 
    . . . . b b b b b b . . . . . . 
    . . . . b f b b f b . . . . . . 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    ...................
    .........88........
    ........888........
    .......8888........
    ......88888........
    ......8888.........
    .....88888.........
    ....888888.........
    .8888888888888.....
    .8888888888888.....
    ....dddddd.........
    ....1fddf1......ee.
    ....dddddd.....eee.
    ....dddddd....ee44e
    ...888888888..e422e
    .88888888888..e4e2e
    .888888888888.eee4e
    .888888888888..eeee
    .dd88888888ddeeee..
    .dd88888888ddeeee..
    .dd88888888ddee....
    .dd88888888ddee....
    .dd88888888ddee....
    ...88888888..ee....
    ...88888888.eee....
    ...55544555.eee....
    ...88888888..ee....
    ...88888888..eee...
    ...88888888..eee...
    ...88888888..eeee..
    ...bbbbbbbb...eee..
    ...bffbbffb...eee..
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
    ................
    ...777777777....
    ...777777777....
    ...7f17771f7....
    ...777777777....
    ...777777777....
    ....7777777.....
    ..eeeeeeeeeee...
    ..eeeeeeeeeee...
    eeeeeeeeeeeeeee.
    7eeeeeeeeeeeee7.
    7eeeeeeeeeeeee7.
    7eeeeeeeeeeeee7.
    755555555555557.
    ..eeeeeeeeeee...
    ...eeeeeeee.....
    .....ee.ee......
    .....ee.ee......
    .....ff.ff......
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
    ................
    ................
    ................
    ........3333....
    ......3333333...
    ....333333333...
    ....e.dddddd....
    ...ee.1fddf1....
    ...e1.dddddd....
    ..ee1.dddddd....
    ..e.133333333dd.
    ..e.133333333dd.
    ..e.133333333dd.
    ..ed133333333dd.
    .eed133333333dd.
    .edd133333333dd.
    .e..133333333dd.
    .e..133333333...
    .e..133333333...
    .e..133333333...
    .e..133333333...
    .ee.166666666...
    ..eee66666666...
    ...ee66666666...
    .....66666666...
    .....66666666...
    .....66666666...
    .....666..666...
    .....666..666...
    .....666..666...
    .....bbb..bbb...
    .....bfb..bfb...
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four))
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), assets.tile`myTile3`)
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), assets.tile`myTile3`)
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), assets.tile`myTile3`)
tiles.placeOnRandomTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), assets.tile`myTile3`)
scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
