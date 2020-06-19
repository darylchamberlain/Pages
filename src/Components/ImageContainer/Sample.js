import firstPhoto from './assets/beach.png';
import secondPhoto from './assets/beach.png';
import thirdPhoto from './assets/beach.png';

const projects = [{
    photo: {firstPhoto},
    text:"first project"
},
{
    photo: {secondPhoto},
    text:"second project"
},
{
    photo: {thirdPhoto},
    text:"third project"
}
]


       <Grid className="text-center" id="listOfProjects">
            <PageHeader className="projects-header">
My Projects    </PageHeader> 
            {projects.map((e,i) =>
                <ListOfProjects
                photo={e.photo}
                text={e.text}
                key={i}
                />
            )}
        </Grid>