import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';


function App() {

  const teams = [
    {
      name: 'Pastoreio',
      firstColor: '#57C278',
      secondColor: '#D9F7E9',
    },
    {
      name: 'Círculo de Oração',
      firstColor: '#82CFFA',
      secondColor: '#E8F8FF',
    },
    {
      name: 'Juventude',
      firstColor: '#A6D157',
      secondColor: '#F0F8E2',
    },
    {
      name: 'Adolescentes',
      firstColor: '#E06B69',
      secondColor: '#FDE7E8',
    },
    {
      name: 'Crianças',
      firstColor: '#DB6EBF',
      secondColor: '#FAE9F5',
    },
    {
      name: 'Grupo de Louvor',
      firstColor: '#FFBA05',
      secondColor: '#FFF5D9',
    },
    {
      name: 'Secretaria e Tesouraria',
      firstColor: '#FF8A29',
      secondColor: '#FFEEDF',
    },


  ];
  const [collaborators, setCollaborators] = useState([]);

  const whenAddNewCollaborator = (collaborator) => {
    console.log(collaborators);
    setCollaborators([ ...collaborators, collaborator ]);
  }

  return (
    <div className="App">
      <Banner />

      <Form
        teams={teams.map(team => team.name)}
        whenCollaboratorRegistered={collaborator => whenAddNewCollaborator(collaborator)} />

      {teams.map(team => <Team
        key={team.name}
        teamName={team.name}
        firstColor={team.firstColor}
        secondColor={team.secondColor}
        collaborators={collaborators.filter(collaborator => collaborator.team === team.name)}
        />)}

      <Footer />

    </div>
  );
}

export default App;
