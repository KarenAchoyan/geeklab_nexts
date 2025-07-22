import { useRouter } from 'next/router';
import en from '../locales/en.json';
import hy from '../locales/hy.json';
import ge from '../locales/ge.json';
import App from '../components/layouts/app';
import styles from '../styles/about.module.css';

const staff = [
  {
    name: 'Ռոբերտ Եղոյան',
    role: 'Հիմնադիր տնօրեն / գլխավոր ծրագրավորող',
    phone: '+995-592-777-743',
    img: '/staff/robert.jpg',
  },
  {
    name: 'Մոնա Թումանյան',
    role: 'Հիմնադիր',
    phone: '+995-571-250-446',
    img: '/staff/mona.jpg',
  },
  {
    name: 'Քրիստա Համբարձումյան',
    role: 'Հիմնադիր',
    phone: '+995-547-515-075',
    img: '/staff/krista.jpg',
  },
  {
    name: 'Staff 4',
    role: 'Role 4',
    phone: '+995-xxx-xxx-xxx',
    img: '/staff/staff4.jpg',
  },
  {
    name: 'Staff 5',
    role: 'Role 5',
    phone: '+995-xxx-xxx-xxx',
    img: '/staff/staff5.jpg',
  },
  {
    name: 'Staff 6',
    role: 'Role 6',
    phone: '+995-xxx-xxx-xxx',
    img: '/staff/staff6.jpg',
  },
];

const About = () => {
  const { locale } = useRouter();
  let t;
  if (locale === 'hy') t = hy;
  else if (locale === 'ge') t = ge;
  else t = en;

  return (
    <>
      <App>
        <div className={styles.aboutContainerSection}>
            <div className={styles.aboutContainer}>
            <h1 className={styles.aboutTitle}>{t["about_title"] || 'About Geeklab'}</h1>
            <p className={styles.aboutText}>{t["about_text"]}</p>
            </div>
            <div className={styles.staffSection}>
            <h2 className={styles.staffTitle}>{t["our_team"] || 'Our Team'}</h2>
            <div className={styles.staffGrid}>
                {staff.map((person, idx) => (
                <div className={styles.staffCard} key={idx}>
                    <div className={styles.staffImgWrap}>
                    <img src={person.img} alt={person.name} className={styles.staffImg} />
                    </div>
                    <div className={styles.staffInfo}>
                    <div className={styles.staffName}>{person.name}</div>
                    <div className={styles.staffRole}>{person.role}</div>
                    <div className={styles.staffPhone}>{person.phone}</div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
      </App>
    </>
  );
};

export default About; 