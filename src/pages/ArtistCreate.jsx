import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import '../styles/ArtistTemplate.css'; // Reuse existing styles
import '../styles/CreatePage.css'; // New shared styles for inputs

const ArtistCreate = () => {
    const navigate = useNavigate();
    const { addArtist } = useData();

    // Initial state matching the data structure
    const [formData, setFormData] = useState({
        name: '',
        engName: '',
        instrument: '',
        intro: '',
        profileImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2670&auto=format&fit=crop', // Default placeholder
        bio: '',
        mainTrack: {
            title: '',
            composer: '',
            description: ''
        },
        archive: [], // Simplified for this demo: we won't implement adding dynamic array items for MVP unless requested, or will add just one placeholder
        contact: {
            email: '',
            instagram: ''
        }
    });

    // Helper to update nested state
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = () => {
        // Basic validation
        if (!formData.name || !formData.instrument) {
            alert('이름과 악기는 필수 입력사항입니다.');
            return;
        }

        const newId = `artist-${Date.now()}`;
        const newArtist = {
            ...formData,
            id: newId,
            // Add some dummy archive data if empty, just so the template looks okay
            archive: [
                { title: "Sample Performance", composer: "Composer Name", year: "2024" }
            ]
        };

        addArtist(newArtist);
        navigate('/');
    };

    return (
        <div className="artist-page create-mode">
            <div className="artist-container">
                 {/* Header / Actions */}
                 <div className="create-actions">
                    <button onClick={() => navigate('/')} className="cancel-btn">취소</button>
                    <button onClick={handleSubmit} className="save-btn">완료</button>
                 </div>

                {/* Profile Section Input */}
                <section className="profile-section">
                    <div className="profile-image-container">
                        <img src={formData.profileImage} alt="Profile" className="profile-image" />
                    </div>
                    <div className="profile-info form-group-container">
                        <input 
                            type="text" name="name" placeholder="이름 (예: 홍길동)" 
                            value={formData.name} onChange={handleChange} className="input-title"
                        />
                        <input 
                            type="text" name="engName" placeholder="영문 이름 (예: Gildong Hong)" 
                            value={formData.engName} onChange={handleChange} className="input-subtitle"
                        />
                        <input 
                            type="text" name="instrument" placeholder="악기 (예: Piano)" 
                            value={formData.instrument} onChange={handleChange} className="input-tag"
                        />
                         <textarea 
                            name="intro" placeholder="한 줄 소개를 입력하세요." 
                            value={formData.intro} onChange={handleChange} className="input-text" rows="2"
                        />
                    </div>
                </section>

                {/* Bio Section Input */}
                <section className="bio-section">
                    <h2 className="section-title">아티스트 소개</h2>
                    <textarea 
                        name="bio" placeholder="상세한 자기소개를 입력하세요." 
                        value={formData.bio} onChange={handleChange} className="input-textarea" rows="6"
                    />
                </section>

                {/* Main Track Section Input */}
                <section className="main-track-section">
                    <h2 className="section-title">대표 음원</h2>
                    <div className="track-card">
                        <div className="track-info form-group-container full-width">
                            <input 
                                type="text" name="mainTrack.title" placeholder="곡 제목" 
                                value={formData.mainTrack.title} onChange={handleChange} className="input-card-title"
                            />
                            <input 
                                type="text" name="mainTrack.composer" placeholder="작곡가" 
                                value={formData.mainTrack.composer} onChange={handleChange} className="input-card-subtitle"
                            />
                            <input 
                                type="text" name="mainTrack.description" placeholder="곡 설명" 
                                value={formData.mainTrack.description} onChange={handleChange} className="input-card-text"
                            />
                        </div>
                    </div>
                </section>

                {/* Archive (Static for now to keep it simple as per request logic) */}
                 <section className="archive-section">
                    <h2 className="section-title">음원 아카이브</h2>
                    <p style={{color: '#999', fontSize: '0.9rem'}}>* 아카이브는 페이지 생성 후 자동으로 샘플 데이터가 추가됩니다.</p>
                </section>

                {/* Contact Section Input */}
                <section className="contact-section">
                    <h2 className="section-title">컨택 정보</h2>
                    <div className="contact-details form-group-container">
                        <div className="input-row">
                            <label>Email:</label>
                            <input 
                                type="email" name="contact.email" placeholder="example@email.com" 
                                value={formData.contact.email} onChange={handleChange} className="input-inline"
                            />
                        </div>
                        <div className="input-row">
                            <label>Instagram:</label>
                             <input 
                                type="text" name="contact.instagram" placeholder="@handle" 
                                value={formData.contact.instagram} onChange={handleChange} className="input-inline"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ArtistCreate;
