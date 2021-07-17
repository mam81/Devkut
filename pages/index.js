import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { DevkutMenu, OrkutNostalgicIconSet } from '../src/lib/DevkutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelationsArea';

function ProfileSideBar(props) {
  // console.log(props);
  return (
    <Box>
      <img src={`https:github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'mam81';
  const favoritesPersons = [
    {name: 'Vitor Mourato', user: 'vitorlms'}, 
    {name: 'RafaelDias', user: 'RafaelNAIP'}, 
    {name: 'Milton Souto Maior', user:'BigMilts'},
];

  return (
    <>
    <DevkutMenu />
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSideBar githubUser={githubUser} />
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box >
          <h1 className="title"> 
            Bem Vindo
          </h1>

          <OrkutNostalgicIconSet />
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper >
          <h2 className="smallTitle">
            Pessoas da Comunidade ({favoritesPersons.length})
          </h2>

          <ul>
            {favoritesPersons.map(person => {
              return (
                <li key={person.user}>
                  <a href={`https://github.com/${person.user}`} >
                    <img src={`https://github.com/${person.user}.png`} style={{ height: '100px' }} />
                    <span>{person.name}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>

      </div>
    </MainGrid>
    </>
  )
}
