import { useState, useEffect } from 'react'
import api from './plugins/axios.ts'
import { ToastContainer, toast } from 'react-toastify'
import {Item,Item2} from './components'
import * as repl from "node:repl";


// interface AppState {
//   "userId": number,
//   "id": number,
//   "title": string,
//   "completed": boolean
// }


function App() {
  const [jobs, setJobs] = useState([])
  const [count, setCount] = useState()
  const notify = () => toast.warning("Wow so easy!")

  const getJobs = async () => {
    try {
      const {data} = await api.get('/todos')
      console.log(data)
      setJobs(data)
    } catch (e) {
      console.log(e)
      // toast.error("Wow so easy!")
    }
  }

  useEffect(() => {
      getJobs()

    console.log(jobs)

  }, [jobs,count]);

  console.log(jobs)





  return (
      <>

        <ToastContainer />
        <button onClick={notify}>Notify!</button>
          {Item('Xuan banh','red')}
          {Item('Xuan son','green')}
          <Item2/>
        {/*{*/}
        {/*  jobs.map((job, index) => <p key={index}>{job.title}</p>)*/}
        {/*}*/}

      </>
  )
}
export default App