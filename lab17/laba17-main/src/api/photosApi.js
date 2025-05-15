export const fetchPhotos = async (page = 1, limit = 4) => {
  const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
  const data = await response.json();
  return data;
}; 
