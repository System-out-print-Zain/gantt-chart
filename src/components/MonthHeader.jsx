import '../styles/MonthHeader.css';
function MonthHeader() {
    return (
        <div className="month-header">
            <div className="task-head">Tasks</div>
            <div className="jan month-head"><h4>Jan</h4></div>
            <div className="feb month-head"><h4>Feb</h4></div>
            <div className="march month-head"><h4>Mar</h4></div>
            <div className="april month-head"><h4>Apr</h4></div>
            <div className="may month-head"><h4>May</h4></div>
            <div className="june month-head"><h4>Jun</h4></div>
            <div className="july month-head"><h4>Jul</h4></div>
            <div className="aug month-head"><h4>Aug</h4></div>
            <div className="sep month-head"><h4>Sep</h4></div>
            <div className="oct month-head"><h4>Oct</h4></div>
            <div className="nov month-head"><h4>Nov</h4></div>
            <div className="dec month-head"><h4>Dec</h4></div>
        </div>
    )
}

export default MonthHeader;