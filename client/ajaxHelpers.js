import { renderAllPlayers } from "./renderHelpers";

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2206-ftb-et-web-ft-b';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${`2206-ftb-et-web-ft-b`}/`;


export const fetchAllPlayers = async () => {

        try {
          const response = await fetch(`${APIURL}/players`);
          const result = await response.json();
          if (result.error) throw result.error;
          console.log('all players result', result.data)
          const {players} = result.data
          return players;
        } catch (err) {
          console.error('Uh oh, trouble fetching players!', err);
        }
      };

export const fetchSinglePlayer = async (playerId) => {

    try {
    const response = await fetch(`${APIURL}/players/${playerId}`);
    const result = await response.json();
    console.log('fetch player result', result.data.player)
    if (result.error) throw result.error;
      return result.data.player
    } catch (err) {
        console.error('trouble fetching player id', err);
    }
    
};
fetchSinglePlayer(4989)
export const addNewPlayer = async (playerObj) => {

  try {
    const response = await fetch(`${APIURL}/players/${playerObj}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Rufus',
          breed: 'Irish Setter',
        }),
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
  };



export const removePlayer = async (playerId) => {

    try {
     const response = await fetch(`${APIURL}/players/${playerId}`, {
       method: 'DELETE',
     });
     const result = await response.json();
     if (result.error) throw result.error;
     return;
    } catch (err) {
     console.error(`Whoops, trouble removing player #${playerId} from the roster!`, err);
    }
    };
    

    

