import Link from 'next/link'
import styles from '../../styles/Footer.module.css'


export default function Header() {
    return (
        <>
            <footer className={styles.footer}>
                <a
                    href="https://github.com/Nine-hs"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Developing by{' '}
                    <img src="./logoImg.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer>
        </>
    )
}
