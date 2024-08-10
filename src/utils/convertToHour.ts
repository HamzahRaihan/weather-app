export function convertToHour(dt: number, timezone: number) {
  const utc_time = new Date(dt * 1000);
  const local_time = new Date(utc_time.getTime() + timezone * 1000);
  const local_time_format = local_time
    .toLocaleTimeString('en-US', {
      timeZone: 'UTC',
      hour12: false,
      hour: 'numeric',
    })
    .replace('AM', '')
    .replace('PM', '');
  return local_time_format;
}
