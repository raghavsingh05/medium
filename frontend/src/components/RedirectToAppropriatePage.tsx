import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectToAppropriatePage() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            navigate('/blogs');
        } else {
            navigate('/signup');
        }
    }, [navigate]);

    return null; // This component doesn't render anything itself
}

export default RedirectToAppropriatePage;
