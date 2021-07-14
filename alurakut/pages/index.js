import {useState} from 'react'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations';

function ProfileSidebar(props ){
  return(
  <Box as="aside">
    <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px'}}></img>

    <hr />
    <p>
      <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
        @{props.githubUser}
      </a>
    </p>
    <hr />

    <AlurakutProfileSidebarMenuDefault />
  </Box>
  );
}
export default function Home() { 
  const githubUser = 'andgomes95';
  const [comunidades,setComunidades] = useState([{
    id: 'huehaohaeou',
    title: 'Alurakut', 
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
  }]);
  const pessoasFavoritas = [
    'Remoliveira',
    'paulohtobias',
    'Niehaus', 
    'Luzim', 
    'jenaroaaugusto', 
    'Matheusrlr'
  ]
  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{gridArea: 'profileArea'}}>
      <ProfileSidebar githubUser={githubUser}/>
      </div>
      <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
        <Box>
        <h1 className="title">Bem vindos</h1>
        <OrkutNostalgicIconSet></OrkutNostalgicIconSet>
        </Box>
        <Box>
          <h2 className="subTitle"> O que você deseja fazer?</h2>
          <form 
            onSubmit={function handleCriaComunidade(e){
              e.preventDefault();
              const dadosDoFrom = new FormData(e.target);
              const comunidade = {
                id: new Date().toISOString(),
                title:dadosDoFrom.get('title'),
                image:dadosDoFrom.get('image')
              }
              setComunidades([...comunidades,comunidade]);
            }}
          >
            <div>
              <input 
                placeholder="Qual vai ser o nome da sua comunidade?" 
                name="title" 
                arial-label="Qual vai ser o nome da sua comunidade?"
                type="text"
              />
            </div>
            <div>
              <input 
                placeholder="Coloque uma URL para usar de capa?" 
                name="image" 
                arial-label="Coloque uma URL para usar de capa?"
              />
            </div>
            <button>
              Criar comunidade
            </button>
          </form>
        </Box>
      </div>
      <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
            Pessoas da Comunidades ({comunidades.length})
          </h2>
        <ul>
            {comunidades.map((item)=>{
              return (
                <li  key={item.id}>
                  <a href={`/users/${item.title}`} key={item.id}>
                    <img src={`${item.image}`} />
                    <span> {item.title}</span>
                  </a>
                </li>
                )
            })}
          </ul>
        </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da Comunidades ({pessoasFavoritas.length})
          </h2>
          <ul>
            {pessoasFavoritas.map((item)=>{
              return (
                <li key={item}>
                  <a href={`/users/${item}`} key={item}>
                    <img src={`https://github.com/${item}.png`} />
                    <span> {item}</span>
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
