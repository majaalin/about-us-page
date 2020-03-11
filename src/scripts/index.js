import "../styles/index.scss";
import { fetchEvents } from "./fetch-events";

const eventWrapper = document.querySelector(".event-wrapper");

fetchEvents().then(response => {
  //Get the response in descending order
  const data = response.result;

  data.forEach(employees => {
    const employe = createEventItem(employees);
    eventWrapper.innerHTML += employe;
  });
});

const createImgUrl = imageRef => {
  const imageName = imageRef.replace("-jpg", "").replace("image-", "");
  const url =
    "https://cdn.sanity.io/images/tnj8jvch/production/" + imageName + ".jpg";
  return url;
};

const createEventItem = employees => {
  //Create the image url
  const imageUrl = createImgUrl(employees.image.asset._ref);

  // Create a new event element
  const eventItem = `
  <div class="event">
      <img loading=”lazy” src="${imageUrl}" alt="${employees.name}">
      <div class="text-wrapper">
      <p class="name">${employees.name}</p>
      <p class="profession">${employees.profession}</p>
      </div>
  </div>`;
  // Return the newly created element.
  return eventItem;
};
