import React, {useEffect, useState} from 'react';
import Calendar from '../calendar';
import GroupSchedule from '../groupSchedule';

let Schedule = () => {
    const [curDate, setCurDate] = useState(new Date()),
          [isEven, setIsEven] = useState(false),
          [isWeek, setIsWeek] = useState(true);

    useEffect(() => {
        let zeroDate = new Date(2022, 0, 2);
        setIsEven(Math.ceil((curDate-zeroDate)/(1000*60*60*24*7)) % 2 === 0 ? true : false) 
    }, [curDate, isEven, isWeek])

    const updateIsWeek = (t) => {
        setIsWeek(t);
    }

    const updateDate = (year, month, day) => {
        setCurDate(new Date(year, month, day))
    }

    const setToday = () => {
        setCurDate(new Date())
    }

    let p = isEven ? "Четная" : "Нечетная"
    return(
        <>
            <Calendar curDate={curDate} updateDate={updateDate} updateIsWeek={updateIsWeek} isWeek={isWeek} setToday={setToday}/>
            <GroupSchedule curDate={curDate} isWeek={isWeek} isEven={isEven}/>
            <p>{curDate.getDate()}.{curDate.getMonth()+1}</p>
            <p>{p}</p>
        </>
    )
}

export default Schedule

