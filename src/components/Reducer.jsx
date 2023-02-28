import axios from 'axios'
import { useReducer } from 'react'
import Container from './Container'

function Reducer() {
  const initialState = {
    error: false,
    loading: false,
    title: '',
    body: '',
    excerpt: '',
    request: {},
  }
  // {type: 'title', value: 't'}
  const reducer = (state, action) => {
  
    switch(action.type) {
      case 'title':
      case 'body':
      case 'excerpt':
        return {
          ...state,
          [action.type]: action.value
        }
      case 'loading':
        return {
          ...state,
          loading: true
        }
      case 'notloading':
        return {
          ...state,
          loading: false,
        }
      case 'result': 
        return {
          ...state,
          result: action.result,
          error: false,
        }
      case 'error':
        return {
          ...state,
          error: action.message
        }
      
       


    }

    return state;

  }

  const [state, dispatch] = useReducer(reducer, initialState);


  const submit = async () => {
    dispatch({type: 'loading'})
    const {title,body} = state;
    try {
      const result = await axios.post('https://api.matgargano.com/api/posts', {
        title, body
      });
      dispatch({type: 'result', result:result.data })
    } catch(e){
      dispatch({type: 'error', message: e.response.data.message})
    }
    finally {
      dispatch({type: 'notloading'})

    }
    


  }

  const updateField = (e) => {
    // set{FIELD}(e.target.value)

    dispatch({type: e.target.name, value: e.target.value});
// {type: 'excerpt', value: 'a'}
  }

  return (
    <Container color={'black'}>
      <Container className="min-h-screen" constrained={true}>
        {state.error && <p style={{background:'tomato'}}>ERROR {state.error}</p>}
        {state.loading && <p>Loading...</p>}
        {!state.loading && <>
          <p>Title: <input type="text" value={state.title} name="title" onChange={updateField}></input></p>
          <p>Body: <input type="text" value={state.body} name="body" onChange={updateField}></input></p>
          <p>Excerpt <textarea value={state.excerpt} name="excerpt" onChange={updateField}></textarea></p>
          <button onClick={submit}>Submit</button>
          <pre>{JSON.stringify(state,0,1)}</pre>
        </>
        }
      </Container>
    </Container>
  )
}

export default Reducer