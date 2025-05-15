import React, { useEffect, useState } from 'react';
import { fetchPhotos } from '../api/photosApi';
import './Gallery.css';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetchPhotos(page, 4).then(data => {
      setPhotos(data);
      setLoading(false);
    });
  }, [page]);

  const handlePrev = () => {
    if (page > 1) setPage(prev => prev - 1);
  };

  const handleNext = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className="gallery-container">
      <h2>📸 Галерея фото</h2>
      {loading ? (
        <p className="loading">Завантаження...</p>
      ) : (
        <div className="gallery-grid">
          {photos.map(photo => (
            <div key={photo.id} className="photo-card">
              <img src={photo.download_url} alt={photo.author} />
              <p className="author">Автор: {photo.author}</p>
            </div>
          ))}
        </div>
      )}
      <div className="buttons">
        <button onClick={handlePrev} disabled={page === 1}>⬅️ Попередні</button>
        <span className="page-number">Сторінка {page}</span>
        <button onClick={handleNext}>Наступні ➡️</button>
      </div>
    </div>
  );
};

export default Gallery; 
