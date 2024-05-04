/* eslint-disable react/jsx-key */

function MisTorneos() {
  const torneos = [
    {
      "name": "Los pipones",
      "admins": ["tito el bambino", "ramon perez"],
      "participantes": 10
    },
    {
      "name": "BY MOVIL",
      "admins": ["tito el bambino", "ramon perez"],
      "participantes": 10
    },
    {
      "name": "UNCUYO INDUSTRIAL",
      "admins": ["tito el bambino", "ramon perez"],
      "participantes": 10
    }
  ]
  return (
    <div>
      <ul>
        {torneos.map(torneo => (
          <li>
            <div>
              <div> 
                <p>{torneo.name}</p>
              </div>
              <div>
                <p>admnis: {torneo.admins.join(", ")}</p>
                <p>participantes: {torneo.participantes}/64</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MisTorneos