import './Footer.scss';

const Footer = () => {
    return ( 
        <footer className="footer">
            <p className="footer__copyright"> &copy; 2021 &middot; Made by <b>Mateusz Penkala</b> &middot;</p>
            <ul className="footer__socials-list">
                <li className="footer__socials-item">
                    <i className="footer__social-icon fab fa-github-square"></i>
                </li>
                <li className="footer__socials-item">
                    <i className="footer__social-icon fab fa-linkedin"></i>
                </li>
            </ul>
        </footer>
    );
}
 
export default Footer;