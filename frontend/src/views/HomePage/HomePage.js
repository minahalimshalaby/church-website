import React, { Component } from 'react';

import ScreenView from '../../components/ScreenView/ScreenView';
import Main from '../../components/Main/Main';
import Section from '../../components/Section/Section';

import Cover from '../../components/Cover/Cover';
import PrimaryInformation from '../../components/PrimaryInformation/PrimaryInformation';
import ContactSection from '../../components/ContactSection/ContactSection';

class HomePage extends Component {

  render() {
    return (
      <ScreenView>
        <Main>
          
          <Cover image="http://www.ipachicago.org/wp-content/uploads/2017/10/church_image.png" />
          
          <Section padding="none">
            <PrimaryInformation />
          </Section>

          <Section padding="none">
            <ContactSection />
          </Section>

        </Main>
      </ScreenView>
    );
  }

}

export default HomePage;
