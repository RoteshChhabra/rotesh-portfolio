// src/components/layout/Footer.tsx

const Footer = () => {
    return (
        <footer style={{ marginTop: '40px' }} className="w-full border-t border-border/20 py-8 flex items-center justify-center">
            <p className="text-muted text-sm font-mono tracking-wide">
                Copyright © {new Date().getFullYear()} Rotesh Chhabra. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;