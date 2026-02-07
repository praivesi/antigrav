import { useParams } from 'react-router-dom';
import { useData } from '../context/DataContext';
import '../styles/ArtistTemplate.css';

const ArtistTemplate = () => {
  const { id } = useParams();
  const { artists } = useData();
  
  // Find data by ID or default to the first one (for /artist route)
  const data = id ? artists.find(d => d.id === id) : artists[0];

  if (!data) {
    return <div className="container" style={{padding: '100px', textAlign: 'center'}}>아티스트 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="artist-page">
      <div className="artist-container">
        {/* Profile Section */}
        <section className="profile-section">
          <div className="profile-image-container">
            <img src={data.profileImage} alt={data.name} className="profile-image" />
          </div>
          <div className="profile-info">
            <h1 className="artist-name">{data.name}</h1>
            <p className="artist-eng-name">{data.engName}</p>
            <p className="artist-instrument">{data.instrument}</p>
            <p className="artist-intro">{data.intro}</p>
          </div>
        </section>

        {/* Bio Section */}
        <section className="bio-section">
          <h2 className="section-title">아티스트 소개</h2>
          <div className="bio-content">
            {data.bio.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </section>

        {/* Main Track Section */}
        <section className="main-track-section">
          <h2 className="section-title">대표 음원</h2>
          <div className="track-card">
            <div className="track-info">
              <h3>{data.mainTrack.title}</h3>
              <p className="composer">{data.mainTrack.composer}</p>
              <p className="description">{data.mainTrack.description}</p>
            </div>
            <div className="track-player">
              <div className="play-button">▶</div>
            </div>
          </div>
        </section>

        {/* Archive Section */}
        <section className="archive-section">
          <h2 className="section-title">음원 아카이브</h2>
          <div className="archive-list">
            {data.archive.map((item, index) => (
              <div key={index} className="archive-item">
                <span className="archive-title">{item.title}</span>
                <span className="archive-composer">{item.composer}</span>
                <span className="archive-year">{item.year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <h2 className="section-title">컨택 정보</h2>
          <div className="contact-details">
            <p>Email: <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a></p>
            <p>Instagram: <a href={`https://instagram.com/${data.contact.instagram.replace('@', '')}`} target="_blank" rel="noreferrer">{data.contact.instagram}</a></p>
          </div>
        </section>
        
        <footer className="artist-footer">
          <p>Powered by Soundfolio</p>
        </footer>
      </div>
    </div>
  );
};

export default ArtistTemplate;
