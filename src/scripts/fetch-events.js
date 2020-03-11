"use strict";

export const fetchEvents = () => {
  return window
    .fetch(
      "https://tnj8jvch.api.sanity.io/v1/data/query/production?query=*[_type==%27employees%27]"
    )
    .then(response => response.json())
    .catch(console.error);
};
