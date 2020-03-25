import React, { ReactElement } from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

interface StimuliCardProps {
  url: string
}

function StimuliCard({url}: StimuliCardProps): ReactElement<StimuliCardProps> {
  const filenameExpression = new RegExp(`${process.env.REACT_APP_BACKEND_ADDRESS}/static/img/(.*)`);
  const match = filenameExpression.exec(url);
  const filename = match ? match[1] : 'unknown filename';

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
