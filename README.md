# OpenBank Password Manager Wizard

## Contents

- [Description](#description)
- [Characteristics of the project](#characteristics-of-the-project)
- [How to install and use](#how-to-install-and-use)
- [Testing all flows](#testing-all-flows)

## Description

This repository contains a test project which consists in creating a wizard component so that a user:

- Can read product information before purchasing it
- Can set its password with some hints and security requirements
- Can see the final feedback about the status of the operation

![Demo GIF of the components in action](./public/demo.gif)

## Characteristics of the project

This project has the following characteristics:

- Testing done with _Jest_ and _react-testing-library_
- Styling applied using SCSS, with responsiveness in mind
- Good practices in code applied using _airbnb_ rules for linting and Prettier
- Loading and error visual feedback to the user using custom hooks during async calls
- Completely customized and reusable `<WizardInput />` component

## How to install and use

Just clone this git repository, and run in the terminal, targetting your cloned folder:

```
> npm install
> npm start
```

Or, if you have `yarn`, then:

```
> yarn install
> yarn start
```

Then, you can access the application in `http://localhost:3000/`.

## Testing all flows

The fetch call made to the _service_ is mocked, and it's just a method that returns a status after 3 seconds.

To be able to test the _failure_ scenario, just use `pruebaKO123*` as the password in the _Form_ screen.
