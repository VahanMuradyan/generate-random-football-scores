import React from 'react'

const Content = (props) => {
    const { onDragOver, onDrop, draggableTeams, homeTeamScore, guestTeamScore, generateScore, clear } = props;
    return (
        <div className='app__content'>
            <h1 className='title'>Generate Random Score (for fun)</h1>
            <p className='desc'>Drag and Drop teams from right side</p>
            <div className='app__content__wrapper'>
                <div
                    onDragOver={(event) => onDragOver(event)}
                    onDrop={(event) => onDrop(event, "homeTeam")}
                    style={{ border: !draggableTeams.homeTeam.length ? '1px dashed #fff' : 'none' }}
                >
                    {draggableTeams.homeTeam.length ?
                        draggableTeams.homeTeam[0] :
                        <span className='add__team' title="Drag and Drop home team here">+</span>     
                    }
                </div>
                <div>
                    <h2 className='score'>{homeTeamScore + ':' + guestTeamScore}</h2>
                </div>
                <div
                    onDragOver={(event) => onDragOver(event)}
                    onDrop={(event) => onDrop(event, "guestTeam")}
                    style={{ border: !draggableTeams.guestTeam.length ? '1px dashed #fff' : 'none' }}
                >
                    {draggableTeams.guestTeam.length ?
                        draggableTeams.guestTeam[0] :
                        <span className='add__team' title="Drag and Drop home team here">+</span>
                    }
                </div>
                {draggableTeams.homeTeam.length && draggableTeams.guestTeam.length && !homeTeamScore ?
                    <button className='btn__success' onClick={generateScore}>Generate</button> : <></>
                }
                {draggableTeams.homeTeam.length || draggableTeams.guestTeam.length ?
                    <button className='btn__danger' onClick={clear}>Clear</button> : <></>
                }
            </div>
        </div>
    )
}

export default Content;