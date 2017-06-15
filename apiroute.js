//MODULE EXPORTS API ROUTES//

app.post("/api/new", function(req, res) {
    //Variable holds parameters that are set up from the client as a POST request
  var newReservation = req.body;
    //reformatting?//
  newReservation.routeName = newReservation.replace([[/\s+/g, ""]]).toLowerCase();

  console.log(newReservation);
  //pushing newReservation into reservation.json
  reservation.push(newReservation);
  //Sending a response to newResercation as a JSON stringify array of objects
  res.json(newReservation);
  //for loop to check if reservation goes on waiting list
  for (var i = 2; i <= reservation.length; i++) {
      //if there are less than 3 reservations, return response to reservation json object
      if (reservation <= [3]) {
          return res.json(reservation[i]);
      } //else if: reurn a response to waitlist json object
      return res.json(waitlist[i]);      
        }
});

