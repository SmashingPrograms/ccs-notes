const Appointment = ({customer}) => (
  <div>{customer.firstName}</div>
)

const AppointmentsListView = ({appointments}) => {
  const getAppointmentTime = startsAt => {
    const [h, m] = new Date(startsAt).toTimeString().split(':');
    return `${h}:${m}`
  }


  return (
    <ol>
      {appointments.map((appointment) => <li>{getAppointmentTime(appointment.startsAt)}</li>)}
    </ol>
  )
};

export {
  Appointment,
  AppointmentsListView,
}