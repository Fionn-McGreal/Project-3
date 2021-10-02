from flask import Flask, render_template, request, jsonify, make_response
import os
import pandas as pd
import json
import requests

app = Flask(__name__)


filepath = os.path.join("Resources", "Violent_and_Property_Crimes_Over_Time_data.csv")
data = pd.read_csv(filepath, encoding="latin-1")


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/plot')
def getData():
    yeargroupedcrime = data.groupby("Year")[["Property crime rate", "Violent Crime rate"]].mean()
    #yeargroupedcrime = yeargroupedcrime.reset_index()
    return yeargroupedcrime.to_json()


@app.route('/plot2')
def getData2():
    regiongrouped = data.groupby("Region")["Violent Crime rate"].mean()
    return regiongrouped.to_json()

if __name__ == '__main__':
    app.run(debug = True)