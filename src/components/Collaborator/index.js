import './Collaborator.css'

const Collaborator = (name, image, position, background) => {
    return (
        <div className='Collaborator'>
            <div className='header' style={{backgroundColor: background}}>
                <img src={image} alt={name} />
            </div>
            <div className='baseboard'>
                <h4 className='baseboardH4'>{name}</h4>
                <h5 className='baseboardH5'>{position}</h5>
            </div>
        </div>
    )

}

export default Collaborator