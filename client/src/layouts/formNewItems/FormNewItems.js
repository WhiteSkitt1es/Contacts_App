import { useState } from "react";

const FormNewItems = (props) => {
    
    const [fullName, setFullName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [notes, setNotes] = useState('');

    const submit = () => {
        if(fullName.trim() === '' || telephone.trim() === '' ) return;

        props.appendContact(fullName, telephone, notes);
        setFullName('');
        setTelephone('');
        setNotes('');
    }

    return (
    <div className='mt-3'>
        <form>
            <div className='mb-3'>
                <label className='form-label'>ФИО</label>
                <input className='form-control' type="text" value={fullName} onChange={(e) => {setFullName(e.target.value);}}></input>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Телефон</label>
                <input className='form-control' type="text" value={telephone} onChange={(e) => {setTelephone(e.target.value);}}></input>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Заметки</label>
                <textarea  className='form-control' rows={3} value={notes} onChange={(e) => {setNotes(e.target.value);}}></textarea>
            </div>
            <div>
                <button
                    type='button'
                    className='btn btn-primary'
                    onClick={submit}
                >
                    Новый контакт
                </button>
            </div>
        </form>
    </div>
    )
}

export default FormNewItems;