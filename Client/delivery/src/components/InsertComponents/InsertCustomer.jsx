
import React from "react";
import styled from "styled-components"
function InsertCustomer(){
    return (
        <Div>
            <div className="insertCustomer">
                <div className="Content_Insert">
                        <form className="mainForm" action="">
                           <div className="YourName form_items">
                                <div className="firtname">
                                    <p>First name</p>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="Lastname">
                                    <p>Last name</p>
                                    <input type="text" />
                                </div>
                           </div>

                           <div className="Information form_items">
                               <div className="email">
                                   <p>Email</p>
                                   <input type="text" placeholder="Phone Number" />
                               </div>
                               <div className="PhoneNumber">
                                   <p>Phone Number</p>
                                   <input type="text" placeholder="Phone number" />
                               </div>
                           </div>

                           <div className="address form_items">
                               <p>Your address</p>
                               <input type="text" name="" placeholder="Tỉnh" id="" />
                               <input type="text" name="" placeholder="Huyện" id="" />
                               <input type="text" name="" placeholder="Địa chỉ cụ thể" id="" />
                           </div>

                             <div className="btn_addUser">
                                 <button>Add user</button>
                             </div>
                        </form>
                    </div>
            </div>
        </Div>
    )
}
export default InsertCustomer;
const Div = styled.div`
  border: 1px solid #c2c2c23b;
    border-radius: 10px ;
    text-align: left;
    margin-left: 40px;
    margin-right: 20px;
    box-shadow:  5px 5px #8888883d;
    background-color: #dfdbdb3c;
    .insertCustomer{
        p{
            margin-top: 10px;

        }
        input{
            width: 500px;
            height: 39px;
            border-radius: 7px;
            border: 1px solid #24242434;
            padding-left:20px;
        }
        .mainForm{
            margin-left: 70px;
            margin-top: 30px;
            .form_items{
                z-index: 999;
                color: #000000;
                border-radius: 5px !important;
                background-color: #FFFF ;
                width: 70%;
                height: 200px;
                box-shadow: 10px 5px 5px #afaeae;
                p,input{
                    margin-left: 30px;
                }
               
         }
         
         .btn_addUser{
             margin-top: 10px;
             margin-left: 55%;
             margin-bottom: 10px;
             button{
                 padding: 10px 20px 10px 20px;
                 border-radius: 5px;
                 border: 1px solid #2260e7;
                 font-weight: 500;
                 background-color: #FFFF;
                 :hover{
                     color: #FFFF;
                     background-color: #2260e7;
                     border: 1px solid #ff0000 !important;
                     transition: 0.5s all;
                 }
                }
         }
        }
        .address{
            input{
                margin-top:10px;
            }
        }
       
    }
    
`;