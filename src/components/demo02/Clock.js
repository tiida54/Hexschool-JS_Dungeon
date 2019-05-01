import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Clock.scss';

class Clock extends Component {
    constructor(props) {
        super(props)
        this.time = []
        let date = new Date()
        this.hour = date.getHours()
        if (this.hour > 12) this.hour = this.hour - 12
        this.state = { hour: this.hour, minute: date.getMinutes(), second: date.getSeconds() }
        this.tick = this.tick.bind(this);

        for (let i = 0; i < 73; i++) {
            this.sin = Math.sin((i / 72) * (Math.PI * 2))
            this.cos = Math.cos((i / 72) * (Math.PI * 2))
            if (i % 6 === 0 && i !== 0) {
                let hr = i;
                if (hr / 6 > 9) {
                    hr = hr / 6 - 9
                } else {
                    hr = hr / 6 + 3
                }
                this.time.push(
                    <text class="text" x={135 + (90 * this.cos)} y={140 + (90 * this.sin)} fill="#ffffff">{hr}</text>,
                    <line class="line" x1={140 + (100 * this.cos)} y1={140 + (100 * this.sin)} x2={140 + (120 * this.cos)} y2={140 + (120 * this.sin)} style={{ 'stroke': 'Tomato' }} />,
                    <text class="text" x={135 + (125 * this.cos)} y={140 + (128 * this.sin)} fill="#ffffff">{hr + 12}</text>
                )
            }
            else if ((i - 3) % 6 === 0 && i !== 0) {
                this.time.push(
                    <circle cx={140 + (110 * this.cos)} cy={140 + (110 * this.sin)} r="5"
                        fill="#FF7600" />
                )
            }
            else if (i !== 0) {
                this.time.push(
                    <circle class="center" cx={140 + (110 * this.cos)} cy={140 + (110 * this.sin)} r="1"
                        fill="#ffffff" />,
                )
            }
        }

    }
    componentDidMount() {
        this.timer = setInterval(
            this.tick,
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    tick() {
        let date = new Date()
        this.hour = date.getHours()
        if (this.hour > 12) this.hour = this.hour - 12
        this.minutes = date.getMinutes()
        this.seconds = date.getSeconds()
        this.setState({
            hour: this.hour, minute: date.getMinutes(), second: date.getSeconds()
        })
        console.log(this.state)
    }
    render() {
        return (
            <div class="clock">
                <svg width="100%" height="100%" version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    {this.time}
                </svg>
                <div class="hours pointer" style={{ 'transform': `rotate(${this.state.hour / 12 * 360 - 90}deg)` }}>
                    <svg width="100%" height="100%" version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <line x1="30" y1="4" x2="55" y2="4" />
                    </svg>
                </div>
                <div class="seconds" style={{ 'transform': `rotate(${this.state.second / 60 * 360 - 90}deg)` }}>
                    <svg width="100%" height="100%" version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <polyline points="5,20 25,20 40,10 50,30 60,20 100,20" />
                        <circle cx="100" cy="20" r="5"
                            fill="#91D109" />
                    </svg>
                </div>
                <div class="minutes pointer" style={{ 'transform': `rotate(${this.state.minute / 60 * 360 - 90}deg)` }}>
                    <svg width="100%" height="100%" version="1.1"
                        xmlns="http://www.w3.org/2000/svg">
                        <line x1="8" y1="4" x2="50" y2="4" />
                        <circle cx="5" cy="4" r="2"
                            fill="#ffffff" />
                    </svg>
                </div>
            </div>
        )
    }
}

export default Clock

window.addEventListener("load", () => {
    let myComponent =
        <div class="container">
            <Clock />
        </div>;
    ReactDOM.render(myComponent, document.getElementById('root'));
});
