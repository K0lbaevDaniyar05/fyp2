import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class TimelineItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnOffset: 0,
      itemOffset: 0,
    };
  }

  componentDidMount() {
    if (this.props.side === "right") {
      this.setState({
        columnOffset: 6,
        itemOffset: 1,
      });
    }
  }

  render() {
    return (
      <Col
        sm={{ span: 6, offset: this.state.columnOffset }}
        className="timeline-item"
      >
        <Row>
          <Col sm={{ span: 11, offset: this.state.itemOffset }}>
            <div className="timeline-panel">
              <ul className="timeline-panel-ul">
                <li>
                  <span className="importo">{this.props.name}</span>
                </li>
                <li>
                  <span className="causale">
                    {this.props.description}
                    <br />
                    <br />
                    <span className="responsibilities-title">Озвучка:</span>
                    <ul>{this.getResponsibilities()}</ul>
                  </span>
                </li>
                <li>
                  <p>
                    <small className="text-muted">
                      <i className="glyphicon glyphicon-time"></i>
                      {this.props.month} {this.props.year}
                    </small>
                  </p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Col>
    );
  }

  /**
   *
   * @returns {[]}
   */
  getResponsibilities = () => {
    let responsibilities = [];
    this.props.responsibilities.forEach((responsibility, index) => {
      responsibilities.push(<li key={index}>{responsibility}</li>);
    });
    return responsibilities;
  };
}

export default TimelineItem;
