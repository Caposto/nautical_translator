# Nautical Translator
A website that serves as an educational platform by providing an interactice display for learning different Nautical Terms. Hack NJIT 2023.

## Setup
1. Clone the repository

2. Activate the server
```
cd backend
npm install
npm run dev
```

3. In a separate terminal, start the frontend
```
cd frontend
npm install
npm run dev
```

The website should now be running locally at http://localhost:5173/

## Main Features:
- An interactive 3D display that let's the user highlight certain parts of a sailboat
- A translation feature that outputs the definition of different nautical terms stored on a Kintone App

## Tech Stack
- [React](https://react.dev/)
- [three.js](https://threejs.org/) / [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [TailwindCSS](https://tailwindcss.com/docs/installation)
- [Express](https://expressjs.com/)
- [Kintone](https://www.kintone.com/en-us/)

## Designs
[Figma Wireframes/Mockups](https://www.figma.com/file/30T0hq4FHU6iKN7LNjx2bR/Nautical-Boat-Simulator?type=design&node-id=0%3A1&mode=design&t=Styx0ozvdvjHkFBV-1)

## Resources
[Setting up three.js, Tailwind, React in Vite](https://dev.to/saloship/base-setup-for-3-d-web-dev-30h5)
[Kintone Quickstart](https://kintone.dev/en/quickstart/)
![alt text](https://intlreg.org/wp-content/uploads/2019/10/048-port-starboard-left-right.jpg)
[Water Shader](https://threejs.org/examples/webgl_water.html)
[Ocean Water Shader](https://threejs.org/examples/webgl_shaders_ocean.html)
[Different Parts of a Sailboat](https://www.boatsetter.com/boating-resources/parts-of-a-sailboat#:~:text=The%20basic%20sailing%20boat%20is,the%20backstay%2C%20and%20the%20forestay)