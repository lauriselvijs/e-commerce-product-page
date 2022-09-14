# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - E-commerce product page solution](#frontend-mentor---e-commerce-product-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![E-commerce product page desktop](https://user-images.githubusercontent.com/85683069/190152987-7ffc90c0-44f9-443d-b878-0af177260d73.png)
![E-commerce product page desktop cart full](https://user-images.githubusercontent.com/85683069/190153002-5fd22439-0757-446b-aaac-22ccb2f1b505.png)
![E-commerce product page desktop cart empty](https://user-images.githubusercontent.com/85683069/190152996-3a089f5a-698b-4303-839f-c88361f03d78.png)
![E-commerce product page desktop gallery overlay](https://user-images.githubusercontent.com/85683069/190153008-34d0c8a8-8ed3-4a5e-89ba-0e7975621c2f.png)
![E-commerce product page mobile menu](https://user-images.githubusercontent.com/85683069/179802965-8b2abbf3-22aa-462c-baef-8381ca1cbaf6.png)
![E-commerce product page mobile cart full](https://user-images.githubusercontent.com/85683069/179801348-f516e391-4718-4349-af6f-91b6daebf4b6.png)
![E-commerce product page mobile cart empty](https://user-images.githubusercontent.com/85683069/179801350-23e7f409-6bd3-4848-b1a3-4a689d2a16f8.png)
![E-commerce product page mobile menu open](https://user-images.githubusercontent.com/85683069/179801323-96f9afa6-d113-4833-88a8-295ac822fe55.png)

### Links

- Solution URL: [Github](https://github.com/lauriselvijs/e-commerce-product-page)
- Live Site URL: [Netlify](https://289f4f-e-commerce-product-page.netlify.app/)

## My process

### Built with

- HTML5 markup
- [Styled Components](https://styled-components.com//) - Visual primitives for the component age.
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language for JS
- [Redux Toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development

### What I learned

Using React Transition Group for opening and closing mobile menu

```js
<CSSTransition
  nodeRef={hamburgerMenuOverlayModalRef}
  in={showHamburgerMenu}
  classNames="slide"
  timeout={200}
  onEnter={() => onHamburgerMenuTransitionEnter()}
  onExited={() => onHamburgerMenuTransitionEnd()}
  unmountOnExit
>
  <HamburgerMenuOverlayModalStyle ref={hamburgerMenuOverlayModalRef}>
    <HamburgerMenuOverlayModalCloseBtnStyle
      onClick={onHamburgerMenuOverlayModalCloseBtnClick}
    >
      <HamburgerMenuOverlayModalCloseBtnIconStyle
        src={IconClose}
        alt="Close menu"
        show={showHamburgerMenu}
      />
    </HamburgerMenuOverlayModalCloseBtnStyle>
    <ProductCategoriesItemsStyle showOnMobile={showHamburgerMenu}>
      <ProductCategoriesItems />
    </ProductCategoriesItemsStyle>
  </HamburgerMenuOverlayModalStyle>
</CSSTransition>
```

```css
export const HamburgerMenuOverlayStyle = styled(OverlayStyle)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .slide-enter {
    width: 0;
  }
  .slide-enter-active {
    width: 60vw;
    transition: width 200ms;
  }

  .slide-exit-active {
    padding: 0;
    margin: 0;

    width: 0vw;

    transition: width 200ms;
  }
`;

```

### Continued development

- Implement animations between pages using React Router and React Transition Group
- Implement advanced user gestures and animations by using library's use-gesture and react-spring

### Useful resources

- [TypeScript Docs](https://www.typescriptlang.org/docs/) - Docs to better understand typescript
- [JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - JS docs
- [w3schools CSS docs](https://www.w3schools.com/css/default.asp) - Great documentation to understand CSS
- [w3schools HTML docs](https://www.w3schools.com/html/default.asp) - Great documentation to understand HTML
- [ReactJS](https://reactjs.org/docs/getting-started.html) - Great documentation to understand ReactJS
- [Redux Toolkit](https://redux-toolkit.js.org/usage/usage-guide) - Great documentation to understand Redux Toolkit
- [Styled Components](https://styled-components.com/docs) - Great documentation to understand better styled components
- [React Router](https://reactrouter.com/docs/en/v6/getting-started/overview) - Documentation for React Router
- [React Transition Group](https://reactcommunity.org/react-transition-group/) - Documentation for React Transition Group makes CSS animations easier in ReactJS

## Author

- Website - [Lauris](https://portfolio-rouge-seven.vercel.app/)
- Frontend Mentor - [lauriselvijs](https://www.frontendmentor.io/profile/lauriselvijs)
