import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const RestartButton = ({ isGameOver }) => {
  return (
    <Button href="/" variant="outline-primary" size="lg" type="reset">
      Restart
    </Button>
  );
};

export default RestartButton;
