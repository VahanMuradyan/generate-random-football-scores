import { useState, useEffect } from 'react';
import './assets/scss/App.scss';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import barcelonaLogo from './assets/images/barcelona.png';
import bayernLogo from './assets/images/bayern.png';
import liverpoolLogo from './assets/images/liverpool.png';
import realMadridLogo from './assets/images/real-madrid.png';
import chelseaLogo from './assets/images/chelsea.png';
import juventusLogo from './assets/images/juventus.png';
import manchesterUnitedLogo from './assets/images/manchester-united.png';
import arsenalLogo from './assets/images/arsenal.png';
import manchesterCityLogo from './assets/images/manchester-city.png';
import psgLogo from './assets/images/psg.png';
import interLogo from './assets/images/inter.png';
import atleticoMadridLogo from './assets/images/atletico-madrid.png';
import borussiaDortmundLogo from './assets/images/borussia-dortmund.png';
import milanLogo from './assets/images/milan.png';
import tottenhamLogo from './assets/images/tottenham.png';
import romaLogo from './assets/images/roma.png';
import ajaxLogo from './assets/images/ajax.png';
import benficaLogo from './assets/images/benfica.png';
import napoliLogo from './assets/images/napoli.png';
import sevillaLogo from './assets/images/sevilla.png';
import bayerLogo from './assets/images/bayer.png';
import leipzigLogo from './assets/images/leipzig.png';
import leicesterLogo from './assets/images/leicester.png';
import portoLogo from './assets/images/porto.png';
import lazioLogo from './assets/images/lazio.png';
import villarrealLogo from './assets/images/villarreal.png';
import borussiaMunchengladbachLogo from './assets/images/borussia-mnchengladbach.png';
import realSociedadLogo from './assets/images/real-sociedad.png';
import atalantaLogo from './assets/images/atalanta.png';
import wolfsburgLogo from './assets/images/wolfsburg.png';

