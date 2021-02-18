const Sidebar = ({ teams, onDragStart, searchValue, searchChangeHandler }) => {
    
    return (
        <div className='app__sidebar'>
            <div className='input'>
                <input type="text" placeholder="Search team..." value={searchValue} onChange={searchChangeHandler} />
            </div>
            {teams.map(team => {
                return (
                    <div className='team'
                        key={team.id}
                        onDragStart = {(event) => onDragStart(event, team.name)}
                        draggable
                    >
                        <img src={team.logo} alt={team.name} />
                        <h3>{team.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Sidebar;