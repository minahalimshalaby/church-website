import React, { Component } from 'react';
import ScreenView from '../../components/ScreenView/ScreenView';
import Main from '../../components/Main/Main';
import Cover from '../../components/Cover/Cover';

class HomePage extends Component {

  render() {
    return (
      <ScreenView>

        <Main>
          
          {/* <Cover video="https://www.youtube.com/embed/bMJ7KwqiO8c" /> */}
          {/* <Cover video="https://www.youtube.com/embed/66tM1eDjAqI" /> */}
          {/* <Cover image="https://img.youtube.com/vi/66tM1eDjAqI/maxresdefault.jpg" /> */}
          {/* <Cover image="https://i.imgur.com/otNZnRFh.png" /> */}
          <Cover image="http://www.ipachicago.org/wp-content/uploads/2017/10/church_image.png" />

        </Main>

      </ScreenView>
    );
  }

}

export default HomePage;
