

import PropTypes from 'prop-types';




function Task(props) {
    return (
        <div className="task"
        style={{color: props.complete ? "green" : "#0d0220"} }
        >
            <h1>{props.taskName}</h1>
            <button onClick={() => props.completeTask(props.id)}>completed</button>
            <button className="delete" onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
    )
}

Task.propTypes = {
    taskName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    complete: PropTypes.bool.isRequired,
    deleteTask: PropTypes.func.isRequired,
    completeTask: PropTypes.func.isRequired,
}

export default Task

