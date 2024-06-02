import { useState, useEffect, useCallback } from "react";
import { BiCalendar } from "react-icons/bi";
import Search from "./components/Search.jsx"
import AddAppointment from "./components/AddAppoitment.jsx";
import AppointmentInfo from "./components/AppointmentInfo.jsx";


function App() {
  let [appointmentList, setAppointmentList] = useState([]);

  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        setAppointmentList(data)      
      });
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
      <BiCalendar className="inline-block text-red-400 align-top" /> Your Appoitment
      </h1>
      <AddAppointment />
      <Search />

      <ul className="divide-y divide-gray-200">
        {
          appointmentList.map(appointment => (
            <AppointmentInfo key={appointment.id} 
            appointment={appointment} 
            onDeleteAppoitment={
              appointmentId => {
                setAppointmentList(appointmentList.filter(appointment =>
                 appointment.id !== appointmentId))
              
              }
            }
             />
          ))
        }
      </ul>


    </div>
  )
}

export default App
