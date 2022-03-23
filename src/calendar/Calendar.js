const Calendar = ({curDate, updateDate, isWeek ,updateIsWeek, setToday}) => {
    
    const calculateWeekBorders = () => {
        let leftBorder = curDate.getDay() - 1,
            rightBorder = 7 - curDate.getDay(),
            leftDate = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate()-leftBorder),
            rightDate = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate()+rightBorder);

        return `${leftDate.getDate()}.${leftDate.getMonth()+1} - ${rightDate.getDate()}.${rightDate.getMonth()+1}`
    }

    const shift = (days) => {
        updateDate(curDate.getFullYear(), curDate.getMonth(), (curDate.getDate()+days))
    }

    let shiftStep = isWeek ? 7 : 1,
        weekSwitcher = isWeek ? <button onClick={() => updateIsWeek(false)}>По дням</button> : <button onClick={() => updateIsWeek(true)}>По неделям</button>,
        borders = isWeek ? calculateWeekBorders() : `${curDate.getDate()}.${curDate.getMonth()+1}`;
    
    return(
        <div>
            <button onClick={() => shift(-shiftStep)}>Предыдущая неделя</button>
            <div>{borders}</div>
            <button onClick={() => shift(shiftStep)}>Следующая неделя</button>
            {weekSwitcher}
            <button onClick={() => setToday()}>Сегодня</button>
        </div>
    )
}

export default Calendar;