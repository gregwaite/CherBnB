import { connect } from 'react-redux'
import React from 'react';
import 'react-dates/initialize';
import moment from 'moment';
import { DateRangePicker, DayPickerRangeController, isInclusivelyAfterDay } from 'react-dates';
import { START_DATE } from 'react-dates/constants';

const today = moment();

const msp = state => {
  return {};
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
      startDate: null,
      endDate: null,
      focusedInput: null,
      calendarFocused: null,
      openDatePicker: false,
      hideKeyboardShortcutsPanel: true
    };
    this.availCal = this.props.availCal || false;
    this.checkBlockedDays = this.checkBlockedDays.bind(this);
    this.checkHighlightDays = this.checkHighlightDays.bind(this);
    this.moment = moment;
  }

  checkBlockedDays(day) {
    if (this.props.spot && this.props.spot.bookings) {
      if (this.availCal){
        return (this.props.spot.bookings.filter(booking => {
          return (day >= this.moment(booking.start_date) || day._i >= this.moment(booking.start_date)._i.slice(0, 10)) && day <= this.moment(booking.end_date);
        }).length > 0);
      } else {
        return (this.props.spot.bookings.filter(booking => {
          return day >= this.moment(booking.start_date) && day <= this.moment(booking.end_date);
        }).length > 0);
      }
    } else {
      return false;
    } 
  }
  
  checkHighlightDays(day) {
    return true;
  }

  render() {
    const { startDate, endDate, focusedInput } = this.state;
    if (this.props.type === "search") {
      const date = this.moment();
      this.startPlaceholder = date.format("MMM DD");
      this.endPlaceholder = date.add(1, 'd').format("MMM DD");
      this.showClear = false;
    } else {
      this.startPlaceholder = "mm/dd/yyyy";
      this.endPlaceholder = "mm/dd/yyyy";
      this.showClear = true;
    }
    // if (this.props.focus && !this.state.startDate && !this.state.focusedInput) {
    //   this.setState({focusedInput: START_DATE});
    // }
    // if (!this.props.focus && this.state.startDate && this.state.endDate && this.state.focusedInput) {
    //   this.setState({focusedInput: null});
    // }
    // if (this.state.startDate && this.state.endDate && this.state.focusedInput) {
    //   this.setState({focusedInput: null});
    // }
    if (this.props.availCal) {
      return (
        <section className='date-pickers'>
          <DayPickerRangeController
            startDate={null}
            endDate={null}
            numberOfMonths={2}
            noBorder
            isDayBlocked={day => this.checkBlockedDays(day)}
            isDayHighlighted={day => this.checkHighlightDays(day)}
            isOutsideRange={day => isInclusivelyAfterDay(today, day)}
            onPrevMonthClick={DayPickerRangeController.onPrevMonthClick}
            onNextMonthClick={DayPickerRangeController.onNextMonthClick}
            focusedInput={null}
            onFocusChange={focusedInput => this.setState({focusedInput})}
            hideKeyboardShortcutsPanel={true}
          />
        </section>
      );      
    } else {
      return ( 
        <section className='date-pickers'>
          <DateRangePicker
            readOnly={true}
            startDate={startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            startDatePlaceholderText={this.startPlaceholder}
            endDatePlaceholderText={this.endPlaceholder}
            onDatesChange={({startDate, endDate}) =>{ 
              this.setState({startDate, endDate});
              const start = startDate || {}
              this.props.handleStartChange(start._d);
              const end = endDate || {}
              this.props.handleEndChange(end._d);
            }} // PropTypes.func.isRequired,
            focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            numberOfMonths={this.props.numMonths}
            isDayBlocked={day => this.checkBlockedDays(day)}
            showClearDates={this.showClear}
            displayFormat={'MMM DD'}
          />
        </section>
      );
    }
  }
}

export default connect(msp, mdp)(DatePicker);