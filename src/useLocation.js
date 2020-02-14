import React, { useState, useEffect } from "react";

export const useLocation = () => {
  const [lat, setLat] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);

  return [lat, errorMessage];
};
