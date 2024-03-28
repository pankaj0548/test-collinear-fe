export function extractAndCompareDate(dateString: string) {
  const date = new Date(dateString);
  const today = new Date();
  const differenceInMs = today.getTime() - date.getTime();
  const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
  if (differenceInDays <= 1) {
    return "Today";
  } else if (differenceInDays <= 7) {
    return `${differenceInDays} days ago`;
  } else if (differenceInDays <= 30) {
    const weeks = Math.floor(differenceInDays / 7);
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  }
}
