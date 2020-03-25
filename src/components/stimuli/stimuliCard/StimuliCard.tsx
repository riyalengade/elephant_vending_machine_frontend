import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

type StimuliCardProps = {
  url: string,
  filename: string
};

function StimuliCard({url, filename}: StimuliCardProps) {
  return (
    <Col md={6} lg={4} xl={3} className="py-2">
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={url}
          className="img-fluid"
        />
        <Card.Body>
          <Card.Text>{filename}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default StimuliCard;
