import './style.css';
export const Form = () => {
    return (
        <form>
            <fieldset className='fieldset'>
                <legend style={{ color: '#006633' }}>Customer contact information</legend>
                <p>
                    <label for={'name'}>FULL NAME or the name of the legal entity<em style={{ color: 'red' }} >*</em></label>
                    <input style={{backgroundColor: 'rgb(211, 241, 231)'}} type={'text'}></input>
                </p>
                <p>
                    <label for={'email'}>E-mail</label>
                    <input style={{backgroundColor: 'rgb(211, 241, 231)'}} type={'email'}></input>
                </p>
                <p>
                    <label for={'number'}>Contact number<em style={{ color: 'red' }}>*</em></label>
                    <input style={{backgroundColor: 'rgb(211, 241, 231)'}} type={'number'}></input>
                </p>
                <p>
                    <input type={'submit'} value={'Send'} style={{ backgroundColor: 'rgb(211, 241, 231)', color: '#006633' }}></input>
                </p>
            </fieldset>
            <fieldset className='fieldset'>
                <legend style={{ color: '#006633' }}>Desired Route</legend>
                <p>
                    <label for={'name'}>Place of shipment<em style={{ color: 'red' }}>*</em></label>
                    <input style={{backgroundColor: 'rgb(211, 241, 231)'}} type={'text'}></input>
                </p>
                <p>
                    <label for={'name'}>Unloading place <em style={{ color: 'red' }}>*</em></label>
                    <input style={{backgroundColor: 'rgb(211, 241, 231)'}} type={'text'}></input>
                </p>
                <p>
                    <label htmlFor={'connection'}>Сargo needs escort</label>
                    <input type={'radio'} name={'escort'} value={'escort'} id={'connection'} />
                </p>
                <p>
                    <label htmlFor={'conn'}>Cargo does not need escort</label>
                    <input type={'radio'} name={'escort'} value={'no escort'} id={'conn'} />
                </p>
                <p>
                    <input type={'submit'} value={'Send'} style={{ backgroundColor: 'rgb(211, 241, 231)', color: '#006633' }}></input>
                </p>
            </fieldset>
        </form>
    );
};