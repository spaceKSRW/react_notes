
import './App.css'
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'
import CurrentTime from './components/CurrentTime'
function App() {
  let data =['karan','anita reywhat','narender rawat','akanksha','nigga']
  return <div>
  <ClockHeading></ClockHeading>
  <ClockSlogan></ClockSlogan>
  <CurrentTime></CurrentTime>
  <ul>
    My family members
    {data.map((item)=><li key={item} className='list-group-data'> {item}</li>)}
  </ul>
  </div>
}

export default App
