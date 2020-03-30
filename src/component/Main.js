//need to figure out how to associate the data I passed to firebase and the email address from the log in page so that the user can actually use their own account.
import React, { Component } from 'react';
import firebase from '../firebase';
import { Link, Redirect } from 'react-router-dom';

class Main extends Component{
    constructor(props){
        super();

        this.state = {
            listOfLogs: [],
            day:  '',
            startTime: '',
            endTime: '',
            note: '',
            redirect: false,
            email: props.userEmail,
            cellGenerator: [],
            weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            formDateToApend: [],
            startTimeToAppend: [],
            endTimeToAppend:[],
        }
    }

    retriveData = () =>{
        const dbRef = firebase.database().ref();

        dbRef.on('value', (response) => {
            const dataFromDb = response.val();

            const stateToBeSet = []

            for (let key in dataFromDb) {
                const logDetail = {
                    key: key,
                    log: dataFromDb[key]
                }
                if (logDetail.log.email === this.props.userEmail) {
                    stateToBeSet.push(logDetail)
                }
            }
            this.setState({
                listOfLogs: stateToBeSet
            })
        })
    }

    getEmail = () => {
        const localEmail = localStorage.getItem('localEmail')
        console.log(localEmail)
        this.setState({
            email: localEmail
        })
    }

    setEmailFromLocal = (userEmail) =>{
        localStorage.setItem('localEmail', userEmail)
        console.log(userEmail)
        this.setState({
            email: userEmail
        })
    }

    componentDidMount(){
        console.log(this.props.location.state)
        if (this.props.userEmail){
            this.generateCell()
            this.retriveData()
            this.formDate(this.state.weekdays)
            this.formStartTime()
        } else{
            this.setState({
                // redirect: true
            })
        }
    }
    // after clicking the plus button, the log form shows up
    newEventHandler = () => {
        let logDetail = document.querySelector('.logDetail');
        logDetail.classList.toggle('hide')
}

    // after clicking the clear all button
    removeAll = () => {
        const dbRef = firebase.database().ref();
        
        if (window.confirm("Do you really want to clear everything on your schedule?")){
            dbRef.remove();
            this.setState({
                cellGenerator: []
            },()=>{
                this.generateCell()
            })
        }
    }

    renderRedirect = () => {
        console.log(this.state.redirect)
        if (this.state.redirect) {
            return <Redirect to='/login'></Redirect>
        }
    }

    //after clicking add log, state update
    addLogHandler = (e) => {
        e.preventDefault()

        if (!this.state.day || !this.state.startTime || !this.state.endTime){
            alert('You need to fill in the day, start time and the end time')
        }
        // else if(this.state.endTime <= this.state.startTime) {
        //     alert('Please choose an end time that is later than the start time')
        // }
        else{
            let log = {
                "email": this.props.userEmail,
                "day": this.state.day,
                "startTime": this.state.startTime,
                "endTime": this.state.endTime,
                "note": this.state.note,
            }
            console.log(log)
            
            //push the data to the firebase
            const dbRef = firebase.database().ref();
            dbRef.push(log);
            
            //clear the note text input field
            document.querySelector('.note').value = '';
            this.color(this.state.listOfLogs)
        }
    }

    
    // when input change, record them
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleStartChange = (e) => {
        this.setState({
            startTime:e.target.value,
            endTimeToAppend: []
        }, () => {
            this.formEndTime()
        })
    }
    
    //grab the information from firebase and color corresponding cells
    color = (listOfItem) => {
        if (listOfItem.length > 0){
            listOfItem.forEach((item) => {
                const startTime = item.log.startTime;
                const endTime = item.log.endTime;
                const day = item.log.day
                for (let duration = endTime - startTime - 1; duration >= 0; duration--) {
                    let hour = Number(startTime) + duration
                    document.querySelector('.cellNo' + hour + '-' + day).style.backgroundColor = "#c5c1c0";
                    document.querySelector('.cellNo' + hour + '-' + day).innerHTML = item.log.note;
                }
            })
        }
        else if (listOfItem.length === 0){
        }
    }

