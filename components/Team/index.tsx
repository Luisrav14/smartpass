import { TeamMember } from '@/types/teamMember';
import SingleTeamMember from './SingleTeamMember';

const teamMembers: TeamMember[] = [
    {
        id: 1,
        title: 'Backend Developer',
        name: 'Juan Perez',
        img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus pretium libero. Etiam mattis metus eget quam rhoncus auctor. Nulla et vestibulum purus, sodales mollis nisi. Fusce sit amet mi.'
    },
    {
        id: 2,
        title: 'FrontEnd Developer',
        name: 'Maria Huerta',
        img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus pretium libero. Etiam mattis metus eget quam rhoncus auctor. Nulla et vestibulum purus, sodales mollis nisi. Fusce sit amet mi.'
    },
    {
        id: 2,
        title: 'FrontEnd Developer',
        name: 'Maria Huerta',
        img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus pretium libero. Etiam mattis metus eget quam rhoncus auctor. Nulla et vestibulum purus, sodales mollis nisi. Fusce sit amet mi.'
    }
];

const TeamList = () => {
    return (
        <div
            className='flex flex-grap gap-5'
        >
            {
                teamMembers.map((e) => (
                    <SingleTeamMember key={e.id} member={e} />
                ))
            }
        </div>
    )
}

export default TeamList