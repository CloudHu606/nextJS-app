import CounterDownTimer from '../components/counting_down_timer'

const Index = () => (
    <div>
        <h1>Demo</h1>
        <CounterDownTimer endDate='2020-12-31' />
        <style jsx>
            {`
                h1 {
                    text-align: center;
                    font-size: 60px;
                }
            ` }
        </style>
    </div>
);

export default Index;
