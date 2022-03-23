const Day = ({isEven, subjects}) => {

    const getDaySchedule = () => {
        let arr = [...subjects];
        
        return arr.map(el => {
            let {time, cab, place, id} = el,
                subj = isEven ? el.subjectNameEven : el.subjectNameOdd;
            let content = (
                <div key={id}>
                    <p>{time}</p>
                    <p>{subj}</p>
                    <div>
                        {place}
                        {cab}
                    </div>
                </div>
            )
            return subj !== "" ? content : ''
        })
    }

    let content = getDaySchedule();

    return(
        <div>
            {content}
        </div>
    )
}

export default Day;