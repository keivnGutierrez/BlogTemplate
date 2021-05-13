import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import './styles.css';

export default function HeaderBlog({ autor, blog }) {
    const { title, content } = blog;

    return (
        <>
            <nav className='nav'>
                <h1 className='nav__title'>{autor.toUpperCase()}</h1>
                <form>
                    <label className='nav__search-contaier'>
                        <input placeholder='buscar' className='nav__search' />
                        <bottom className='nav__icon-bottom'>
                            <SearchRoundedIcon fontSize='large' />
                        </bottom>
                    </label>
                </form>
            </nav>
            <header className='header-blog'>
                <h2 className='header-blog__title'>{title}</h2>
                <p className='header-blog__description' >{content.slice(0, 150)}</p>
                <a className='header-blog__link' >Leer más</a>
            </header>
        </>
    )
}