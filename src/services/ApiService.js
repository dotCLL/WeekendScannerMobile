exports.GetTripsForDates = function() {
  return new Promise((resolve, reject) => {
    return fetch(`http://localhost:3001/api/trips`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response[0]);
        return resolve(response);
      })
      .catch(e => console.log("error", e));
  })
}
