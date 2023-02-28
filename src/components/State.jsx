import axios from 'axios'
import { useState } from 'react'
import Container from './Container'

function State() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [result, setResult] = useState('');
  const submit = async () => {
    const result = await axios.post('https://api.matgargano.com/api/posts', {
      title, body
    });
    setResult(result);


  }

  return (
    <Container color={'black'}>
      <Container className="min-h-screen" constrained={true}>
        <p>Title: <input type="text" value={title} onChange={({target: {value}}) => setTitle(value)}></input></p>
        <p>Body: <input type="text" value={body} onChange={({target: {value}}) => setBody(value)}></input></p>
        <button onClick={submit}>Submit</button>
        <pre>{JSON.stringify(result,0,1)}</pre>
      </Container>
      
    </Container>
  )
}

export default State