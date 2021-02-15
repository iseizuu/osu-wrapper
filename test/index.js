const { Osu } = require("../dist");
const client = new Osu("ur_token");

async function test() {
    const result = await client.getUser({ u: "ivoskydeav", m: "3" });
    console.log(result);
    return  result;
}
test()