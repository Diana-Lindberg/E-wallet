import './Top.css'

function Top (title){
    return(
    <div className="header">
        <h1 className='header_heading'>
            {title.title}
        </h1>
    </div>
    )
}

export default Top;