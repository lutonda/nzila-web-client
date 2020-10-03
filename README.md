# NZILA


 ![version](https://img.shields.io/badge/version-1.1.0-blue.svg)  ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/argon-design-system-angular.svg?maxAge=2592000)](https://github.com/creativetimofficial/argon-design-system-angular/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/argon-design-system-angular.svg?maxAge=2592000)](https://github.com/creativetimofficial/argon-design-system-angular/issues?q=is%3Aissue+is%3Aclosed) [![Join the chat at https://gitter.im/NIT-dgp/General](https://badges.gitter.im/NIT-dgp/General.svg)](https://gitter.im/creative-tim-general/Lobby) [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)

**Fully Coded Components**

-----

**Complex Documentation**

-----

**Example Pages**

-----

## Table of Contents

- [NZILA](#nzila)
  - [Table of Contents](#table-of-contents)
  - [Demo](#demo)
  - [Quick start](#quick-start)
  - [Documentation](#documentation)
  - [File Structure](#file-structure)
  - [Browser Support](#browser-support)
  - [Reporting Issues](#reporting-issues)
  - [Licensing](#licensing)
  - [Useful Links](#useful-links)
    - [Social Media](#social-media)


## Demo

| Buttons | Inputs | Navbars  |
| --- | --- | ---  |
| [![Buttons](https://github.com/creativetimofficial/public-assets/blob/master/argon-design-system-angular/buttons.png?raw=true)](https://demos.creative-tim.com/argon-design-system-angular/home)  | [![Inputs](https://github.com/creativetimofficial/public-assets/blob/master/argon-design-system-angular/inputs.png?raw=true)](https://demos.creative-tim.com/argon-design-system-angular/home)  | [![Navbar](https://github.com/creativetimofficial/public-assets/blob/master/argon-design-system-angular/navbars.png?raw=true)](https://demos.creative-tim.com/argon-design-system-angular/home)  

| Login Page | Landing Page | Profile Page  | Register Page  |
| --- | --- | ---  | ---  |
| [![Login Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-design-system-angular/login.png)](https://demos.creative-tim.com/argon-design-system-angular/login)  | [![Landing Page](https://github.com/creativetimofficial/public-assets/blob/master/argon-design-system-angular/landing.png?raw=true)](https://demos.creative-tim.com/argon-design-system-angular/landing)  | [![Profile Page](https://github.com/creativetimofficial/public-assets/blob/master/argon-design-system-angular/profile.png?raw=true)](https://demos.creative-tim.com/argon-design-system-angular/user-profile)  | [![Register Page](https://github.com/creativetimofficial/public-assets/blob/master/argon-design-system-angular/register.png?raw=true)](https://demos.creative-tim.com/argon-design-system-angular/register)  

[View More](https://github.com/lutonda/nzila-web-client)



## Quick start

- Clone the repo: `git clone https://github.com/lutonda/nzila-web-client`.


## Documentation
The documentation for the Argon Design System Angular is hosted at our [website](https://demos.creative-tim.com/argon-design-system-angular/documentation/tutorial?ref=adsa-github-readme).


## File Structure
Within the download you'll find the following directories and files:

```
NZILA
├── CHANGELOG.md
├── ISSUES_TEMPLATE.md
├── LICENSE.md
├── README.md
├── angular.json
├── e2e
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── home
│   │   │   ├── home.component.html
│   │   │   ├── home.component.scss
│   │   │   ├── home.component.spec.ts
│   │   │   ├── home.component.ts
│   │   │   └── home.module.ts
│   │   ├── landing
│   │   │   ├── landing.component.html
│   │   │   ├── landing.component.scss
│   │   │   ├── landing.component.spec.ts
│   │   │   └── landing.component.ts
│   │   ├── login
│   │   │   ├── login.component.css
│   │   │   ├── login.component.html
│   │   │   ├── login.component.spec.ts
│   │   │   └── login.component.ts
│   │   ├── profile
│   │   │   ├── profile.component.html
│   │   │   ├── profile.component.scss
│   │   │   ├── profile.component.spec.ts
│   │   │   └── profile.component.ts
│   │   ├── sections
│   │   │   ├── alerts-section
│   │   │   │   ├── alerts-section.component.css
│   │   │   │   ├── alerts-section.component.html
│   │   │   │   ├── alerts-section.component.spec.ts
│   │   │   │   └── alerts-section.component.ts
│   │   │   ├── angular-section
│   │   │   │   ├── angular-section.component.css
│   │   │   │   ├── angular-section.component.html
│   │   │   │   ├── angular-section.component.spec.ts
│   │   │   │   └── angular-section.component.ts
│   │   │   ├── buttons-section
│   │   │   │   ├── buttons-section.component.css
│   │   │   │   ├── buttons-section.component.html
│   │   │   │   ├── buttons-section.component.spec.ts
│   │   │   │   └── buttons-section.component.ts
│   │   │   ├── crs-section
│   │   │   │   ├── crs-section.component.css
│   │   │   │   ├── crs-section.component.html
│   │   │   │   ├── crs-section.component.spec.ts
│   │   │   │   └── crs-section.component.ts
│   │   │   ├── inputs-section
│   │   │   │   ├── inputs-section.component.css
│   │   │   │   ├── inputs-section.component.html
│   │   │   │   ├── inputs-section.component.spec.ts
│   │   │   │   └── inputs-section.component.ts
│   │   │   ├── modal
│   │   │   │   ├── modal.component.html
│   │   │   │   ├── modal.component.scss
│   │   │   │   ├── modal.component.spec.ts
│   │   │   │   └── modal.component.ts
│   │   │   ├── navigation-section
│   │   │   │   ├── navigation-section.component.css
│   │   │   │   ├── navigation-section.component.html
│   │   │   │   ├── navigation-section.component.spec.ts
│   │   │   │   └── navigation-section.component.ts
│   │   │   ├── nucleo-section
│   │   │   │   ├── nucleo-section.component.css
│   │   │   │   ├── nucleo-section.component.html
│   │   │   │   ├── nucleo-section.component.spec.ts
│   │   │   │   └── nucleo-section.component.ts
│   │   │   ├── sections.component.css
│   │   │   ├── sections.component.html
│   │   │   ├── sections.component.spec.ts
│   │   │   ├── sections.component.ts
│   │   │   ├── sections.module.ts
│   │   │   ├── tabs-section
│   │   │   │   ├── tabs-section.component.css
│   │   │   │   ├── tabs-section.component.html
│   │   │   │   ├── tabs-section.component.spec.ts
│   │   │   │   └── tabs-section.component.ts
│   │   │   ├── typography-section
│   │   │   │   ├── typography-section.component.css
│   │   │   │   ├── typography-section.component.html
│   │   │   │   ├── typography-section.component.spec.ts
│   │   │   │   └── typography-section.component.ts
│   │   │   └── versions-section
│   │   │       ├── versions-section.component.css
│   │   │       ├── versions-section.component.html
│   │   │       ├── versions-section.component.spec.ts
│   │   │       └── versions-section.component.ts
│   │   ├── shared
│   │   │   ├── footer
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.scss
│   │   │   │   ├── footer.component.spec.ts
│   │   │   │   └── footer.component.ts
│   │   │   └── navbar
│   │   │       ├── navbar.component.html
│   │   │       ├── navbar.component.scss
│   │   │       ├── navbar.component.spec.ts
│   │   │       └── navbar.component.ts
│   │   └── signup
│   │       ├── signup.component.html
│   │       ├── signup.component.scss
│   │       ├── signup.component.spec.ts
│   │       └── signup.component.ts
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   ├── js
│   │   ├── scss
│   │   │   ├── angular
│   │   │   ├── argon.scss
│   │   │   ├── bootstrap
│   │   │   └── custom
│   │   └── vendor
│   ├── browserslist
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── karma.conf.js
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── tslint.json
├── tsconfig.json
└── tslint.json

```


## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">


## Reporting Issues

We use GitHub Issues as the official bug tracker for the Argon Design System Angular. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Argon Design System Angular. Check the CHANGELOG from your kit on our [website](https://github.com/lutonda/nzila-web-client).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

- Copyright 2019 Creative Tim (https://www.creative-tim.com/?ref=adsa-github-readme)

- Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-angular/blob/master/LICENSE.md)

## Useful Links

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w?ref=creativetim)
- [Affiliate Program](https://www.creative-tim.com/affiliates/new?ref=adsa-github-readme) (earn money)
- [Blog Creative Tim](http://blog.creative-tim.com/?ref=adsa-github-readme)
- [Free Products](https://www.creative-tim.com/bootstrap-themes/free?ref=adsa-github-readme) from Creative Tim
- [Premium Products](https://www.creative-tim.com/bootstrap-themes/premium?ref=adsa-github-readme) from Creative Tim
- [React Products](https://www.creative-tim.com/bootstrap-themes/react-themes?ref=adsa-github-readme) from Creative Tim
- [Angular Products](https://www.creative-tim.com/bootstrap-themes/angular-themes?ref=adsa-github-readme) from Creative Tim
- [VueJS Products](https://www.creative-tim.com/bootstrap-themes/vuejs-themes?ref=adsa-github-readme) from Creative Tim
- [More products](https://www.creative-tim.com/bootstrap-themes?ref=adsa-github-readme) from Creative Tim
- Check our Bundles [here](https://www.creative-tim.com/bundles?ref=adsa-github-readme)

### Social Media

Twitter: ##

Facebook: ##

Instagram: ##
