import React from 'react'

export const Projects = () => {
  var list = [
    {'image': '', 'title': "Hello" , 'desc' : "My name is Anchit"},


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
