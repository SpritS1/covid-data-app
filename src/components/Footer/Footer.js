import './Footer.scss';

const Footer = () => {
    const openNewPage = (url) => {
        window.open(url, "_blank");
    }

    return ( 
        <footer className="footer">
            <p className="footer__copyright"> &copy; 2021 &middot; Made by <b>Mateusz Penkala</b> &middot;</p>
            <ul className="footer__socials-list">
                <li className="footer__socials-item" onClick={() => openNewPage('https://github.com/SpritS1')}>
                    <i className="footer__social-icon fab fa-github-square"></i>
                </li>
                <li className="footer__socials-item" onClick={() => openNewPage('https://www.linkedin.com/in/mateusz-penkala-060540209/')}>
                    <i className="footer__social-icon fab fa-linkedin"></i>
                </li>
            </ul>
        </footer>
    );
}
 
export default Footer;