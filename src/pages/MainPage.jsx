import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import '../styles/MainPage.css';

const MainPage = () => {
  const { artists, academies } = useData();

  return (
    <div className="main-page">
      <header className="hero-section">
        <div className="container hero-container">
          <div className="brand-box">
             <div className="brand-icon">S</div>
             <h1 className="brand-name">Soundfolio</h1>
             <p className="brand-slogan">소리를 기록하세요</p>
          </div>
        </div>
      </header>

      <main className="content-section">
        <div className="container">
          
          <div className="template-nav">
             <div className="nav-header">
               <h2 className="nav-title">Artist Pages</h2>
               <Link to="/artist/create" className="create-button" title="새 아티스트 페이지 만들기">+</Link>
             </div>
             {artists.map((artist) => (
                <Link to={`/artist/${artist.id}`} key={artist.id} className="template-link">
                  <span className="link-text">{artist.name} ({artist.instrument})</span>
                  <span className="link-arrow">↗</span>
                </Link>
             ))}
          </div>

          <div className="template-nav" style={{marginTop: '40px'}}>
             <div className="nav-header">
               <h2 className="nav-title">Academy Pages</h2>
               <Link to="/academy/create" className="create-button" title="새 아카데미 페이지 만들기">+</Link>
             </div>
             {academies.map((academy) => (
                <Link to={`/academy/${academy.id}`} key={academy.id} className="template-link">
                  <span className="link-text">{academy.name}</span>
                  <span className="link-arrow">↗</span>
                </Link>
             ))}
          </div>

          <footer className="footer-section">
            <h2 className="footer-title">문의 / 상담요청</h2>
            <div className="contact-links">
               <a href="#" className="contact-item">Instagram DM ↗</a>
               <a href="#" className="contact-item">Email ↗</a>
            </div>
            <div className="footer-info">
              <p>Soundfolio © 2024</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
