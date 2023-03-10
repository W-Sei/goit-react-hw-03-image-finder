import React, { Component } from 'react';
import { GlobalStyles } from 'GlobalStyles.styled';
import { Wrapper } from './Wrapper/Wrapper.styled';

export class App extends Component {
  render() {
    return (
      <Wrapper>
        <GlobalStyles />
        <div>React homework template</div>
      </Wrapper>
    );
  }
}
