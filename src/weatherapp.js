import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const API_KEY = process.env.API_KEY;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherIconImage = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}.png`;
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="primary.main"
    >
      <Box
        p={4}
        bgcolor="background.paper"
        borderRadius={8}
        boxShadow={3}
        maxWidth={400}
        width="100%"
      >
        <Typography variant="h4" align="center" color="textPrimary" mb={4}>
          WeatherApp
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter city or ZIP code"
            variant="outlined"
            value={city}
            onChange={handleInputChange}
            fullWidth
            color="primary"
            mb={2}
          />
          
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Get Weather"
            )}
          </Button>
        </form>
        {error && (
          <Typography variant="body1" color="error" align="center" mt={2}>
            Error: {error.message}
          </Typography>
        )}
        {weatherData && (
          <Box mt={4}>
            <Typography variant="h6" color="textPrimary" mb={2}>
              {weatherData.name}
            </Typography>
            <Typography variant="body1" color="textPrimary" mb={2}>
              Temperature: {Math.round(weatherData.main.temp - 273.15)}°C
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <Typography variant="body1" color="textPrimary" mr={1}>
                Icon:
              </Typography>
              <img
                src={getWeatherIconImage(weatherData.weather[0].icon)}
                alt="Weather Icon"
                width={48}
                height={48}
              />
            </Box>
            <Typography variant="body1" color="textPrimary">
              Wind : {weatherData.wind.speed}
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Humidity: {weatherData.main.humidity}
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Country : {weatherData.sys.country}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default WeatherApp;