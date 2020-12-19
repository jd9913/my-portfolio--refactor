import React from "react";
import Card from "react-bootstrap/Card";



function Highlights() {
  return (
    <Card>
      <Card className="grid-item">
        <Card.Img
          id="app"
          variant="top"
          src=".."
          alt="app highlights"
          style={{ width: "25%" }}
        />
        <Card.Body>
          <Card.Title className="card-title">
            App highlights
          </Card.Title>
          <Card.Text >
            this is the description for the apps that are portrayed
          </Card.Text>
        </Card.Body>
      </Card>
    </Card>
  );
}

export default Highlights;
