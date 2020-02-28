import React, { Component } from 'react';

class Main extends Component{
    constructor(){
        super();

        this.state = {
            listOfLogs: [],
            day:  '',
            time: '',
            note: '',
        }
    }

    // after clicking the plus button, the log form shows up
    newEventHandler = () => {
        let logDetail = document.querySelector('.logDetail');
        logDetail.classList.toggle('hide')
}
    //after clicking add log, state update
    addLogHandler = (e) => {
        e.preventDefault()
        let log = {
            "day": this.state.day,
            "time": this.state.time,
            "note": this.state.note
        }
        this.state.listOfLogs.push(log)
    
        //clear the note text input field
        document.querySelector('.note').value = ''
    }

    // when input change, record them
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render(){
        //generate cells
        const appendCell = ((i, content)=>{
            cellGenerator.push(
                <div className = {`cellNo${i} cell`} key={i}>{content}</div>
            )
        })

        //give the calendar column and row names
        const cellGenerator = [];
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let counter = 8;
        for (let i = 0; i <= 111; i++) {
            if (1<=i && i<=7){
                // add days of week in
                appendCell(i, weekdays[(i-1)])
            }
            else{
                //add time period in
                if ( (i % 8 === 0 && i > 8)|| i === 8) {
                    appendCell(i, `${counter}:00`)
                    counter ++;
                }
                else{
                    appendCell(i, `${i}`)
                }
            }
        }

        // add options for form 
        let formDateToApend = [];
        const formDate = (weekdays) => {
            for (let i = 0; i <= 6; i++){
                formDateToApend.push(<option key={`${weekdays[i]}`} value={`${weekdays[i]}`} >{weekdays[i]}</option>)
            }
        }
        formDate(weekdays)

        let formTimeToAppend = [];
        const formTime = () => {
            for (let i = 8; i <= 20; i++){
                formTimeToAppend.push(<option key={`${i}`} value={`${i}`} >{i}:00 - {i+1}:00</option>)
            }
        }
        formTime()
        
        return(
            <div className="mainContent">
                <div className = "calendar">
                    {cellGenerator.map((cell) => {
                        return cell
                    })
                    }
                </div>

                <div className="newLog">
                    <button className="newLogPlus" onClick={this.newEventHandler}>+</button>
                    <label className="visuallyhidden">add a log</label>
                </div>

                <div className="logDetail hide">
                    <h2>Add log</h2>
                    <form action="GET" onSubmit={this.addLogHandler}>
                        <label htmlFor="date">Date</label>
                        <select onChange={this.handleChange} id="day" name="day" value={this.state.day}>
                            {/* <option value="">Select a day of the week</option> */}
                            {
                                formDateToApend.map((day) => {
                                    return day
                                })
                            }
                        </select>

                        <label htmlFor="time">Select a timeslot</label>
                        <select onChange={this.handleChange} id="time" name="time" value={this.state.time}>
                            {/* <option value="">Select a day of the week</option> */}
                            {
                                formTimeToAppend.map((time) => {
                                    return time
                                })
                            }
                        </select>

                        <label htmlFor="note">Note</label>
                        <input type="text" name="note" className="note" value={this.state.note} onChange={this.handleChange}/>

                        <button className="addLog" htmlFor="submit">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Main