<div align='center'>

<h1>SmartChill: Optimized Chiller Load Management for Hotels</h1>
<p>This repository contains the codebase for SmartChill, an innovative project focused on enhancing energy efficiency in hotel chiller plants. Developed by a dedicated team, we leverage data-driven insights to create an AI-driven solution that optimizes chiller performance. Join us in revolutionizing energy management in the hospitality industry! 🚀🏨</p>

<h4> <a href="https://github.com/vaibhavi0028/SmartChill/blob/main/README.md"> Documentation </a> <span> · </span> <a href="https://www.canva.com/design/DAGR-BxzkrU/TfrvCm9Ie4cj1B1ZYxwghQ/edit?utm_content=DAGR-BxzkrU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"> Presentation </a> 
<br><br>
</div>

## :star2: Overview

SmartChill is designed to optimize the efficiency of chiller plants used in hotels by predicting and adjusting operational variables for peak performance. Our AI model utilizes the Random Forest algorithm to provide real-time adjustments that reduce energy consumption and enhance the overall efficiency of the plant.

<br><br>

## :dart: Features
- **AI-Driven Optimization**: Employs a Random Forest algorithm to predict essential variables for chiller operation, ensuring energy efficiency.
- **Real-Time Monitoring**: Continuously tracks critical parameters like temperature, pressure, and flow rates to make instantaneous adjustments.
- **Fault Detection**: Monitors chiller plant components using real-time sensor data, predicting potential faults and allowing proactive maintenance to prevent breakdowns.
- **User-Friendly Interface**: Provides an intuitive dashboard for monitoring chiller performance and energy usage statistics.

<br>

## :space_invader: Technologies Used
<ul>
<li><a href="https://www.python.org/">Python</a></li>
<li><a href="https://pytorch.org/">PyTorch</a></li>
<li><a href="https://pandas.pydata.org/">Pandas</a></li>
<li><a href="https://scikit-learn.org/">Scikit-learn</a></li>
<li><a href="https://www.tensorflow.org/">TensorFlow</a></li>
<li><a href="https://react.dev/">React JS</a></li>
<li><a href="https://expressjs.com/">Express JS</a></li>
</ul>
<br>

## :toolbox: Getting Started

### :gear: Installation

Clone the repository to your local machine.

```bash
git clone https://github.com/vaibhavi0028/codecortex
```

Navigate to the project directory and install dependencies.

```bash
cd codecortex
pip install -r requirements.txt
```

Run the application locally.

```bash
flask run
```

Access the app at `http://127.0.0.1:5000/` to start optimizing your chiller operations!
<br><br>

# Dynamic Chiller Plant Management System

This project implements a dynamic management system using Flask that adapts based on real-time sensor data from chiller plants. It allows users to monitor performance, manage settings, and receive alerts for potential faults.

## Features

- **Real-Time Data Visualization**: Displays key metrics for chiller performance and energy consumption.
- **Dynamic Adjustments**: Automatically adjusts chiller parameters based on predicted values for optimal operation.
- **Fault Prediction Alerts**: Sends notifications for detected anomalies or potential faults within the chiller plant.
- **User Dashboard**: An interactive interface for viewing plant performance and making manual adjustments if necessary.

## Flow of the Application

### 1. User Interaction (HTML Dashboard)

The dashboard presents an overview of the chiller plant's performance, showing:
- Current Temperature
- Pressure Levels
- Flow Rates
- Energy Consumption

### 2. Flask Backend Processing

The Flask server processes sensor data and predicts necessary adjustments using the AI model:
- Continuously collects real-time data.
- Uses the Random Forest algorithm to predict optimal settings.
- Adjusts the chiller parameters automatically based on predictions.

### 3. Fault Detection and Alerts

The system monitors critical components for any anomalies:
- If abnormal readings are detected, alerts are generated.
- Maintenance teams are notified to take action before breakdowns occur.

## Sequence of Operations

```plaintext
User            Browser (HTML)           Flask Server (Backend)
 |                   |                          |
 |--- Access Dashboard -->|                      |
 |                   |-----> Display Metrics ----|
 |                   |                          |
 |<---- Real-Time Updates ----------------------|
 |                   |                          |
 |<--- Alerts for Faults -----------------------|
 |                   |                          |
```

## Setup and Installation

To run the application locally, follow these steps:

Clone the repository:
```bash
git clone https://github.com/vaibhavi0028/codecortex.git
cd smartchill
```

Create a virtual environment and install dependencies:
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Run the Flask Application:
```bash
flask run
```

Access the App:
```bash
http://127.0.0.1:5000/
```

## Technologies Used

- **Flask**: Web framework for Python.
- **HTML**: For dashboard rendering.
- **CSS**: For basic styling.
- **Plotly/Dash**: For real-time data visualization.
- **File Handling**: For managing logs and alerts.

## Future Enhancements

- **User Authentication**: Implement user roles and permissions for accessing different functionalities.
- **Data Logging**: Store historical data for analysis and reporting purposes.
- **Machine Learning Model Enhancement**: Refine the AI model with more training data to improve predictions.

## Conclusion

This project illustrates the use of AI and real-time data monitoring in optimizing chiller plant operations. With its ability to predict necessary adjustments and detect faults proactively, SmartChill presents a flexible solution for energy management in hotels.

## :handshake: Team - ByteBond
Vaibhavi - 22MIC0046 <br>
Pulkit - 22BCE3424 <br>
Maneet Gupta - 24BBS0101 <br>
Prince Kosthi - 24BBS0004 <br>
