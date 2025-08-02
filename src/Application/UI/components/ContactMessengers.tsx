import React, { useState } from 'react';

interface ContactMessengersProps {}

const ContactMessengers: React.FC<ContactMessengersProps> = ({}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const messengers = [
        {
            name: 'Telegram',
            url: 'https://t.me/max_halimov', // Замените на ваш Telegram
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16l-1.61 7.59c-.12.539-.437.672-.887.418l-2.453-1.81-1.183 1.139c-.131.131-.243.243-.5.243l.178-2.527 4.608-4.158c.2-.178-.044-.277-.31-.099l-5.69 3.583-2.448-.766c-.532-.166-.542-.532.111-.787l9.568-3.686c.443-.166.832.099.687.787z"/>
                </svg>
            ),
            color: '#0088cc'
        },
        {
            name: 'WhatsApp',
            url: 'https://wa.me/+992559995545', // Замените на ваш номер
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
            ),
            color: '#25D366'
        },
        {
            name: 'Email',
            url: 'mailto:h_mahmadali@mail.ru', // Замените на ваш email
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
            ),
            color: '#EA4335'
        }
    ];

    return (
        <div style={styles.container}>
            <div 
                style={styles.toggleButton}
                onClick={() => setIsExpanded(!isExpanded)}
                title="Связаться со мной"
            >
                <svg width="10" viewBox="0 0 24 24" fill="white">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
            </div>
            
            {isExpanded && (
                <div style={styles.messengersContainer}>
                    {messengers.map((messenger, index) => (
                        <a
                            key={messenger.name}
                            href={messenger.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                ...styles.messengerLink,
                                animationDelay: `${index * 100}ms`
                            }}
                            title={`Связаться через ${messenger.name}`}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = messenger.color;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                        >
                            {messenger.icon}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

const styles: StyleSheetCSS = {
    container: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
    },
    toggleButton: {
        background: 'black',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        width: '24.5px',
        height: '24.5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    messengersContainer: {
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginTop: '8px',
        padding: '8px',
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '8px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    messengerLink: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '26.5px',
        height: '26.5px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: 'white',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        animation: 'slideInDown 0.3s ease forwards',
        opacity: 0,
        transform: 'translateY(-10px)',
    },
};

// Добавляем CSS анимацию
const animationCSS = `
@keyframes slideInDown {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;

// Вставляем стили в head
if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = animationCSS;
    document.head.appendChild(style);
}

export default ContactMessengers;