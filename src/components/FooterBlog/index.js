import './styles.css';

export default function FooterBlog({ author, phrase, website }) {
    return (
        <footer className='footer'>
            <h3 className='footer__auth' >{author}</h3>
            <h4 className='footer__phrase'>{phrase}</h4>
            <h5 className='footer__copyright' >Copyright ©{website} 2021.</h5>
        </footer>
    )
}