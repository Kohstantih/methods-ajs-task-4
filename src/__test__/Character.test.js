import Character from "../js/Character";

test.each([
    [100, 1, 40, 10, {        
        health: 100,
        level: 2,
        attack: 48,
        defence: 12
    }],
    [0, 35, 40, 10, 'Нельзя повысить левел умершего']
])('create Character', (health, level, attack, defence, expected) => {
    try {
        const player = new Character(health, level, attack, defence);
        player.levelUp();
        expect(player).toEqual(expected)
    } catch (error) {
        expect(error.message).toEqual(expected)
    }
})

test.each([
    [100, 1, 40, 10, 10, {        
        health: 91,
        level: 1,
        attack: 40,
        defence: 10
    }],
    [100, 1, 40, 10, 1000, {        
        health: 0,
        level: 1,
        attack: 40,
        defence: 10
    }]
])('create Character', (health, level, attack, defence, points, expected) => {
        const player = new Character(health, level, attack, defence);
        player.damage(points);
        expect(player).toEqual(expected)
})
