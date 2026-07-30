function calculateAttendance() {
  const total = Number(document.getElementById("total").value);
  const attended = Number(document.getElementById("attended").value);
  const required = Number(document.getElementById("required").value);

  const result = document.getElementById("result");

  if (total <= 0 || attended < 0 || required <= 0) {
    result.innerText = "Please enter valid numbers.";
    return;
  }

  if (attended > total) {
    result.innerText = "Attended classes cannot be more than total classes.";
    return;
  }

  const currentPercentage = (attended / total) * 100;

  let message = `Current Attendance: ${currentPercentage.toFixed(2)}%\n`;

  if (currentPercentage >= required) {
    let canMiss = 0;

    while ((attended / (total + canMiss + 1)) * 100 >= required) {
      canMiss++;
    }

    message += `You are safe. You can miss ${canMiss} class(es).`;
  } else {
    let needToAttend = 0;

    while (((attended + needToAttend) / (total + needToAttend)) * 100 < required) {
      needToAttend++;
    }

    message += `You need to attend ${needToAttend} more class(es) continuously.`;
  }

  result.innerText = message;
}
