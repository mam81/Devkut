import React, {useState} from 'react';

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { DevkutMenu, DevkutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/DevkutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelationsArea';
import { isObject } from 'lodash';

function ProfileSideBar(props) {
  // console.log(props);
  return (
    <Box as="aside">
      <img src={`https:github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <a className="boxLink" href={`https://github.com/${props.githubUser}`} style={{textDecoration: 'none', color: 'black' }}>
        {props.nameUser}
      </a>
      <hr />

      <DevkutProfileSidebarMenuDefault />

    </Box>
  )
}

export default function Home() {

  const [communities, setCommunities] = useState([{
    id: '38712392179831283',
    title: 'Eu abro a geladeira pra pensar',
    image: 'https://th.bing.com/th/id/OIP.eADWXmCsaDCOVHt1p96r4gHaHa?pid=ImgDet&rs=1'
  }]);
  console.log(communities, setCommunities);
  const githubUser = 'mam81';
  const nameUser = 'Matheus Antunes';
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
        <ProfileSideBar githubUser={githubUser} nameUser={nameUser} />
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box >
          <h1 className="title"> 
            Bem Vindo(a)
          </h1>

          <OrkutNostalgicIconSet />
        </Box>
        <Box>
          <h2 className="subtitle">O que você deseja fazer?</h2>

            <form onSubmit={function handleCriaComunidade(e) {
              e.preventDefault() ;
              console.log(e);

              const formData = new FormData(e.target);
              console.log('Campo:', formData.get('title'));
              console.log('Campo:', formData.get('image'));
              
              const community = {
                id: new Date().toISOString(),
                title: formData.get('title'),
                image: formData.get('image'),
              }
              const updatedCommunities = [...communities, community];
              setCommunities(updatedCommunities);
              // console.log(community);
            }}>
              <div>
                <input 
                placeholder="Qual vai ser o nome da sua comunidade" 
                name="title" 
                aria-label="Qual vai ser o nome da sua comunidade" 
                type="text"
                />
              </div>
              <div>
                <input 
                placeholder="Coloque uma URL para usuários de capa" 
                name="image" 
                aria-label="Coloque uma URL para usuários de capa" 
                />
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Comunidades ({communities.length})
          </h2>
          <ul>
              {communities.map(item => {
                return (
                  <li key={item.id}>
                    <a>
                      <img src={item.image} />
                      <span>{item.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper>
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
