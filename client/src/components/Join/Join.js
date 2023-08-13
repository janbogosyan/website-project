import { useRef } from 'react';
import classes from './Join.module.css';
import emailjs from '@emailjs/browser';     //npm i @emailjs/browser --save    or without --save

const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_xatuusd', 'template_4esht5n', form.current, 'kFHUOLpDQ23h6dyRx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className={classes.join} id='join-us'>
            <div className={classes['join-left']}>
                <hr />
                <div>
                    <span className='stroke-text'>READY TO </span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span >YOUR GAMES </span>
                    <span className='stroke-text'> WITH US</span>
                </div>
            </div>

            <div className={classes['join-right']}>
                <form ref={form} onSubmit={sendEmail} className={classes['email-container']} >
                    <input
                        type='email'
                        name='user_email'
                        placeholder='Enter email'
                    />
                    <button className={classes.button}> Join now  </button>
                </form>
            </div>

        </div>
    )
}
export default Join;