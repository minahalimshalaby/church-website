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
            Hello
          </Section>

        </Main>
      </ScreenView>
    );
  }

}

export default HomePage;
