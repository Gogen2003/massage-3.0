import {useForm} from 'react-hook-form';
import {TextField} from '@mui/material'
import axios from 'axios';
import {Button} from '@mui/material';


function Photo() {
    const {
        register, // регистрирует поля для формы
        formState: {   // создает различные свойства
            errors,
        },
        handleSubmit,
    } = useForm();
    const mySubmit = () => {
        let message = `<b>Имя: ${document.getElementById('tg').Name.value}</b>\n`;
        message += `<b>Номер: ${document.getElementById('tg').Number.value} </b>`
    

        axios.post(`https://api.telegram.org/bot5824953890:AAGY21BTD06sGC-pLjDhV6CV5RVZFgqzkcQ/sendMessage`, {
            chat_id : "-1001964388457",
            parse_mode: 'html',
            text: message
    })
    }
    return (
        // добавляем register и в него диструктуризацию чтобы получить сразу в него все методы
        <>
            <form  id='tg' onSubmit={handleSubmit(mySubmit)}>
                <div style={{marginBottom: "25px", marginTop: "25px"}}>
                    <TextField fullWidth name='Name' {...register("Name", {
                        required: "Заполните поле",
                        minLength: {
                            value: 2,
                            message: "Введено меньше 2 символов!"
                        },
                        maxLength: {
                            value: 10,
                            message: 'Введено больше 10 символов'
                        }
                    })} type='text' id="standard-basic" label="Name" variant="standard" /> 
                </div>
                <div>{errors?.Name && <p>{errors?.Name.message}</p>}</div>
                    
                <div>
                    <TextField fullWidth name='Number' {...register("Number", {
                        required: "Заполните поле",
                        minLength: {
                            value: 11,
                            message: "Введено меньше 11 символов!"
                        },
                        maxLength: {
                            value: 12,
                            message: "Введено больше 11 символов!"
                        },
                        pattern: {
                            value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                            message: 'Введите корректный номер телефона'
                        }
                        
                    })} type='text' id="standard-basic" label="Number"  variant="standard" />
                </div>   
                <div>{errors?.Number && <p>{errors?.Number.message}</p>}</div>
                
                <Button type = 'submit' sx={{borderRadius: '5px', background: 'black', mt: '25px'}} variant="contained">ОТПРАВИТЬ </Button>

                
            </form>
        </>
    )
}
export default Photo;

