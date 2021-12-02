function fetchDay() {
  const date = new Date('December 1, 2021 9:34:30');
  const dateInt = date.getDay();
  console.log(dateInt);

  switch (dateInt) {
    case 0:
      console.log('Sunday');
      break;
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
    default:
      console.log('error');
  }
}
export { fetchDay }