import zxcvbn from 'zxcvbn'; // password strength calculator

export const getPagination = (page: number, limit: number = 15) => {
    const from = page - 1 > 0 ? limit * (page - 1) + 1 : 0;
    const to = page - 1 > 0 ? from + limit : limit;
  
    return {
      from,
      to: to - 1,
    };
  };

export const calculateAndSetCrackTime = (password: string): string => {
  const result = zxcvbn(password);

  const crackTimeInSeconds = result.crack_times_seconds.offline_fast_hashing_1e10_per_second;
  
  return convertSecondsToReadable(crackTimeInSeconds);
}

  // Cryptographic replacement for Math.random()
export const randomNumberBetweenZeroAndOne = (): number => {
  const crypto = window.crypto || (window as any).msCrypto;
  return crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295;
}

export const convertSecondsToReadable = (seconds: number): string => {
  let timeString = '';
  const numMilliseconds = seconds * 1000;
  const numSeconds = Math.floor(seconds);
  const numMinutes = Math.floor(numSeconds / 60);
  const numHours = Math.floor(numSeconds / (60 * 60));
  const numDays = Math.floor(numSeconds / (60 * 60 * 24));
  const numYears = Math.floor(numSeconds / (60 * 60 * 24 * 365));
  const numCenturies = Math.floor(numSeconds / (60 * 60 * 24 * 365 * 100));

  if (numMilliseconds < 1000) {
    timeString = `${numMilliseconds} milliseconds`;
  } else if (numSeconds < 60) {
    timeString = `${numSeconds} seconds`;
  } else if (numMinutes < 60) {
    timeString = `${numMinutes} minutes`;
  } else if (numHours < 24) {
    timeString = `${numHours} hours`;
  } else if (numDays < 365) {
    timeString = `${numDays} days`;
  } else if (numYears < 100) {
    timeString = `${numYears} years`;
  } else {
    timeString = `${numCenturies} centuries`;
  }

  return timeString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

