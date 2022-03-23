import img from './logo.jpg'

function Header(){
    
    return(
        <div className="header">
            <a 
                className="header__link" 
                href="https://portal.sutd.ru/stream/index.php?login=yes">
                    <img src={img} alt="logo"/>
            </a>
            <p className="header__title">Расписание</p>
        </div>
    )
}

export default Header;