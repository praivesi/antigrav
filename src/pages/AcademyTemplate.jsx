import { useParams } from 'react-router-dom';
import { useData } from '../context/DataContext';
import '../styles/AcademyTemplate.css';

const AcademyTemplate = () => {
  const { id } = useParams();
  const { academies } = useData();

  // Find data by ID or default to the first one (for /academy route)
  const data = id ? academies.find(d => d.id === id) : academies[0];

   if (!data) {
    return <div className="container" style={{padding: '100px', textAlign: 'center'}}>아카데미 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="academy-page">
      <header className="academy-header">
         <div className="academy-container">
            <h1 className="academy-name">{data.name}</h1>
            <p className="academy-slogan">{data.slogan}</p>
         </div>
      </header>

      <div className="academy-container content-wrapper">
        {/* Intro */}
        <section className="intro-section">
           <h2 className="section-title">ACADEMY INTRO</h2>
           <p className="academy-intro-text">{data.intro}</p>
        </section>

        {/* Programs */}
        <section className="programs-section">
           <h2 className="section-title">CURRICULUM</h2>
           <div className="programs-grid">
              {data.programs.map((program, index) => (
                <div key={index} className="program-card">
                   <h3>{program.title}</h3>
                   <p className="program-desc">{program.description}</p>
                   {program.highlight && <div className="program-highlight">{program.highlight}</div>}
                </div>
              ))}
           </div>
        </section>

        {/* Instructors including Representative */}
        <section className="instructors-section">
           <h2 className="section-title">INSTRUCTORS</h2>
           
           <div className="representative-card">
              <div className="rep-image" style={{backgroundImage: `url(${data.representative.image})`}}></div>
              <div className="rep-info">
                 <h3>{data.representative.name} <span className="role">{data.representative.role}</span></h3>
                 <p>{data.representative.intro}</p>
              </div>
           </div>

           <div className="instructor-grid">
              {data.instructors.map((inst, index) => (
                <div key={index} className="instructor-item">
                   <div className="inst-image" style={{backgroundImage: `url(${inst.image})`}}></div>
                   <h4>{inst.name}</h4>
                   <p>{inst.role}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Schedule */}
        <section className="schedule-section">
           <h2 className="section-title">HISTORY / SCHEDULE</h2>
           <ul className="schedule-list">
              {data.schedule.map((item, index) => (
                <li key={index} className="schedule-item">
                   <span className="date">{item.date}</span>
                   <span className="event">{item.event}</span>
                </li>
              ))}
           </ul>
        </section>

        {/* Contact */}
        <section className="academy-contact">
           <h2 className="section-title">CONTACT / INFO</h2>
           <div className="contact-grid">
              <div className="contact-row">
                <span className="label">Address</span>
                <span className="value">{data.contact.address}</span>
              </div>
              <div className="contact-row">
                <span className="label">Phone</span>
                <span className="value">{data.contact.phone}</span>
              </div>
              <div className="contact-row">
                <span className="label">Email</span>
                <span className="value">{data.contact.email}</span>
              </div>
              <div className="contact-row">
                <span className="label">Instagram</span>
                <span className="value">{data.contact.instagram}</span>
              </div>
           </div>
        </section>

        <footer className="academy-footer">
           <p>© {new Date().getFullYear()} {data.name}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default AcademyTemplate;
