import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../context/DataContext';
import '../styles/AcademyTemplate.css'; // Reuse existing styles
import '../styles/CreatePage.css'; // Shared styles

const AcademyCreate = () => {
    const navigate = useNavigate();
    const { addAcademy } = useData();

    const [formData, setFormData] = useState({
        name: '',
        slogan: '',
        intro: '',
        programs: [
             {
                title: "대표 프로그램 1",
                description: "프로그램에 대한 설명을 작성해주세요.",
                highlight: "특장점 (선택)"
            },
            {
                title: "대표 프로그램 2",
                description: "프로그램에 대한 설명을 작성해주세요.",
                highlight: "특장점 (선택)"
            }
        ],
        representative: {
            name: '',
            role: '',
            intro: '',
            image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2670&auto=format&fit=crop'
        },
        instructors: [],
        schedule: [
             { date: "2024.00.00", event: "예정된 일정을 입력하세요" }
        ],
        contact: {
            address: '',
            phone: '',
            email: '',
            instagram: ''
        }
    });

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

    const handleProgramChange = (index, field, value) => {
        const newPrograms = [...formData.programs];
        newPrograms[index] = { ...newPrograms[index], [field]: value };
        setFormData(prev => ({ ...prev, programs: newPrograms }));
    };

    const handleSubmit = () => {
         if (!formData.name) {
            alert('아카데미 이름은 필수 입력사항입니다.');
            return;
        }

        const newId = `academy-${Date.now()}`;
        const newAcademy = {
            ...formData,
            id: newId,
            // Add defaults for arrays if needed
            instructors: [
                 { name: "Kangsa 1", role: "Piano", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2670&auto=format&fit=crop" }
            ],
            schedule: [
                { date: "2024.12.25", event: "Christmas Concert" },
                ...formData.schedule
           ]
        };

        addAcademy(newAcademy);
        navigate('/');
    };

    return (
        <div className="academy-page create-mode">
             {/* Header / Actions */}
             <div className="container" style={{position: 'relative'}}>
                 <div className="create-actions">
                    <button onClick={() => navigate('/')} className="cancel-btn">취소</button>
                    <button onClick={handleSubmit} className="save-btn">완료</button>
                 </div>
             </div>

            <header className="academy-header">
                <div className="academy-container form-group-container centre-align">
                    <input 
                        type="text" name="name" placeholder="아카데미 이름" 
                        value={formData.name} onChange={handleChange} className="input-title" style={{color: 'black'}}
                    />
                    <input 
                        type="text" name="slogan" placeholder="슬로건 / 한 줄 소개" 
                        value={formData.slogan} onChange={handleChange} className="input-subtitle" style={{color: '#333'}}
                    />
                </div>
            </header>

            <div className="academy-container content-wrapper">
                {/* Intro */}
                <section className="intro-section">
                    <h2 className="section-title">ACADEMY INTRO</h2>
                    <textarea 
                        name="intro" placeholder="아카데미 소개글을 입력하세요." 
                        value={formData.intro} onChange={handleChange} className="input-textarea" rows="4"
                    />
                </section>

                {/* Programs (Editable 2 items) */}
                <section className="programs-section">
                    <h2 className="section-title">CURRICULUM</h2>
                    <div className="programs-grid">
                        {formData.programs.map((program, index) => (
                            <div key={index} className="program-card">
                                <input 
                                    type="text" placeholder="프로그램 명" 
                                    value={program.title} onChange={(e) => handleProgramChange(index, "title", e.target.value)} 
                                    className="input-card-title full-width"
                                />
                                <textarea 
                                    placeholder="설명" 
                                    value={program.description} onChange={(e) => handleProgramChange(index, "description", e.target.value)} 
                                    className="input-card-text full-width" rows="3"
                                />
                                <input 
                                    type="text" placeholder="강조 문구 (하이라이트)" 
                                    value={program.highlight} onChange={(e) => handleProgramChange(index, "highlight", e.target.value)} 
                                    className="input-card-subtitle full-width"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Instructors including Representative */}
                <section className="instructors-section">
                    <h2 className="section-title">INSTRUCTORS</h2>
                    
                    <div className="representative-card">
                        <div className="rep-image" style={{backgroundImage: `url(${formData.representative.image})`}}></div>
                        <div className="rep-info form-group-container">
                             <div className="input-row">
                                <input 
                                    type="text" name="representative.name" placeholder="대표자 이름" 
                                    value={formData.representative.name} onChange={handleChange} className="input-title" style={{fontSize: '1.4rem'}}
                                />
                                <input 
                                    type="text" name="representative.role" placeholder="직책 (예: 원장)" 
                                    value={formData.representative.role} onChange={handleChange} className="input-subtitle" style={{marginBottom: 0}}
                                />
                             </div>
                             <textarea 
                                name="representative.intro" placeholder="대표자 인사말" 
                                value={formData.representative.intro} onChange={handleChange} className="input-text" rows="2"
                            />
                        </div>
                    </div>

                     <p style={{color: '#999', fontSize: '0.9rem'}}>* 강사진 목록은 생성 후 샘플 데이터가 추가됩니다.</p>
                </section>

                {/* Schedule (Static message for MVP) */}
                <section className="schedule-section">
                    <h2 className="section-title">HISTORY / SCHEDULE</h2>
                    <p style={{color: '#999', fontSize: '0.9rem'}}>* 생성 완료 후 캘린더/히스토리 란이 활성화됩니다.</p>
                </section>

                {/* Contact */}
                <section className="academy-contact">
                    <h2 className="section-title">CONTACT / INFO</h2>
                    <div className="contact-grid form-group-container">
                        <div className="contact-row">
                             <span className="label">Address</span>
                             <input 
                                type="text" name="contact.address" placeholder="주소 입력" 
                                value={formData.contact.address} onChange={handleChange} className="input-inline"
                            />
                        </div>
                        <div className="contact-row">
                             <span className="label">Phone</span>
                             <input 
                                type="text" name="contact.phone" placeholder="전화번호 입력" 
                                value={formData.contact.phone} onChange={handleChange} className="input-inline"
                            />
                        </div>
                        <div className="contact-row">
                             <span className="label">Email</span>
                             <input 
                                type="text" name="contact.email" placeholder="이메일 입력" 
                                value={formData.contact.email} onChange={handleChange} className="input-inline"
                            />
                        </div>
                        <div className="contact-row">
                             <span className="label">Instagram</span>
                             <input 
                                type="text" name="contact.instagram" placeholder="인스타그램 ID" 
                                value={formData.contact.instagram} onChange={handleChange} className="input-inline"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AcademyCreate;
