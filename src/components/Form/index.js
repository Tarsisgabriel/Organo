import { useState } from 'react'
import DropdownList from '../DropdownList'
import PrimaryButton from '../PrimaryButton'
import TextField from '../TextField'
import './Form.css'

const Form = (props) => {
    const [name, setName] = useState('');
    const [responsibility, setResponsibility] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');


    const whenSave = (event) => {
        event.preventDefault();
        props.whenCollaboratorRegistered({
            name,
            responsibility,
            image,
            team,
        })
        setName('');
        setResponsibility ('');
        setImage ('');
        setTeam ('');
    }

    return (
        <section className='form'>
            <form onSubmit={whenSave}>
                <h2>Preencha os dados para criar o perfil da liderança de sua igreja.</h2>
                <TextField
                    obligatory={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    whenChanged={value => setName(value)} />

                <TextField
                    obligatory={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={responsibility}
                    whenChanged={value => setResponsibility(value)} />

                <TextField
                    label="Foto"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    whenChanged={value => setImage(value)} />

                <DropdownList
                    obligatory={true}
                    label="Time"
                    items={props.teams}
                    value={team}
                    onChanged={value => setTeam(value)} />

                <PrimaryButton>
                    Criar
                </PrimaryButton>
            </form>
        </section>
    )
}

export default Form