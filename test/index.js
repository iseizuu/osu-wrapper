const Osu = require("../dist/");
const client = new Osu("anamazingtoken");

async function test() {
    const result = await client.getReplay({ b: 2812138, u: "vaaalz" });
    console.log(result);
    return  result;
}
test()