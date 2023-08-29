
import {Route, Routes} from 'react-router-dom'
import Test from './Test';
import Glavnaya from './Glavnaya';
import Photo from './Photo';
import Knopka_otziv from './Knopka_otziv';
import Contacts from './Contacts'


function Content() {
    
    
    
    
    
    return (
        <>
            <div id='CONTENT' className="content">
                
                <Routes>
                    <Route path='/' element = {<Glavnaya />}></Route>
                    <Route path='Test' element = {<Test />}></Route>
                    <Route path='photo' element = {<Photo />}></Route>
                    <Route path='otziv' element = {<Knopka_otziv />}></Route>
                    <Route path='contacts' element = {<Contacts />}></Route>
                    
                </Routes>
            
            </div>


            
        </>
    )
}

export default Content;