import React, { Component } from 'react';

import Layout from "../components/Layout";
import Button from '../examples/Button';

export default class tours extends Component {
  render() {
    return (
      <Layout>
        hello from tours page
        <div>
          <Button big>First Button</Button>
          <Button color="#f15025">Second Button</Button>
        </div>
      </Layout>
    )
  }
}
