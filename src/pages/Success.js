import React from 'react';


export default function Success() {

   

  return (

   <div 
      style={{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        margin:'40px 0 0 20px'

      }}
   
   >
       <div style={{
      height: "50vh",
      alignItems: "center",
      justifyContent: "center",
  }}>
      <img src='https://png.pngtree.com/png-vector/20190228/ourmid/pngtree-check-mark-icon-design-template-vector-isolated-png-image_711429.jpg' alt='' 
             style={{height:"200px", width:"200px", margin:"8px"}}
            />
      <div>
            <button
                style={{
                    border: "none",
                    width: 200,
                    borderRadius: 30,
                    padding: "25px",
                    margin:"3px",
                    backgroundColor: "seagreen",
                    color: "white",
                    cursor: 'pointer',
                    fontWeight: '800'
                }}
            >
                <p style={{textTransform:"uppercase"}}>Effectuez avec succès</p>      
            </button><br/>
    </div>

    </div>
   </div>

   )

  }

