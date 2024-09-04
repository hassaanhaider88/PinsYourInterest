function timeSince(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  let interval = Math.floor(seconds / 31536000); // Seconds in a year
  if (interval >= 1) {
    return interval + "y";
  }

  interval = Math.floor(seconds / 2592000); // Seconds in a month
  if (interval >= 1) {
    return interval + "m";
  }

  interval = Math.floor(seconds / 86400); // Seconds in a day
  if (interval >= 1) {
    return interval + "d";
  }

  interval = Math.floor(seconds / 3600); // Seconds in an hour
  if (interval >= 1) {
    return interval + "h";
  }

  interval = Math.floor(seconds / 60); // Seconds in a minute
  if (interval >= 1) {
    return interval + "m";
  }

  return Math.floor(seconds) + "s"; // Seconds
}

// Example usage
const createdAt = "2024-08-29T04:12:45.908Z"; // Example timestamp from createdAt
console.log("Comment posted " + timeSince(createdAt) + " ago");  // Output: "Comment posted 3d ago"


module.exports = timeSince;