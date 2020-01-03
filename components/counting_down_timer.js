import React from 'react'

class CounterDownTimer extends React.Component {

    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };

    componentDidMount() {
        const date = '2020-12-31';

        this.interval = setInterval(() => {
            var time = this.getTimeRemaining(date);
            this.setState({ days: time.days, hours: time.hours, minutes: time.minutes, seconds: time.seconds });  
        }, 1000);      
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    getTimeRemaining (endtime) {
       var t = Date.parse(endtime) - Date.parse(new Date());
 
       var seconds = Math.floor( (t/1000) % 60 );
       var minutes = Math.floor( (t/1000/60) % 60 );
       var hours = Math.floor( (t/(1000*60*60)) % 24 );
       var days = Math.floor( t/(1000*60*60*24) );
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    render() {
        var { days, hours, minutes, seconds } = this.state;
        return(
            
            <div id="clockdiv">
                Days: <span className="days">{days}</span><br/>
                Hours: <span className="hours">{hours}</span><br/>
                Minutes: <span className="minutes">{minutes}</span><br/>
                Seconds: <span className="seconds">{seconds}</span>
            </div>          
        );
    }


}

export default CounterDownTimer;