const day = prompt("Please enter a day:").toLowerCase(); // girilen harfi kucuk yapar

switch (day) {
  case "monday":
  case "thuesday":
  case "wednesday":
  case "thursday":
    console.log("InClass");
    break;
  case "friday":
    console.log("Teamwork");
    break;
  case "saturday":
    console.log("InClass-selfstudy");
    break;
  case "sunday":
    console.log("selfstudy");
    break;
  default:
    console.log("Incorrect day");
}
