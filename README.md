# Clothing Donation Registration Portal

This project is a web application for registering clothing donations, developed as part of my studies at IU Internationale Hochschule. The portal allows donors to choose the crisis region their donation will support and to register their donation either for pickup or personal delivery.

## Features

- **Responsive Design:** Works on desktops, tablets, and smartphones.
- **Header with Navigation:** Includes logo, title, and navigation links.
- **Donation Registration Form:** 
  - Choose between pickup by vehicle or personal delivery at the office.
  - For pickup: enter address, clothing type, and select a crisis area.
  - For personal delivery: select clothing type and crisis area.
  - Address validation: Pickup is only possible if the first two digits of the postal code match the office location.
- **Confirmation Page:** Displays all entered data after successful registration.
- **Footer:** Contains legal information and links.

## Technologies Used

- [Vue.js 3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/) for state management
- [Vue Router](https://router.vuejs.org/) for navigation
- [Bootstrap 5](https://getbootstrap.com/) for styling

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## License

This project was created for educational purposes only.
