# Kazama-Defi-Toasts

[![Financial Contributors on Open Collective](https://opencollective.com/kazama-defi-toasts/all/badge.svg?label=financial+contributors)](https://opencollective.com/kazama-defi-toasts) ![Kazama-defi-toasts CI](https://github.com/fkhadra/kazama-defi-toasts/workflows/Kazama-defi-toasts%20CI/badge.svg)
![npm](https://img.shields.io/npm/dm/kazama-defi-toasts.svg?label=%E2%8F%ACdownloads&style=for-the-badge)
![npm](https://img.shields.io/npm/v/kazama-defi-toasts.svg?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/kazama-defi-toasts.svg?label=%F0%9F%93%9Clicense&style=for-the-badge)
![Coveralls github](https://img.shields.io/coveralls/github/fkhadra/kazama-defi-toasts.svg?label=%E2%9B%B1coverage&style=for-the-badge)


![React toastify](https://user-images.githubusercontent.com/5574267/130804494-a9d2d69c-f170-4576-b2e1-0bb7f13dd92d.gif "React toastify")

![stacked](https://github.com/fkhadra/kazama-defi-toasts/assets/5574267/975c7c01-b95e-43cf-9100-256fa8ef2760)


🎉 Kazama-Defi-Toasts allows you to add notifications to your app with ease. No more nonsense!

## Installation

```
$ npm install --save kazama-defi-toasts
$ yarn add kazama-defi-toasts
```

## Features

- Easy to set up for real, you can make it work in less than 10sec!
- Super easy to customize
- RTL support
- Swipe to close 👌
- Can choose swipe direction
- Super easy to use an animation of your choice. Works well with animate.css for example
- Can display a react component inside the toast!
- Has ```onOpen``` and ```onClose``` hooks. Both can access the props passed to the react component rendered inside the toast
- Can remove a toast programmatically
- Define behavior per toast
- Pause toast when the window loses focus 👁
- Fancy progress bar to display the remaining time
- Possibility to update a toast
- You can control the progress bar a la `nprogress` 😲
- You can limit the number of toast displayed at the same time
- Dark mode 🌒
- Pause timer programmaticaly 
- Stacked notifications!
- And much more !

## The gist

```jsx
  import React from 'react';

  import { ToastContainer, toast } from 'kazama-defi-toasts';
  import 'kazama-defi-toasts/dist/KazamaToasts.css';
  
  function App(){
    const notify = () => toast("Wow so easy!");

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }
```

## Demo

[A demo is worth a thousand words](https://fkhadra.github.io/kazama-defi-toasts/introduction)

## Documentation

Check the [documentation](https://fkhadra.github.io/kazama-defi-toasts/introduction) to get you started!

## Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome! Take a look at the contributing guide.

You can also find me on [reactiflux](https://www.reactiflux.com/). My pseudo is Fadi.

## Contributors

### Code Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/fkhadra/kazama-defi-toasts/graphs/contributors"><img src="https://opencollective.com/kazama-defi-toasts/contributors.svg?width=890&button=false" /></a>

### Financial Contributors

Become a financial contributor and help us sustain our community. [[Contribute](https://opencollective.com/kazama-defi-toasts/contribute)]

#### Individuals

<a href="https://opencollective.com/kazama-defi-toasts"><img src="https://opencollective.com/kazama-defi-toasts/individuals.svg?width=890"></a>

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website. [[Contribute](https://opencollective.com/kazama-defi-toasts/contribute)]

<a href="https://opencollective.com/kazama-defi-toasts/organization/0/website"><img src="https://opencollective.com/kazama-defi-toasts/organization/0/avatar.svg"></a>
<a href="https://opencollective.com/kazama-defi-toasts/organization/1/website"><img src="https://opencollective.com/kazama-defi-toasts/organization/1/avatar.svg"></a>
<a href="https://opencollective.com/kazama-defi-toasts/organization/2/website"><img src="https://opencollective.com/kazama-defi-toasts/organization/2/avatar.svg"></a>
<a href="https://opencollective.com/kazama-defi-toasts/organization/3/website"><img src="https://opencollective.com/kazama-defi-toasts/organization/3/avatar.svg"></a>
<a href="https://opencollective.com/kazama-defi-toasts/organization/4/website"><img src="https://opencollective.com/kazama-defi-toasts/organization/4/avatar.svg"></a>
<a href="https://opencollective.com/kazama-defi-toasts/organization/5/website"><img src="https://opencollective.com/kazama-defi-toasts/organization/5/avatar.svg"></a>
<a href="https://opencollective.com/kazama-defi-toasts/organization/6/website"><img src="https://opencollective.com/kazama-defi-toasts/organization/6/avatar.svg"></a>
<a href="https://opencollective.com/kazama-defi-toasts/organization/7/website"><img src="https://opencollective.com/kazama-defi-toasts/organization/7/avatar.svg"></a>
<a href="https://opencollective.com/kazama-defi-toasts/organization/8/website"><img src="https://opencollective.com/kazama-defi-toasts/organization/8/avatar.svg"></a>
<a href="https://opencollective.com/kazama-defi-toasts/organization/9/website"><img src="https://opencollective.com/kazama-defi-toasts/organization/9/avatar.svg"></a>

## Release Notes

You can find the release note for the latest release [here](https://github.com/fkhadra/kazama-defi-toasts/releases/latest)

You can browse them all [here](https://github.com/fkhadra/kazama-defi-toasts/releases)

## License

Licensed under MIT
