# Gas cylinder Weight Predictor App

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
   - [User Input Page](#user-input-page)
   - [Prediction Page](#prediction-page)
   - [Gas Weight Chart Page](#gas-weight-chart-page)
   - [Gas Leak Detection Page](#gas-leak-detection-page)
3. [Tech Stack](#tech-stack)
4. [Usage](#usage)
5. [Machine Learning Model](#machine-learning-model)
6. [Documentation](#documentation)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)
10. [Installation](#installation)

## Overview

The Gas Weight Predictor App is designed to help users track their gas usage efficiently. By providing essential details about their gas type and consumption habits, the app predicts the remaining gas percentage, the number of remaining days, and the estimated finish date of the gas based on a Machine Learning model. Additionally, it features a gas leak detection system and a user-friendly interface that updates in real-time.

## Features

### User Input Page
- Collects user details including:
  - **Name**: The name of the user.
  - **Email**: User's email address.
  - **Gas Type**: The type of gas being used (e.g., propane, natural gas).
  - **Starting Date**: The date the gas was first used.
  - **Starting Time**: The time the gas was first used.

### Prediction Page
- Displays the following metrics using a Machine Learning model:
  - **Remaining Gas Percentage**: Visual representation of gas left in a circular percentage format.
  - **Remaining Days**: Estimated days left until the gas is depleted.
  - **Gas Weight Finished Date**: Predicted date when the gas will run out.

### Gas Weight Chart Page
- Visual representation of gas weight data over time, allowing users to track gas weight on specific dates in a chart format.

### Gas Leak Detection Page
- Detects gas leaks based on weight reduction without assumptions.
- Users can turn on or off the leaking alarm through the web application from anywhere.

## Tech Stack

- **Frontend**: React
- **Backend**: Firebase Realtime Database
- **Real-time Data**: No need to reload the page to see different data

## Usage

1. **Input User Details**: On the first page, enter your name, email, gas type, starting date, and starting time.
2. **View Predictions**: Navigate to the second page to view your gas consumption predictions, including remaining gas percentage, remaining days, and the estimated finish date.
3. **Chart Page**: Access the third page to view a chart of gas weight on specific dates.
4. **Gas Leak Detection**: On the fourth page, monitor for any gas leaks. You can turn the alarm on or off from anywhere using the web application.

## Machine Learning Model

The app utilizes a Machine Learning model to predict gas consumption patterns based on historical usage data. The model is trained on various parameters to provide accurate predictions.

## Documentation

### User Guide
- **Accessing the App**: Open your web browser and navigate to the app URL.
- **Inputting Data**: Fill out all fields on the user input page and submit the form to proceed.
- **Viewing Results**: The app will automatically redirect to the prediction and chart pages to display results.

## Contributing

If you would like to contribute to the Gas Weight Predictor App, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeatureName
