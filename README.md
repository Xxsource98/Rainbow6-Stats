# <p align="center">Rainbow 6 Stats</p>

## What is Rainbow 6 Stats?
Rainbow 6 Stats is a website that fetch and displaying player's statistics. Website is coded in React using Gatsby Framework with Mantine components library. User data is provided by [r6stats.com](http://www.r6stats.com) API. I just coded it for fun.

## Why I made that?
I made that because I was bored I wanted to make something cool and new. That's why I used Mantine Components library instead of normal CSS. Second reason is that I'm playing this game actually.

## How to Build & Run
<b>Sadly you have to build it locally. I can't deploy it on github-pages, beacuse github doesn't support SSR.</b>

If you want to test website on mobile/LAN you have to set your local address in package.json in "develop" and "deploy:local" scripts.
```
git clone https://github.com/Xxsource98/Rainbow6-Stats.git
cd Rainbow6-Stats
npm install
npm run develop (For Develop) | npm run deploy:local (For build and serve on local network)
```

## Images
![Start Page](https://user-images.githubusercontent.com/36642285/162593997-4a0ed599-7b7d-4a6d-b6c4-bc0083061e94.PNG)
![Stats](https://user-images.githubusercontent.com/36642285/162594032-83d5f146-ef4c-4b6c-9e56-ea2641b88e85.PNG)
![Operators](https://user-images.githubusercontent.com/36642285/162594035-b4bc196a-8377-4af8-b7a6-448d8d5d6316.PNG)
![Seasons](https://user-images.githubusercontent.com/36642285/162594037-74b70c17-2e9d-4c57-8e08-133a3e965c28.PNG)

## API
API that website is using is [rainbow-six-user-data](https://www.npmjs.com/package/rainbow-six-user-data) which is made by also me. <b>The data is provided by [r6stats.com](http://www.r6stats.com) and I hope there is no any problem with using it.</b>