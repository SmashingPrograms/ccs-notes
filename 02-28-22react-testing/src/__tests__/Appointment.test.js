// from './../components/Appointment' import Appointment;
import React from 'react';
import ReactDOM from 'react-dom';
import {Appointment, AppointmentsListView} from './../components/Appointment/Appointment';

// describe('Appointment', () => {

//   let customer, container;

//   // beforeEach(() => {
//   //   container = document.createElement('div');
//   // });


//   const render = component => React.DOM.render(component, container);

//   // it('renders the customer\'s name', () => {
//   //   render(<Appointment customer={{ firstName: 'Connor' }} />);
//   //   expect(container.textContent).toMatch('Connor');
//   // });

//   // it('renders another customer name', () => {
//   //   render(<Appointment customer={{ firstName: 'Billy' }} />);
//   //   expect(container.textContent).toMatch('Billy');
//   // })

// });

describe('AppointmentsListView', () => {
  let container;

  const today = new Date();
  const appointments = [
    {startsAt: today.setHours(12, 0)},
    {startsAt: today.setHours(13, 0)},
  ];

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = (component) => ReactDOM.render(component, container);

  it(`renders multiple appointments in an ol element`, () => {
    render(<AppointmentsListView appointments={appointments} />);
    expect(container.querySelector('ol')).not.toBeNull();
    expect(container.querySelector('ol').children).toHaveLength(2);
  })

  it('renders each appointment in a li', () => {
    render(<AppointmentsListView appointments={appointments} />);
    expect(container.querySelectorAll('li')).toHaveLength(2);
    expect(container.querySelector('li')[0].textContent).toEqual("12:00");
    expect(container.querySelector('li')[1].textContent).toEqual("13:00");
  })
});