import '../css/Header.css'
import Button from '@material-ui/core/Button';


function Header(props) {

    function handleForm() {
        props.setShowForm(true); 
    }
    
    return (
        <div className='heading-container'>
            <h1 className='heading'>Keeper App</h1>
            <Button onClick={handleForm} variant="contained" color="secondary">
                Add Note
            </Button>
        </div>
    );
}

export default Header;
