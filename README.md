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
7. [Installation](#installation)
8. [Contributing](#contributing)

## Overview

The Gas Weight Predictor App is designed to help users track their gas usage efficiently. By providing essential details about their gas type and consumption habits, the app predicts the remaining gas percentage, the number of remaining days, and the estimated finish date of the gas based on a Machine Learning model. Additionally, it features a gas leak detection system and a user-friendly interface that updates in real-time.

## Features

### User Input Page

<div align="center">
  <img src="https://github.com/user-attachments/assets/7f5435c4-715e-4abe-b004-ad2f869ab205" alt="Page 1 - User Details Page Gas Real-Time" height="400">
  <p><em>Figure 1: User Details Page with Real-Time Gas Information</em></p>
</div>

- Collects user details including:
  - **Name**: The name of the user.
  - **Email**: User's email address.
  - **Gas Type**: The type of gas being used (e.g., propane, natural gas).
  - **Starting Date**: The date the gas was first used.
  - **Starting Time**: The time the gas was first used.

### Prediction Page

<div align="center">
  <img src="https://github.com/user-attachments/assets/9c1789e0-1872-4a1b-a8c0-745856aed753" alt="Page 2 - User Percentage" height="400">
  <p><em>Figure 2: Remaining Gas Percentage</em></p>
</div>

- Displays the following metrics using a Machine Learning model:
  - **Remaining Gas Percentage**: Visual representation of gas left in a circular percentage format.
  - **Remaining Days**: Estimated days left until the gas is depleted.
  - **Gas Weight Finished Date**: Predicted date when the gas will run out.

### Gas Weight Chart Page

<div align="center">
  <img src="https://github.com/user-attachments/assets/0194a079-e6d8-4b87-b1e5-1de25a138403" alt="Page 3 - Gas Usage Track" height="400">
  <p><em>Figure 3: Gas Usage Tracking</em></p>
</div>

- Visual representation of gas weight data over time, allowing users to track gas weight on specific dates in a chart format.

### Gas Leak Detection Page

<div align="center">
  <img src="https://github.com/user-attachments/assets/57b06573-82ae-46c9-b6c6-7027f24c0f1b" alt="Page 4 - Gas Leak Test" height="400">
  <p><em>Figure 4: Gas Leak Detection Test</em></p>
</div>

- Detects gas leaks based on weight reduction without assumptions.
- Users can turn on or off the leaking alarm through the web application from anywhere.

## Tech Stack

- **Frontend**: React
- **Database**: No SQL Firebase Realtime Database - no need to reload the page to see different data

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

## Installation

To set up the Gas Weight Predictor App on your local machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gas-weight-predictor-app.git

## Contributing

If you would like to contribute to the Gas Weight Predictor App, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeatureName



