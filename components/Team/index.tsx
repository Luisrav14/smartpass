import { TeamMember } from '@/types/teamMember';
import SingleTeamMember from './SingleTeamMember';


const teamMembers: TeamMember[] = [
    {
        id: 4,
        title: 'Backend Developer',
        name: 'Christian Rodríguez',
        img: 'https://res.cloudinary.com/dkd7cjepj/image/upload/v1689353843/ChristianRodriguez_tl0nkh.jpg',
        description: ''
    },
    {
        id: 1,
        title: 'Backend Developer',
        name: 'Ernesto Amaya',
        img: 'https://res.cloudinary.com/dkd7cjepj/image/upload/v1689353843/ErnestoAmaya_akzsd8.jpg',
        description: ''
    },
    {
        id: 5,
        title: 'Manager',
        name: 'Gerardo Ceseñas',
        img: 'https://res.cloudinary.com/dkd7cjepj/image/upload/v1689353843/GerardoCesenas_rqdvya.jpg',
        description: ''
    },
    {
        id: 2,
        title: 'Designer',
        name: 'Keren Corral',
        img: 'https://res.cloudinary.com/dkd7cjepj/image/upload/v1689353845/KerenCorral_snalpb.jpg',
        description: ''
    },
    {
        id: 3,
        title: 'FrontEnd Developer',
        name: 'Luis Valenzuela',
        img: 'https://res.cloudinary.com/dkd7cjepj/image/upload/v1689354672/LuisValenzuela_e39acw.jpg',
        description: ''
    },
    {
        id: 6,
        title: 'Backend Developer',
        name: 'Pablo Córdova',
        img: 'https://res.cloudinary.com/dkd7cjepj/image/upload/v1689353843/PabloCesarCordova_vzvp4i.jpg',
        description: ''
    }
];

const TeamList = () => {
    return (
        <div className='flex flex-wrap justify-center gap-10'>
        {
            teamMembers.map((e) => (
                <SingleTeamMember key={e.id} member={e} />
            ))
        }
    </div>
    )
}

export default TeamList