import React, { Component } from 'react';
import ScreenView from '../../components/ScreenView/ScreenView';
import Main from '../../components/Main/Main';
import Section from '../../components/Section/Section';
import Cover from '../../components/Cover/Cover';

class HomePage extends Component {

  render() {
    return (
      <ScreenView>
        <Main>
          
          <Cover image="http://www.ipachicago.org/wp-content/uploads/2017/10/church_image.png" />
          
          <Section>
            
            <div className="Item">
              <div className="Item__icon" />
              <div className="Item__text">
                <div className="item__label">Located at</div>
                <div className="item__value">
                  6200 West Foster Avenue,<br/>
                  Chicago, IL - 60625
                </div>
                <div className="item__link">Get Direction</div>
              </div>
            </div>

            <div className="Item">
              <div className="Item__icon" />
              <div className="Item__text">
                <div className="item__label">Worship time</div>
                <div className="item__value">
                  Sunday: 11:00 AM to 12:00 PM<br/>
                </div>
                <div className="item__link">Upcoming Events</div>
              </div>
            </div>

          </Section>

        </Main>
      </ScreenView>
    );
  }

}

export default HomePage;
