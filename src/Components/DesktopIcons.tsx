import * as React from 'react';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

const classes = mergeStyleSets({
    container : {
        display:'flex',
        flexDirection:'column',
        justifyContent: 'flex-end'
    },
    cell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10px',
        float: 'left',
        height: '75px',
        width: '75px',
        '&:active': {
            background: 'yellow'
        }
    },
    icon: {
        width: '40px',
    },
    code: {
        borderRadius: '4px',
        padding: '4px',
        fontSize: 12,
        wordBreak: 'break-all',
        width: 'inherit',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textAlign: 'center',
        
    }
});


const icons = [
    { name: 'LinkedIn', src: '/icons/linkedin.png', link: 'https://www.linkedin.com/in/imsarvesh/' },
    { name: 'Twitter', src: '/icons/twitter.png', link: 'https://twitter.com/imsarvesh_' },
    { name: 'Facebook', src: '/icons/facebook-new.png', link: 'https://www.facebook.com/iamsarvesh' },
    { name: 'Instagram', src: '/icons/instagram-new.png', link: 'https://www.instagram.com/imsarvesh/' },
    { name: 'Email', src: '/icons/gmail.png', link: 'mailto:me@imsarvesh.com' }
]


const DesktopIcons: React.FunctionComponent = () => {
    
    return (
        <div className={classes.container}>
            {icons
                .map((Icon) => (
                    <a rel="noopener noreferrer" target="_blank" href={Icon.link} key={Icon.name} className={classes.cell}>
                        <img src={Icon.src} className={classes.icon} alt={Icon.name} />
                        <code className={classes.code}>{Icon.name}</code>
                    </a>
                ))}
        </div>
    );
};
export default DesktopIcons;