import React from 'react';
import Layout from '../../components/common/layout';
import CounterDownTimer from '../../components/timer/counting_down_timer';
import { getTimeRemaining } from '../../lib/time';

class Demo1 extends React.Component {

    render() {

        const timeObj = getTimeRemaining('2020 / 12 / 31');

        return (
            <Layout>
                <div className='container'>
                    <CounterDownTimer time={timeObj} endDate='2020 / 12 / 31' />
                </div>

                <style jsx>
                    {`
                     .container {
                         display: flex;
                     }
                   
                   `}
                </style>
            </Layout>
        )
    }

}


export default Demo1;
