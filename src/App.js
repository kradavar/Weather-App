import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";
//                                                                      
import WeatherDisplay from './WeatherDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [
        { name: "Guatemala City", zip: "01011" },
        { name: "Kyiv", zip: "02095" },
        { name: "Moscow", zip: "101000" },
        { name: "Honolulu", zip: "96803" },
        { name: "Minsk", zip: "220000" }],
      activePlace: 0
    };
  }

  render() {
    const navItems = this.state.places.map((place, index) => (
      <NavItem key={index} eventKey={index}>
        {place.name}
      </NavItem>
    ));
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              React Simple Weather App
          </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col md={4} sm={4}>
              <h3>Select a city</h3>
              <Nav bsStyle="pills"
                stacked
                activeKey={this.state.activePlace}
                onSelect={index => {
                  this.setState({ activePlace: index });
                }}>
                {navItems}
              </Nav>
            </Col>
            <Col md={8} sm={8}>
              <WeatherDisplay key={this.state.activePlace}
                zip={this.state.places[this.state.activePlace].zip} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
