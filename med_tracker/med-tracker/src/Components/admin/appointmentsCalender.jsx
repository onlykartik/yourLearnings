import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function Calender(props){
    return(
        <>
        <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={props.events}
            />
        </>
    )
}

export default Calender