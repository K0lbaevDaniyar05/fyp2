import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import TimelineItem from "./TimelineItem";
import TimelineBadge from "./TimelineBadge";

class TimelineRow extends Component {
  render() {
    return (
      <Row className="timeline-row" key={this.props.id} data-aos={"fade-down"}>
        {this.props.side === "left" && (
          <Col md={6} className="timeline-image" style={{display: 'flex', justifyContent: 'flex-end'}}>
            <img
              src={this.props.image}
              alt={this.props.name}
              style={{ width: "50%", height: "360px", margin: "20px 0" }}
            />
          </Col>
        )}
        <Col md={6}>
          <TimelineBadge month={this.props.month} year={this.props.year} />
          <TimelineItem
            name={this.props.name}
            description={this.props.description}
            month={this.props.month}
            year={this.props.year}
            side={this.props.side}
            responsibilities={this.props.responsibilities}
          />
        </Col>
        {this.props.side === "right" && (
          <Col md={6} className="timeline-image">
            <img
              src={this.props.image}
              alt={this.props.name}
              style={{ width: "60%", height: "360px", margin: "20px 0" }}
            />
          </Col>
        )}
      </Row>
    );
  }
}

export default TimelineRow;
