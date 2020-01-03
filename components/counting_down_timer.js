import React from 'react'

class CounterDownTimer extends React.Component {

    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };

    componentDidMount() {
        const date = this.props.endDate;

        this.interval = setInterval(() => {
            var time = this.getTimeRemaining(date);
            this.setState({ days: time.days, hours: time.hours, minutes: time.minutes, seconds: time.seconds });
        }, 1000);
    }

    componentWillUpdate() {
        if (this.state.seconds < 0) {
            clearInterval(this.interval)
        }
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());

        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
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

        return (
            <div className="container">
                <h1 id="head">Countdown to 2020 Year:</h1>

                {seconds >= 0 ?
                    (<div className="clockContainer">
                        <div id="clockdiv">
                            <div>
                                <span className="days">{days}</span>
                                <div className="smalltext">Days</div>
                            </div>
                            <div>
                                <span className="hours">{hours}</span>
                                <div className="smalltext">Hours</div>
                            </div>
                            <div>
                                <span className="minutes">{minutes}</span>
                                <div className="smalltext">Minutes</div>
                            </div>
                            <div>
                                <span className="seconds">{seconds}</span>
                                <div className="smalltext">Seconds</div>
                            </div>
                        </div>
                    </div>) :
                    (<div className='countEnd'> <div className='text'>2020 Year is end!</div></div>)
                }

                <style jsx>
                    {`
                    .container > h1{
                        text-align: center;
                    }

                    .clockContainer {
                        display: flex;
                        justify-content: center;
                    }

                    body{
                        text-align: center;
                        background: #00ECB9;
                        font-family: sans-serif;
                        font-weight: 100;
                    }
                    
                    h1{
                      color: #396;
                      font-weight: 100;
                      font-size: 40px;
                      margin: 40px 0px 20px;
                    }
                    
                    #clockdiv{
                        font-family: sans-serif;
                        color: #fff;
                        display: inline-block;
                        font-weight: 100;
                        text-align: center;
                        font-size: 30px;
                    }
                    
                    #clockdiv > div{
                        padding: 10px;
                        border-radius: 3px;
                        background: #00BF96;
                        display: inline-block;
                    }
                    
                    #clockdiv div > span{
                        padding: 15px;
                        border-radius: 3px;
                        background: #00816A;
                        display: inline-block;
                    }
                    
                    .smalltext{
                        padding-top: 5px;
                        font-size: 16px;
                    }

                    .countEnd {
                        display: flex;
                        justify-content: center;
                        color: white;
                        font-family: sans-serif;
                        font-weight: 100;
                        font-size: 40px;
                    }

                    .text{
                        background: red;
                    }
                    
                    `}
                </style>
            </div>
        );
    }

}

export default CounterDownTimer;