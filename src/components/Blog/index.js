
import "./styles.css";
export default function Blog({ title, date, content, img }) {
    return (
        <div className='blog'>
            <div className='blog__data'>
                <div style={{ margin: '10px' }}>
                    <h1>{title}</h1>
                    <h3>{date}</h3>
                    <p>{content.slice(0, 150)}</p>
                </div>
                <img className='blog__img' src={img} />
            </div>
            <a className='blog__link'>Leer más</a>
        </div>
    )
}