const App = () => {
    const [teams, setTeams] = useState([
        {
            id: 1,
            name: 'FC Barcelona',
            logo: barcelonaLogo,
            type: "inProgress",
        },
        {
            id: 2,
            name: 'FC Bayern Munich',
            logo: bayernLogo,
            type: "inProgress",
        },
        {
            id: 3,
            name: 'Liverpool F.C.',
            logo: liverpoolLogo,
            type: "inProgress",
        },
        {
            id: 4,
            name: 'Real Madrid C.F.',
            logo: realMadridLogo,
            type: "inProgress",
        },
        {
            id: 5,
            name: 'Chelsea F.C.',
            logo: chelseaLogo,
            type: "inProgress",
        },
        {
            id: 6,
            name: 'Juventus F.C.',
            logo: juventusLogo,
            type: "inProgress",
        },
        {
            id: 7,
            name: 'Manchester United F.C.',
            logo: manchesterUnitedLogo,
            type: "inProgress",
        },
        {
            id: 8,
            name: 'Arsenal F.C.',
            logo: arsenalLogo,
            type: "inProgress",
        },
        {
            id: 9,
            name: 'Manchester City F.C.',
            logo: manchesterCityLogo,
            type: "inProgress",
        },
        {
            id: 10,
            name: 'Paris Saint-Germain F.C.',
            logo: psgLogo,
            type: "inProgress",
        },
        {
            id: 11,
            name: 'Inter Milan',
            logo: interLogo,
            type: "inProgress",
        },
        {
            id: 12,
            name: 'Atlético Madrid',
            logo: atleticoMadridLogo,
            type: "inProgress",
        },
        {
            id: 13,
            name: 'Borussia Dortmund',
            logo: borussiaDortmundLogo,
            type: "inProgress",
        },
        {
            id: 14,
            name: 'A.C. Milan',
            logo: milanLogo,
            type: "inProgress",
        },
        {
            id: 15,
            name: 'Tottenham Hotspur F.C.',
            logo: tottenhamLogo,
            type: "inProgress",
        },
        {
            id: 16,
            name: 'A.S. Roma',
            logo: romaLogo,
            type: "inProgress",
        },
        {
            id: 17,
            name: 'AFC Ajax',
            logo: ajaxLogo,
            type: "inProgress",
        },
        {
            id: 18,
            name: 'S.L. Benfica',
            logo: benficaLogo,
            type: "inProgress",
        },
        {
            id: 19,
            name: 'S.S.C. Napoli',
            logo: napoliLogo,
            type: "inProgress",
        },
        {
            id: 20,
            name: 'Sevilla FC',
            logo: sevillaLogo,
            type: "inProgress",
        },
        {
            id: 21,
            name: 'Bayer 04 Leverkusen',
            logo: bayerLogo,
            type: "inProgress",
        },
        {
            id: 22,
            name: 'RB Leipzig',
            logo: leipzigLogo,
            type: "inProgress",
        },
        {
            id: 23,
            name: 'Leicester City F.C.',
            logo: leicesterLogo,
            type: "inProgress",
        },
        {
            id: 24,
            name: 'FC Porto',
            logo: portoLogo,
            type: "inProgress",
        },
        {
            id: 25,
            name: 'S.S. Lazio',
            logo: lazioLogo,
            type: "inProgress",
        },
        {
            id: 26,
            name: 'Villarreal CF',
            logo: villarrealLogo,
            type: "inProgress",
        },
        {
            id: 27,
            name: 'Borussia Mönchengladbach',
            logo: borussiaMunchengladbachLogo,
            type: "inProgress",
        },
        {
            id: 28,
            name: 'Real Sociedad',
            logo: realSociedadLogo,
            type: "inProgress",
        },
        {
            id: 29,
            name: 'Atalanta B.C.',
            logo: atalantaLogo,
            type: "inProgress",
        },
        {
            id: 30,
            name: 'VfL Wolfsburg',
            logo: wolfsburgLogo,
            type: "inProgress",
        },
    ]);

    const [filteredTeams, setFilteredTeams] = useState([]);

    const [homeTeamScore, setHomeTeamScore] = useState('');
    const [guestTeamScore, setGuestTeamScore] = useState('');
    const [searchValue, setSearchValue] = useState('');
    
    
    var draggableTeams = {
        inProgress: [],
        homeTeam: [],
        guestTeam: []
    };
    
    const onDragStart = (event, name) => {
        event.dataTransfer.setData("name", name);
    }
    
    const onDragOver = (event) => {
        event.preventDefault();
	}

	const onDrop = (event, cat) => {
        let name = event.dataTransfer.getData("name");

        if (cat == "homeTeam" && draggableTeams.homeTeam.length == 0) {
            let newTeams = teams.filter((team) => {
                if (team.name == name) {
                    team.type = cat;
                }
                return team;
            });
            setTeams(newTeams);
        } else if (cat == "guestTeam" && draggableTeams.guestTeam.length == 0) {
            let newTeams = teams.filter((team) => {
                if (team.name == name) {
                    team.type = cat;
                }
                return team;
            });
            setTeams(newTeams);
        }
	}

    
    const clear = () => {
        let newTeams = teams.filter((team) => {
            team.type = "inProgress";
            return team;
        });
        setTeams(newTeams);
        setHomeTeamScore('');
        setGuestTeamScore('');
    }

    const generateScore = () => {
        setHomeTeamScore(Math.floor(Math.random() * 5));
        setGuestTeamScore(Math.floor(Math.random() * 5));
    }

    const searchChangeHandler = (e) => {
        setFilteredTeams(teams.filter(team => team.name.toLowerCase().includes(e.target.value.toLowerCase())));
        setSearchValue(e.target.value);
    }

    teams.forEach((team) => {
        draggableTeams[team.type].push(
            <div key={team.id} 
                onDragStart = {(event) => onDragStart(event, team.name)}
                draggable
                className="team">
                <img src={team.logo} alt={team.name} />
                <h3>{team.name}</h3>
            </div>
        );
    });

    useEffect(() => {
        setFilteredTeams(teams)
    }, [])

    
    return (
        <div className="app">

            <Content
                onDragOver={onDragOver}
                onDrop={onDrop}
                draggableTeams={draggableTeams}
                homeTeamScore={homeTeamScore}
                guestTeamScore={guestTeamScore}
                generateScore={generateScore}
                clear={clear}
            />

            <Sidebar
                teams={filteredTeams}
                onDragStart={onDragStart}
                searchValue={searchValue}
                searchChangeHandler={searchChangeHandler}
            />
        </div>
    );
}

export default App;
