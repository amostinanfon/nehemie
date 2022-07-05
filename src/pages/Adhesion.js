import React from 'react';
import './adhesion.css';
//import mobile from "../responsive";
import './adhesion.css'


function Adhesion() {
  return (
    <div>
        <div className='container'>
            <div className='warapper'>
                <div className='title'>créer un compte</div>
                <form>
                    <input placeholder="prénom"/>
                    <input placeholder="nom"/>
                    <input placeholder="utilisateur"/>
                    <input placeholder="email"/>
                    <input placeholder="mot de passe"/>
                    <input placeholder="confirmer le mot de passe"/>
                    <div className='agreement'>
                        Occaecat non velit incididunt ad cupidatat irure et officia
                        Occaecat non velit incididunt ad cupidatat <b>PRIVACY POLICY</b>.
                    </div>
                    <button>créer</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Adhesion;



// const Container = styled.div`
//     width: 100vw;
//     height: 100vh;
//     background: linear-gradient(
//         rgba(255,255,255,0.5), 
//         rgba(255,255,255,0.5)
//     ),
//     url("https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
//     center;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `
// const Input = styled.input`
//     flex: 1;
//     min-width: 40%;
//     margin: 20px 10px 0px 0px;
// `
// const Form = styled.form`
//     display: flex; 
//     flex-wrap: wrap;
// `
// const Title = styled.h1`
//     text-transform: uppercase;
//     font-size: 24px;
//     font-weight: 300;
// `
// const Wrapper = styled.div`
//     width: 40%;
//     padding: 20px;
//     background-color: white;
//     ${mobile({width: "75%"})}

// `
// const Agreement = styled.span`
//     font-size: 12px;
//     margin: 20px 0px;
// `
// const Button = styled.button`
//     width: 40%;
//     border: none;
//     padding: 15px 20px;
//     background-color: teal;
//     color: white;
//     cursor: pointer;
//     text-transform: uppercase;
// `
