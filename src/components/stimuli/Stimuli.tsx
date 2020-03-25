import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import StimuliCard from './stimuliCard';

/**
 * Retrieve stimuli image URLs from backend
 *
 * @returns
 */
async function fetchStimuli() {
  const address = `${process.env.REACT_APP_BACKEND_ADDRESS}/image`;
  const response = await fetch(address);
  const body = await response.json();
  return body.files;
}

function Stimuli() {
  const [hasError, setErrors] = useState(false);
  const [stimuliUrls, setStimuliUrls] = useState([]);

  async function fetchStimuliUrls() {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/image`);
      const body = await response.json();
      setStimuliUrls(body.files);
    } catch (err) {
      setErrors(err);
    }
  }

  useEffect(() => {
    fetchStimuliUrls();
  }, []);

  return (
    <Container>
      <Row>
        {hasError ? <div>Error encountered while loading images.</div> : <StimuliCard url='google.com' filename='somefile.txt' />}
      </Row>
    </Container>
  );
}

export default Stimuli;
