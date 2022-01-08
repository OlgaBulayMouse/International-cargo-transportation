import { useState } from 'react';
import './style.css';
export const Form = () => {
    const handlerChange = event => {
        setFormDate({
            ...formDate,
            [event.target.name]: event.target.value,
        })
    };
    const [formDate, setFormDate] = useState({
        fullname: '',
        mail: '',
        telephone: 0,
        escort: 'yes',

    });
    const handlerFormDate = event => {
        event.preventDefault();
        console.log(formDate);
    };

    return (
        <form onSubmit={handlerFormDate}>
            <fieldset className='fieldset'>
                <legend style={{ color: '#006633' }}>Customer contact information</legend>
                <p>
                    <label htmlFor={'fullname'}>
                        FULL NAME or the name of the legal entity
                        <em style={{ color: 'red' }} >*</em>
                    </label>
                    <input style={{ backgroundColor: 'rgb(211, 241, 231)' }}
                        name={'fullname'}
                        type={'text'}
                        id={'fullname'}
                        value={formDate.fullname}
                        onChange={handlerChange}>
                    </input>
                </p>
                <p>
                    <label htmlFor={'mail'}>E-mail<em style={{ color: 'red' }}>*</em></label>
                    <input style={{ backgroundColor: 'rgb(211, 241, 231)' }}
                        name={'mail'}
                        type={'email'}
                        id={'mail'}
                        value={formDate.mail}
                        onChange={handlerChange}>
                    </input>
                </p>
                <p>
                    <label htmlFor={'number'}>Contact number</label>
                    <input style={{ backgroundColor: 'rgb(211, 241, 231)' }}
                        name={'telephone'}
                        type={'number'}
                        id={'number'}
                        value={formDate.telephone}
                        onChange={handlerChange}>
                    </input>
                </p>
            </fieldset>


            <fieldset className='fieldset'>
                <legend style={{ color: '#006633' }}>Desired Route</legend>
                <p>
                    <label htmlFor={'city'}>
                        Place of shipment
                        <em style={{ color: 'red' }}>*</em>
                    </label>
                    <input style={{ backgroundColor: 'rgb(211, 241, 231)' }}
                        type={'text'}
                        id={'city'}>
                    </input>
                </p>
                <p>
                    <label htmlFor={'citys'}>
                        Unloading place
                        <em style={{ color: 'red' }}>*</em>
                    </label>
                    <input style={{ backgroundColor: 'rgb(211, 241, 231)' }}
                        type={'text'}
                        id={'citys'}>
                    </input>
                </p>
                <p>
                    <label htmlFor={'connection'}>Сargo needs escort</label>
                    <input type={'radio'}
                        name={'escort'}
                        value={'yes'}
                        id={'connection'}
                        onChange={handlerChange}/>
                </p>
                <p>
                    <label htmlFor={'conn'}>Cargo does not need escort</label>
                    <input type={'radio'} 
                        name={'escort'}
                        value={'no'}
                        id={'conn'}
                        onChange={handlerChange}/>
                </p>
                <p>
                    <input type={'submit'}
                        value={'Send'}
                        style={{
                            backgroundColor: 'rgb(211, 241, 231)',
                            color: '#006633'
                        }}>
                    </input>
                </p>
            </fieldset>
        </form>
    );
};