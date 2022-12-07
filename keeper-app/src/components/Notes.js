import '../css/Notes.css';

function Notes(props) {
    return (
        <div className = 'notes-container'>
            <h2 className = 'notes-heading'>{props.title}</h2>
            <p className = 'notes-content'>{props.content}</p>
        </div>
    );
}

export default Notes;
