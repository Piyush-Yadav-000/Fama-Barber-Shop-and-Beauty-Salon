# Fama Barber Shop and Beauty Salon

A modern, responsive barbershop and beauty salon website built with React and Vite.

## Features
- Responsive landing page with hero sections
- Service cards with interactive effects
- Gallery with mobile carousel
- Google Maps integration for location
- Customer reviews with star ratings
- Team/Barbers showcase
- Contact form and FAQ
- Newsletter subscription
- Modern, clean UI with Tailwind CSS and custom styles

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd <project-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the App
Start the development server:
```sh
npm run dev
# or
yarn dev
```
The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Building for Production
```sh
npm run build
# or
yarn build
```

### Preview Production Build
```sh
npm run preview
# or
yarn preview
```

## Google Maps API
To enable the map on the location section, add your Google Maps API key in the `Location.jsx` file:
```js
script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
```

## Project Structure
```
src/
  assets/           # Images and static assets
  components/
    Navbar.jsx
    Footer/
    Gallery/
    Barbers/
    Location/
    review/
    ...
  App.jsx           # Main app component
  main.jsx          # Entry point
```

## Customization
- Update images in `src/assets/`.
- Edit content in the respective components under `src/components/`.
- Adjust styles in component CSS files or Tailwind classes.

## License
This project is for educational and demonstration purposes.

---
**Fama Barber Shop and Beauty Salon** — Classic cuts, modern style.
