// Get today's date and format it mm.dd.yyyy
function fetchDay() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0'); // Get day
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // Get Month
  const yyyy = today.getFullYear();// Get year
  today = `${mm}.${dd}.${yyyy}`; // Convert year to mm.dd.yyyy format
  const isoDate = document.querySelector('.iso-date');
  isoDate.innerHTML = today; // Update UI with full date format

  // Get day of week based on today's date and update UI with the day.
  const date = new Date(today);
  const dateInt = date.getDay();
  console.log(dateInt);
  switch (dateInt) {
    case 0:
      document.querySelector('.day').innerHTML = 'Sunday';
      break;
    case 1:
      document.querySelector('.day').innerHTML = 'Monday';
      break;
    case 2:
      document.querySelector('.day').innerHTML = 'Tuesday';
      break;
    case 3:
      document.querySelector('.day').innerHTML = 'Wednesday';
      break;
    case 4:
      document.querySelector('.day').innerHTML = 'Thursday';
      break;
    case 5:
      document.querySelector('.day').innerHTML = 'Friday';
      break;
    case 6:
      document.querySelector('.day').innerHTML = 'Saturday';
      break;
    default:
      console.log("Uh oh...this isn't a day of the week!");
  }
}

export { fetchDay }