    appendCell = ((i, content) => {
        let cellGenerator = this.state.cellGenerator
        cellGenerator.push(<div className={`cellNo${i} cell`} key={i} >{content}</div>)
        this.setState({
            cellGenerator: cellGenerator
        })
    })

    //give the calendar column and row names
    generateCell = () =>{
        const weekdays = this.state.weekdays
        let counter = 8
        for (let i = 0; i <= 111; i++) {
            if (1 <= i && i <= 7) {
                // add days of week in
                this.appendCell(i, weekdays[(i - 1)])
            }
            else {
                //add time period in
                if ((i % 8 === 0 && i > 8) || i === 8) {
                    this.appendCell(i, `${counter}:00`)
                    counter ++ 
                }
                else {
                    // give coordinates to each cell 
                    let x = Math.floor(i / 8);
                    let y = i % 8;
                    this.appendCell(x + "-" + y, ``)
                }
            }
        }
    }

    // add options for form 
    formDate = (weekdays) => {
        for (let i = 0; i <= 6; i++) {
            let formDateToApend = this.state.formDateToApend
            formDateToApend.push(<option key={`${weekdays[i]}`} value={`${i + 1}`} >{weekdays[i]}</option>)
            this.setState({
                formDateToApend: formDateToApend
            })
        }
    }
    

    formStartTime = () => {
        for (let i = 1; i <= 13; i++) {
            let startTimeToAppend = this.state.startTimeToAppend
            startTimeToAppend.push(<option key={`${i + 7}`} value={`${i}`} >{i + 7}</option>)
            this.setState({
                startTimeToAppend: startTimeToAppend
            })
        }
    }
    

    formEndTime = () => {
        for (let i = 1; i <= 13; i++) {
            if ((i + 1) > this.state.startTime) {
                let endTimeToAppend = this.state.endTimeToAppend
                endTimeToAppend.push(<option key={`${i + 8}`} value={`${i + 1}`} >{i + 8}</option>)
                this.setState({
                    endTimeToAppend: endTimeToAppend
                })
            }
        }
    }

    render(){
        
        this.color(this.state.listOfLogs)
        //generate cells
        
        return(
            <div className="mainContent">
                {this.renderRedirect()}
                <header>
                    <h1>Time Logger</h1>
                    <Link to="/">Log Out</Link>

                </header>
                <div className = "calendar">
                    {/* {this.renderRedirect()} */}
                    {this.state.cellGenerator.map((cell) => {
                        return cell
                    })}
                </div>

                <div className="newLog">
                    <button className="newLogPlus" onClick={this.newEventHandler}>+</button>
                    <label className="visuallyhidden">add a log</label>
                </div>
                <div className="clearAll">
                    <button className="clear" onClick={this.removeAll}>Clear</button>
                </div>

                <div className="logDetail hide">
                    <h2>Add log</h2>
                    {/* form start here */}
                    <form action="GET" onSubmit={this.addLogHandler} className="addLogForm">
                        <label htmlFor="date">Date</label>
                        <select onChange={this.handleChange} id="day" name="day" value={this.state.day} required>
                            <option value="">A day of the week</option>
                            {
                                this.state.formDateToApend.map((day) => {
                                    return day
                                })
                            }
                        </select>

                        <label htmlFor="statTime">Start time</label>
                        <select onChange={this.handleStartChange} id="startTime" name="startTime" value={this.state.startTime} required>
                            <option value="">Start time</option>
                            {
                                this.state.startTimeToAppend.map((time) => {
                                    return time
                                })
                            }
                        </select>

                        <label htmlFor="endTime">End time</label>
                        <select onChange={this.handleChange} id="endTime" name="endTime" value={this.state.endTime} required>
                            <option value="">End time</option>
                            {
                                this.state.endTimeToAppend.map((time) => {
                                    return time
                                })
                            }
                        </select>

                        <label htmlFor="note">Note</label>
                        <input type="text" name="note" className="note" value={this.state.note} onChange={this.handleChange} maxLength="15"/>

                        <button className="addLog" htmlFor="submit" onClick={this.addLogHandler} >Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Main