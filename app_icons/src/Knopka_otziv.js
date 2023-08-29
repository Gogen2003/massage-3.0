import React from 'react';
import { useState, useEffect } from 'react';
import './Design/review.css'

function Knopka_otziv() {
  
  var arr = JSON.parse(localStorage.getItem('result')) || [];
  
  const [kuk, setKuk] = useState(0);
  useEffect(()=> {
    var out = '';
    for(let i = 0;  i < arr.length; i ++) {
      let data = localStorage.getItem('result');
      let new_data = JSON.parse(data);
      new_data.reverse();
      out += 
      
      `
        <div>
          <p><h3>${new_data[i].name}</h3><p>
          <p>${new_data[i].social_media}<p>
          <p >${new_data[i].content}<p>
        </div>
      `

      document.getElementById('domik').innerHTML = out;
      
    }
   }, [kuk])
  return (
    <>
      
        <div className="Modal_window">
          <div className="Modal_window_content">
            <div className="Modal_window_content_header">
              <span className="a"><h1>Ваш отзыв</h1></span>
            </div>
            <div className="Modal_window_content_main">
              <div  className="textfield_block">
                <div id='name'  className="a">
                  <div className="text-field">
                    <input className="text-field__input" type="text" name="login" id="form1" placeholder="Name" />
                  </div>
                </div>
                <div id='sociaty' className="a">
                  <div className="text-field">
                    <input className="text-field__input" type="text" name="login" id="form2" placeholder="Ссылка на соцсети" />
                  </div>
                </div>
                <div id="txtarea" className="a">
                  <div className="text-field">
                    <input className="text-field__input" type="text" name="login" id="form3" placeholder="Ваш отзыв" />
                  </div>
                </div>
              </div>
            </div>
            <div className="Modal_window_content_footer">
              <button onClick={()=> {
                 setKuk(kuk + 1)
                 let element1 = document.getElementById('form1');
                 let element2= document.getElementById('form2');
                 let element3= document.getElementById('form3');
                 arr.push({name: `${element1.value}`, social_media: `${element2.value}`, content: `${element3.value}` })
                 localStorage.setItem('result', JSON.stringify(arr))
                 
                 
              }} type = 'submit' sx={{borderRadius: '5px', background: 'black', mt: '25px', }} variant="contained">ОТПРАВИТЬ </button>
            </div>
          </div>
        </div>
        <div id='domik'></div>
    </>
  )
}
export default Knopka_otziv;
