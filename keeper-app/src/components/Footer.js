import '../css/Footer.css';

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <div className = 'footer-container'>
            <p>Copyright © {currentYear}</p>
        </div>
    );
}

export default Footer;
