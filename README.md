# Local Server for [my blog](https://blog.tuanm.dev)

## Usage
1. Run the `build-image` file to build a Docker image for the local server.
2. When the image is built successfully, run the `start-container` file to start a container (using port `8080` by default).
3. Go to [my blog](https://blog.tuanm.dev).
4. Open Dev Tools (press `F12` or use `Ctrl` + `Shift` + `I`).
5. Move to tab `Console`.
6. Enter the following line and hit `Enter`:
```js
sourceUrl().set('http://localhost:8080');
```
_The value `http://localhost:8080` should be changed, depending on which port your container uses._

## Data
The data source is located at your `~/@storage/blog.tuanm.dev/data` folder, must follow the below structure:
```
data/
 |
 +-- vi/
 |    1
 |    2
 |    ...
 |
 +-- en/
      1
      ...
```
and each file in the subfolders must includes these metadata at its begin:
```html
<!--
title: <the post's title>
author: <the post's author>
date: <the published date>
-->
```