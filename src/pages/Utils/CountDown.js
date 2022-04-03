const countDown = () => {
  const countDate = new Date("Apr 14,2022 00:00:00").getTime();
  const now = new Date().getTime();
  const remainingTime = countDate - now;

  //   time from micro-seconds

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  // remaining time in seconds minutes hours days
  const daysRemaining = Math.floor(remainingTime / days);
  const hoursRemaining = Math.floor((remainingTime % days) / hours);
  const minutesRemaining = Math.floor((remainingTime % hours) / minutes);
  const secondsRemaining = Math.floor((remainingTime % minutes) / seconds);

  return [daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining];
};

export default countDown;
