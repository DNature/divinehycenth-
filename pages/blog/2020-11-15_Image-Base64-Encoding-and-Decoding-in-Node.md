---
layout: "bloglayout"
title: "Convert a Base64 data into an Image in Node.js"
description: "Learn how to convert an image into a base64 string and back to an image."
imageUrl: "/images/blog/base64/thumbnail.png"
tags: ["base64", "image", "nodejs"]
---

import CustomLink from "../../components/CustomLink.tsx";
import CodeWrapper from '../../components/codeWrapper';

![Image Base64 Encoding and Decoding in Node.js](/images/blog/base64/thumbnail.png)

## Learn how to convert an image into a base64 string and back to an image.

### Bonus:

You will also learn how to compress images with [Jimp](https://www.npmjs.com/package/jimp).

Recently, I got involved in a project where images are returned from the browser in base64 format and we need to write the image to disk. I did some research to see if i could get any detailed explanation on how things work with base64, Buffer, binary and real images but couldn't find any solution related to nodejs.

Trying to get this to work directly by reading an image with the `fs.readFile...` method and piping in it back to an image would work perfectly because by default, `fs.readFile...` returns a `Buffer` and that is what we need. Here's an example.

<CodeWrapper lang="js" />

```js
const fs = require("fs");

// Reads file in form buffer => <Buffer ff d8 ff db 00 43 00 ...
const buffer = fs.readFileSync("path-to-image.jpg");

// Pipes an image with "new-path.jpg" as the name.
fs.writeFileSync("new-path.jpg", buffer);
```

Things tend to get a bit more complicated when you want to convert a regular (base64) string into an actual image. You need to first convert your string into `Buffer` before saving it as a real image otherwise, you're going to run into issues.

```js
// Base64 => Buffer => Image
```

Luckily, Node.js provides a native module called `Buffer` that can be used to perform Base64 encoding and decoding. `Buffer` is available as a global object which means that you don't need to explicitly require this module in your application.

Internally, `Buffer` represents binary data in the form of a sequence of bytes. The `Buffer` object provides several methods to perform different encoding and decoding conversions. This includes to and from `UTF-8`, `UCS2`, `Base64`, `ASCII`, `UTF-16`, and even the `HEX` encoding scheme.

### Base64 Encoding

Let us first of all convert our image into base64 and then to Buffer

<CodeWrapper lang="js" />

```js
const fs = require("fs");

// Create a base64 string from an image => ztso+Mfuej2mPmLQxgD ...
const base64 = fs.readFileSync("path-to-image.jpg", "base64");

// Convert base64 to buffer => <Buffer ff d8 ff db 00 43 00 ...
const buffer = Buffer.from(base64, "base64");
```

### Base64 To Image

Now you can convert the `Buffer` into an actual image with just a single line of code:

<CodeWrapper lang="js" />

```js
// Pipes an image with "new-path.jpg" as the name.
fs.writeFileSync("new-path.jpg", buffer);
```

### Bonus

Image optimization is very important these days because most images come in huge sizes and this will definitely slow down our websites. I'll be using [Jimp](https://www.npmjs.com/package/jimp) to show you how to reduce image quality on the fly by reducing the size of the `Buffer` data we receive and convert it into an actual image.

Install Jimp:

<CodeWrapper lang="js" />

```bash
yarn add jimp
   # or
npm install jimp
```

You can simply reduce the quality of your image by 50% with just a few lines of code. I am going to use a base64 string as my data source.

<CodeWrapper lang="js" />

```js
const Jimp = require("jimp");
const fs = require("fs");

// Base64 string
const data =
  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAP////////////////////////////////////////////////////////////////////////////////////8B///////////////////////////////////////////////////////////////////////////////////////AABEIAMgBLAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/ACqJCgAoAKACgAoAWgAoAKBBQAUAFABQAUAFABQAmaAEoGFABQAUgFoAWgQUAFABQAUAJQAUAFABQMKACgAoASgAoAKACgBaYBQAUAFABQAUALQAUAFAgoAKACgAoAKAEoGJQAUAJQAtAC0AFIBaBBQAUAFABQAUAJQAlAwoAKAFoAKAEoAKACgAoAKAFpgFABQAUAFAC0AFAgoAKACgAoAKACgBCaAE/wA/WgYlAwoAKBC0gFoAWgQUAFABQAlAwoAKAEoAKACgAoAKACgAoAKACgAoAKAFpgFABQAUALQAUAFAgoAKACgAoAKAEoASgYlAxKAFoAKBDqQC0CCgAoASgAoAKBhQAUAJQAUAJQAUDCgAoEFABQAUALQAUALTAKACgAoAWgAoAKBBQAUAFABQA2gYUDEoAKAEoAWkIWgBaBC0AJQAUDCmFhM0BYKACgAoAKACgBKACgYUAFIAoAKACgBaAEoAdTEFABQAUALQAUAFAgoAKACgBDQMbQMKACgBKAFoAWkIWgAoEFACUxiUAFABQAUAFAC0AFABQAlABQMKACkAUAFABQAUAFADqYgoAKAFoAKBBQAUAFABQAhoGNoGFABQAUAFAC0CFpALQISmAlAwoAKAEoGFABQAUAFABmgAoAKACgAoAKACgAoAKACkAtAC0xBQAUALQAUCCgAoAKACgBDQMbQMKAEoAWgAoAWgQtIAoEJTGFACUDCgAoAMUALigVwxQFxMUDCgBKACgAoAKAFoAKAEoAKAFpAFADqYgoAKAFoAKBBQAUAFABQAhoGNoGFABSAWgAoEFABTGFAhKBhQAUCHYoC4tIQUAFACUAFAxKAEpgJQMKACgAoAKACgYUhC0CFoAWmAUAFAC0AFAgoAKACgAoASgYlABQAUgFoAKACgBOtMBKACgYUAAoELmgLBmgAoASgAoAKBhQAUAJQAUAFABQAUAFAxaQhaBBQAtMAoAKAFoAKBBQAUAFABQAUAJSGJQAUALQAUCCgBD60xiUDCgAoAKACgAoAKACgAoAKBBQAUDCgBKACgAoGFABQIWkAtAgoAWmAUAFAC0AFAgoAKACgAoAKACkAlABQMKACgQUDDrTATFACUDCgBaBBQAUAGKACgAoAKACgAoAKAEoGFACUALQAUALSEFABQAtMAoAKAFoAKBBQAUAFABQAUAFIBKBhQAUAJTAKACgAoAKACgAoAKAFxQIOlADaBjhQDCkIKACmAUDEoAKAEoGFAC0hC0AFACUALTAKAFoAKACgQUAFABQAUAFABSASgYUAFABTASgAoAKACgAoAKACgB1AhtAxKBjhQSxaQgoGJTAKBiUAFABQAUAFIBaACgAoAKYBQAUAFAC0CCgAoAKACgAoAKQBQAlACUDFoASgBKYBQAtABQAUAAoAdSJExQUJimFxwoEFIQUAFMYlAxKACgANAAKACkAtABQIKACmMKACgBaACgQUAFABQAUAFABSAKAEoAKBhQAUAJTAKACgAoAKACgB1IkKACgBaAEoAKACmMSgYlABQAGgAoAWkAUAFAgoAKYwoAKAFoAKBBQAUAFABQAUAFIAoASgdwxQFxKACgApgFABQAtACUAAoBjqQgoELQAUAJTASgYlAwoAKACgBKQxaBC0CCgAoAKACmMKACgBaACgQUAFABQAUAFABSAKACgBKACgYUAJTAKAFoAKAEoBCUAPpCCgQtACUAFMYlAxKACgAoAKACkAtAgoAWgAoASgApjCgAoAKAFoEFABQAUAFABQAUgCgBKACgBaAEoGFACUALTEFACUDCgBaBC5oAKAEoAKACgBKBhQAUgCgBaBBQAUALQAUAFACUxhQAUALQAUCCgAoAKACgAoAKQBQAUAFABQAlAwoAKACmAUCDFABQAUAFABQAUAJQMKACgAoAKQC0AFAgoAWgAoAKACgBKYwoAKACgBaACgAoEFABQAUAFABQAtIBKAEoAWgAoAKAEpgGKAFpAFABTEJQMKBiUAFIBaAEoAKACgBaAFoEFABQAUAFABQAlMYUAFABQAtABQAUCCgAoAKACgAoAKQBQAlAC0AFABQAUwCgApAGKAEphYM0DsHNACUALSAKACgAoAKBC0AFABQAUAFABQAUAJTGFABQAUALQAUAFAgoAKACgAoAKACkAUAFABQAUAFABQAUAFABQAUAJQAUAFABQAtACUDCgQtABQAUAFABQAUAFMAoASgYUAFABQAUALQAUCCgAoAKACgAoAKQBQAUAFABQAUAFABQAUAFABQAUAFABQAUAFACUDFoEFABQAUAFABQAUAFMAoASgYUAFABQAUALQAUAFABQIKACgAoAKQBQAUAFABQAUAFABQAUAFAC0CCgAoAKACgBKBhQAUAFABQAUAFABTAKACgAoA/wD/2Q==";

// Convert base64 to buffer => <Buffer ff d8 ff db 00 43 00 ...
const buffer = Buffer.from(data, "base64");

Jimp.read(buffer, (err, res) => {
  if (err) throw new Error(err);
  res.quality(5).write("resized.jpg");
});
```

I would love to give some extra credits to the creators of [Jimp](https://www.npmjs.com/package/jimp) because it solves nearly everything you would want to do with an actual image in nodejs and has zero dependency. I've had zero issues using it in an electron application.

### Conclusion

We were able to:

1. Understand how images work in nodejs on different stages.
2. Convert from Buffer to base64.
3. Convert from Buffer into an actual image.
4. Use `Jimp` to reduce image size.

If you made it to this point, then I'm going to say congratulations 🍻 because you're awesome :).

<br/>
<br/>
<br/>

I hope you find this helpful.

### Happy codding 💻 🙂
