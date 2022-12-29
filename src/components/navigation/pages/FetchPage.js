import React, {useState, useReducer} from 'react'
import axios from 'axios'

const initialState = {
  error: null,
  greeting: null,
}

function rewardPageReducer(state, action) {
  switch (action.type) {
    case 'SUCCESS': {
      return {
        error: null,
        reward: action.reward,
      }
    }
    case 'ERROR': {
      return {
        error: action.error,
        reward: null,
      }
    }
    default: {
      return state
    }
  }
}

export default function FetchPage({url}) {
  const [{error, greeting}, dispatch] = useReducer(
    rewardPageReducer,
    initialState,
  )
  const [buttonClicked, setButtonClicked] = useState(false)

  const fetchRewardPage = async url =>
    axios
      .get(url)
      .then(response => {
        const {data} = response
        const {reward} = data
        dispatch({type: 'SUCCESS', reward})
        setButtonClicked(true)
      })
      .catch(error => {
        dispatch({type: 'ERROR', error})
      })

  const buttonText = buttonClicked ? 'OK.' : 'Load Reward Page'

  return (
    <div>
      <button onClick={() => fetchRewardPage(url)} disabled={buttonClicked}>
        {buttonText}
      </button>
      {reward && <h1>{reward}</h1>}
      {error && <p role="alert">Oops, failed to fetch!</p>}
    </div>
  )
}
