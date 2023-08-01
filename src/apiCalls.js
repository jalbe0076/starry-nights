export const getPictureOfDay = async () => {
  const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=gFoquFW2xoAF6Om7oJdOgYjD60ZCAPujTdna3lzY');
  const data = await handleError(response);
  // console.log(data);
  return data;
}

const handleError = (response) => {
  if(response.ok) {
    return response.json();
  } else {
    throw new Error(`HTTP Error: ${response.status} ${response.message}`);
  }
}