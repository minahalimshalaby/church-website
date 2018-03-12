import React, { Component } from 'react';
import './PrimaryInformation.css';

class PrimaryInformation extends Component {

  render() {
    return (
      <div className="PrimaryInformation">

        <div className="PrimaryInformation__item">
          <div className="PrimaryInformation__icon PrimaryInformation__icon--location" />
          <div className="PrimaryInformation__text">
            <div className="PrimaryInformation__label">Location</div>
            <div className="PrimaryInformation__value">
              6200 West Foster Avenue,<br/>
              Chicago, IL - 60625
            </div>
          </div>
        </div>

        <div className="PrimaryInformation__item">
          <div className="PrimaryInformation__icon PrimaryInformation__icon--timing" />
          <div className="PrimaryInformation__text">
            <div className="PrimaryInformation__label">Sunday</div>
            <div className="PrimaryInformation__value">
              09:45 AM - Malayalam Service<br/>
              11:00 AM - English Service
            </div>
          </div>
        </div>

        <div className="PrimaryInformation__item">
          <div className="PrimaryInformation__icon PrimaryInformation__icon--prayerline" />
          <div className="PrimaryInformation__text">
            <div className="PrimaryInformation__label">Prayerline</div>
            <div className="PrimaryInformation__value">
              Call 1-712-432-8399<br/>
              Access Code: 158428#
            </div>
          </div>
        </div>
        
      </div>
    );
  }

}

export default PrimaryInformation;
