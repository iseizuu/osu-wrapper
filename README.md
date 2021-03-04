# osu-wrapper
 An easy wrapper for osu API and support intellisense.

- [Documentation](https://iseizuu.github.io/osu-wrapper/)
- [Official Osu! Docs](https://github.com/ppy/osu-api/wiki)

## Installing
[![Version](https://nodei.co/npm/osu-wrapper.png?compact=true)](https://nodei.co/npm/osu-wrapper)
```sh
#npm
npm install osu-wrapper

#yarn
yarn add osu-wrapper
```

## Example Usage
- grab your own token at [HERE](https://osu.ppy.sh/p/api/)

### getUser
###### Methods
- **getUser**(option: userOpt)


```js
const { Osu } = require("osu-wrapper");
const client = new Osu("ur_token");

async function user() {
    const result = await client.getUser({ u: "ivoskydeav", m: "3" });
    console.log(result);
    return  result;
}
user()
```

### getBeatmaps
###### Methods
- **getBeatmaps**(option: beatOpt)


```js
const { Osu } = require("osu-wrapper");
const client = new Osu("ur_token");

async function getBeatmaps() {
    const result = await client.getBeatmaps({ b: 309176 });
    console.log(result);
    return  result;
}
getBeatmaps()
```

~~For more information go to documentation~~

## n.b
Actually i don't know how to write the documentation, but i hope you will understand and if you have any question feel free to join my [Discord Server](https://discord.gg/5DKMn8TMFx)

© [Aizuu](https://github.com/iseizuu)
