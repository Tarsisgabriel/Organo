import './PrimaryButton.css'

const PrimaryButton = (props) => {
    return (
        <button className='primary-button'>
            {props.children}
        </button>
    )
}

export default PrimaryButton