import React from 'react'
import myPic from '../../public/img/bg.jpeg';

export const Projects = () => {
  var list = [
    {'image': {myPic}, 'title': "Hello" , 'desc' : "My name is Anchit"},


  ]
  var Cards = list.map((image, title, desc)=>{
        <div>
            <div>
                <image>{image}</image>
                <div>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
  })
  return (
    <div>
        {Cards}
    </div>
  )
}
