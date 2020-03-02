import React, { Component } from 'react';
import firebase from '../firebase';
// import * as firebase from 'firebase/app';

class Main extends Component{
    constructor(){
        super();

        this.state = {
            email: 'alice',
            listOfLogs: [],
            day:  '',
            startTime: '',
            endTime: '',
            note: '',
        }
    }

    componentDidMount(){
        const dbRef = firebase.database().ref();

        dbRef.on('value', (response) => {
            const dataFromDb = response.val();

            const stateToBeSet = []

            for (let key in dataFromDb) {
                const logDetail = {
                    key: key,
                    log: dataFromDb[key]
                }
                stateToBeSet.push(logDetail)
            }

            this.setState({
                listOfLogs: stateToBeSet
            })
        })

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
            "startTime": this.state.startTime,
            "endTime": this.state.endTime,
            "note": this.state.note
        }
        // this.setState({
        //     listOfLogs[email]: log
        // })
            
        // console.log(this.state.listOfLogs)

        //color the corresponding timeslot on the timetable
        // console.log('.cellNo' + startTime + '-' + this.state.day)
        

        //push the data to the firebase
        const dbRef = firebase.database().ref();
        dbRef.push(log);
        // dbRef.push()
        // this.setState({
        //     listOfLogs: [],
        // })
        
    
        //clear the note text input field
        document.querySelector('.note').value = ''
        console.log('list of logs',this.state.listOfLogs)
    }

    
    // when input change, record them
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    color = (listOfItem) => {
        if (listOfItem.length > 0){
            listOfItem.forEach((item) => {
                const startTime = item.log.startTime;
                const endTime = item.log.endTime;
                const day = item.log.day
                console.log('startime', startTime)
                console.log('endTime', endTime)
                for (let duration = endTime - startTime - 1; duration >= 0; duration--) {
                    let hour = Number(startTime) + duration
                    console.log(hour)
                    document.querySelector('.cellNo' + hour + '-' + day).style.backgroundColor = "#f7ce3e";
                    document.querySelector('.cellNo' + hour + '-' + day).innerHTML = item.log.note;
                }
            })
        }
    }

    
    render(){
        this.color(this.state.listOfLogs)
    //     if (this.state.listOfLogs.length > 0){
    //         console.log("above color", this.state.listOfLogs)
    //         console.log(this.state.listOfLogs[0].log.startTime)
    //         this.state.listOfLogs.forEach((log) => {
    //             this.color(log)
    //     }   
    // }

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
                    // give coordinates to each cell 
                    let x = Math.floor(i/8);
                    let y = i % 8;
                    appendCell(x + "-" + y, ``)
                }
            }
        }

        // add options for form 
        let formDateToApend = [];
        const formDate = (weekdays) => {
            for (let i = 0; i <= 6; i++){
                formDateToApend.push(<option key={`${weekdays[i]}`} value={`${i + 1}`} >{weekdays[i]}</option>)
            }
        }
        formDate(weekdays)

        let startTimeToAppend = [];
        const formStartTime = () => {
            for (let i = 1; i <= 13; i++){
                startTimeToAppend.push(<option key={`${i+7}`} value={`${i}`} >{i+7}</option>)
            }
        }
        formStartTime()

        let endTimeToAppend = [];
        const formEndTime = () => {
            for (let i = 1; i <= 13; i++) {
                if ((i+1) > this.state.startTime){
                    endTimeToAppend.push(<option key={`${i + 8}`} value={`${i+1}`} >{i + 8}</option>)
                }
            }
        }
        formEndTime()
        
        
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
                    {/* form start here */}
                    <form action="GET" onSubmit={this.addLogHandler} className="addLogForm">
                        <label htmlFor="date">Date</label>
                        <select onChange={this.handleChange} id="day" name="day" value={this.state.day} required>
                            <option value="">A day of the week</option>
                            {
                                formDateToApend.map((day) => {
                                    return day
                                })
                            }
                        </select>

                        <label htmlFor="statTime">Start time</label>
                        <select onChange={this.handleChange} id="startTime" name="startTime" value={this.state.startTime} required>
                            <option value="">Start time</option>
                            {
                                startTimeToAppend.map((time) => {
                                    return time
                                })
                            }
                        </select>

                        <label htmlFor="endTime">End time</label>
                        <select onChange={this.handleChange} id="endTime" name="endTime" value={this.state.endTime} required>
                            <option value="">End time</option>
                            {
                                endTimeToAppend.map((time) => {
                                    return time
                                })
                            }
                        </select>

                        <label htmlFor="note">Note</label>
                        <input type="text" name="note" className="note" value={this.state.note} onChange={this.handleChange} />

                        <button className="addLog" htmlFor="submit" onClick={this.addLogHandler} max-width="30">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Main