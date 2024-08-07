
import './App.css'
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'
function App() {
  let data = ['karan', 'anita reywhat', 'narender rawat', 'akanksha', 'nigga']
  return <div>
    <ClockHeading></ClockHeading>
    <ClockSlogan></ClockSlogan>
    <CurrentTime></CurrentTime>
    <ul>
      My family members
      {data.length == 0 ? <h2> mai bhi toh anath uh , mujhe nahi khilaogi?</h2> : null}
      {data.length == 0 && <h1> haan maibol rha hu ki mai bhi toh anath hu </h1>}
        {data.map((item) => <li key={item} className='list-group-data'> {item}</li>)}
      </ul>
  </div>
}

export default App
