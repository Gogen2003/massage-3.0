import './Design/contacts.css';
import {Button} from '@mui/material';
function Contacts() {
    
    return(
        <>
            <div className='contacts_main'>
                <div className='contacts_content'>
                    <section>
                        <div className='contacts_section_1'>
                            <div className='subsection contacts_subsection_1'></div>
                            <div className='subsection subsection_main contacts_subsection_2'>
                                <div className='contacts_picture'><img src='https://koshka.top/uploads/posts/2021-11/1638211025_1-koshka-top-p-dva-kotika-1.jpg'/></div>
                            </div>
                            <div className='subsection contacts_subsection_3'></div>
                        </div>
                    </section>
                    <section><div className='contacts_section_2'><span>Меня зовут Максим и я массажист</span></div></section>   
                    <section><div className='contacts_section_3'><h2>+7 921 930 45 88</h2></div></section>
                    <section><div className='contacts_section_4'><span>Санкт-Петербург</span></div></section>
                    <section><div className='contacts_section_4'><a  href='https://www.youtube.com/watch?v=V4voLVePsv4'><Button id='bt' type = 'submit' sx={{borderRadius: '25px', background: 'black', width: '40%', height: '55px',}} variant="contained">НАПИСАТЬ В INSTAGRAM</Button></a></div></section>
                    <section><div className='contacts_section_5'><a  href='https://www.youtube.com/watch?v=V4voLVePsv4'><Button id='bt' type = 'submit' sx={{borderRadius: '25px', background: 'black', width: '40%', height: '55px'}} variant="contained">НАПИСАТЬ В ВКОНТАКТЕ </Button></a></div></section>
                    <section><div className='contacts_section_6'><a  href='https://www.youtube.com/watch?v=V4voLVePsv4'><Button id='bt'type = 'submit' sx={{borderRadius: '25px', background: 'black', width: '40%', height: '55px'}} variant="contained">НАПИСАТЬ В  WHATS APP</Button></a></div></section>
                    <section><div className='contacts_section_7'><a  href='https://www.youtube.com/watch?v=V4voLVePsv4'><Button id='bt' type = 'submit' sx={{borderRadius: '25px', background: 'black', width: '40%', height: '55px'}} variant="contained">НАПИСАТЬ В TELEGRAM </Button></a></div></section>
                </div>

            </div>
        </>
    )
}
export default Contacts;