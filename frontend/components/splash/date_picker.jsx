import { connect } from 'react-redux'
import React from 'react';
import 'react-dates/initialize';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';

const today = moment()

const msp = state => {
  return {}
};

const mdp = dispatch => {
  return {};
};

class DatePicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      address: '',
      lng: 0,
      lat: 0,
      startDate: '',
      endDate: '',
      focusedInput: 'startDate',
      calendarFocused: null,
      openDatePicker: false,
      hideKeyboardShortcutsPanel: true
    };
  }

  render () {
    const { startDate, endDate } = this.state;
    const startDateString = startDate && startDate.format('ddd, MMM Do');
    const endDateString = endDate && endDate.format('ddd, MMM Do');
    return ( 
      <section className='date-pickers'>
        <DateRangePicker
          startDate={startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          startDatePlaceholderText="mm/dd/yyyy"
          endDatePlaceholderText="mm/dd/yyyy"
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          numberOfMonths={1}
        />
      </section>
    );
  }
}

export default connect(msp, mdp)(DatePicker);