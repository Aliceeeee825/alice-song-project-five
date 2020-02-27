import React, { Component } from 'react';

class Main extends Component{
    render(){
        const appendCell = ((i, content)=>{
            cellGenerator.push(
                <div className = {`cellNo${i} cell`} key={i}>{content}</div>
            )
        })

        const cellGenerator = [];
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const timeslots = {8:'8:00', 9:'9:00', 10:'10:00', 11:'11:00', 12:'12:00', 13:'13:00', 14:'14:00', 15:'15:00', 16:'16:00', 17:'17:00', 18:'18:00', 19:'19:00', 20:'20:00'}
        // const timeslots = [ '8:00',  '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00' ]
        let counter = 8;
        for (let i = 0; i <= 111; i++) {
            // 8*13 = 104
            // console.log(i%7===1)
            if (1<=i && i<=7){
                appendCell(i, weekdays[(i-1)])
                // console.log(i)
            }
            else{
                if ( (i % 8 === 0 && i > 8)|| i === 8) {
                    appendCell(i, timeslots[counter])
                    counter ++
                }
                else{
                    appendCell(i, 'hi')
                }
            }
            // else if (i % 7 === 1){
            //     // 8 15
            //     console.log(i)
            //     for (let index = 8; i<=20; i++){
            //         // appendCell(i, timeslots[index])
            //         // appendCell(i, time)
            //         console.log(index)
            //     }
            // }
            // else{
            //     appendCell(i, '')
            // }
        }

        return(
            <div className = "calendar">
                {cellGenerator.map((cell) => {
                    return cell
                })
                }
            </div>
        )
    }
}

export default Main