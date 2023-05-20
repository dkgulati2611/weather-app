# Weather App

This is a React.js application that allows users to retrieve weather information based on a city name or ZIP code.

## Installation

1. Make sure you have Node.js and npm installed on your system.
2. Clone this repository: `git clone <repository_url>`
3. Navigate to the project directory: `cd weather-app`
4. Install the dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open your browser and navigate to `http://localhost:3000`

## API Integration

To retrieve weather data, the application integrates with the OpenWeatherMap API. Follow these steps to set up the API integration:

1. Go to the OpenWeatherMap website: https://openweathermap.org/
2. Sign up for a free account or log in if you already have one.
3. Once logged in, navigate to your account dashboard.
4. Under the API Keys section, click on "Generate" to generate a new API key.
5. Copy the generated API key.
6. Open the `WeatherApp.js` file in your code editor.
7. Replace the `'YOUR_API_KEY'` placeholder with your actual OpenWeatherMap API key in the `handleSubmit` function.

## Customization

- Styling: The application is styled using Tailwind CSS. Feel free to customize the styles in the components and update the `tailwind.config.js` file as needed.
- Responsiveness: The application is designed to be responsive and adapt well to different screen sizes and orientations. You can further customize the layout and styles to meet your requirements.

