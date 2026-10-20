const r = require("raylib");

function setup() {
    const world = {
        windowWidth: 600,
        windowHeight: 500,
        origin: {},
        a: 1,
    };

    world.origin.x = world.windowWidth / 2;
    world.origin.y = world.windowHeight / 2;

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(world.windowWidth, world.windowHeight, "HEART EQUATION");
    r.SetTargetFPS(60);

    return world;
}

function isRunning() {
    return !r.WindowShouldClose();
}

function heartEquation(world, x) {
    return (
        Math.abs(x) ** (2 / 3) +
        0.9 * (3.3 - x ** 2) ** (1 / 2) * Math.sin(world.a * Math.PI * x)
    );
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    world.a += 0.01;
    for (let i = 0; i < 1.82; i += 0.0001) {
        const X1 = world.origin.x - 100 * i;
        const X2 = world.origin.x + 100 * i;
        const Y1 = world.origin.y - 100 * heartEquation(world, i) + 50;
        const Y2 = world.origin.y - 100 * heartEquation(world, -i) + 50;

        r.DrawCircle(X1, Y1, 3, r.RED);
        r.DrawCircle(X2, Y2, 3, r.RED);
    }

    r.EndDrawing();
}

function update(world) {}

function tearDown() {
    r.CloseWindow();
}

module.exports = {
    setup,
    isRunning,
    draw,
    update,
    tearDown,
};
