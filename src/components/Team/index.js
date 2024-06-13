import './Team.css'
import Collaborator from '../Collaborator'

const Team = (props) => {
    console.log(props.collaborators);
    const getCollaborator = () => {
        return props.collaborators.map(collaborator =>
            <Collaborator
                background={props.primaryColor}
                key={collaborator.name}
                name={collaborator.name}
                position={collaborator.position}
                image={collaborator.image} />
        )
    };
    return (
        (props.collaborators.length > 0) && <section className='team' style={{ backgroundColor: props.secondColor }}>
            <h3 style={{ borderColor: props.firstColor }}>{props.teamName}</h3>
            <div className='collaborators'>
                {getCollaborator()}
            </div>

        </section>
    )
}

export default Team