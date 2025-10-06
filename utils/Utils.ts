export const formatTimeRange = (startTime: string, endTime: string): string => {
  const start = new Date(startTime);
  const end = new Date(endTime);

  // Adjust for EAT (UTC+3)
  start.setUTCHours(start.getUTCHours() + 3);
  end.setUTCHours(end.getUTCHours() + 3);

  const startHours = String(start.getUTCHours()).padStart(2, '0');
  const startMinutes = String(start.getUTCMinutes()).padStart(2, '0');
  const endHours = String(end.getUTCHours()).padStart(2, '0');
  const endMinutes = String(end.getUTCMinutes()).padStart(2, '0');

  return `${startHours}:${startMinutes}-${endHours}:${endMinutes}`;
};