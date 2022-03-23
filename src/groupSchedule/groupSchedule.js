import days from '../dbEmo';
import Day from '../day';

const GroupSchedule = ({curDate, isWeek, isEven}) => {
    
    const renderItems = () => {
        let arr = isWeek ? [...days] : [...days.filter(el => el.id === curDate.getDay())];
        return arr.map(el => {
            let {day, id} = el,
                weekDays = getWeekDates(id);

            return (
                <div key={id}>
                    <div>
                        <p>{day}</p>
                        <p>{weekDays}</p>
                    </div>
                    <div>
                        <Day isEven={isEven} subjects={el.subj}/>
                    </div>
                </div>
            )
        })
    }

    const getWeekDates = (id) => {
        id = id === 0 ? 7 : id;
        let diff = (curDate.getDay() - id),
            leftBorder = new Date(curDate.getFullYear(), curDate.getMonth(), (curDate.getDate() - diff));
        
        return isWeek ? `${leftBorder.getDate()}.${leftBorder.getMonth()+1}` : `${curDate.getDate()}.${curDate.getMonth()+1}`
    }

    return(
        <div>{renderItems()}</div>
    )
}

export default GroupSchedule;