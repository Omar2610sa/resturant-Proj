export function getImageUrl(fileName?: string) {
  if (!fileName) return null;

  if (fileName.startsWith("http")) return fileName;

  return `${process.env.NEXT_PUBLIC_API_URL}/uploads/${fileName}`;
}