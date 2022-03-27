import {useState} from "react";



export default function FeedbackForm (){

    const [modal, setModal] = useState(false);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        feedback: ""

    })

    const handleChange = (e) => {

        const {name, value} = e.target;
        
        setData({...data, [name]: value});

    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(data);

    };

    const cancelClick = () => {
        window.location ="/profile"
    }

    return(
        <div>
            <div>
                <h3>Feedback Form</h3>
                <button onClick={()=> setModal((value) => !value)}>Toggle Feedback</button>
            </div>
            <div>
                {modal && (
                    
                    <form onSubmit = {handleSubmit}>
                        {/* <button onClick={() => setModal((value) => !value)}></button> */}
                        <p>Please, provide feedback for your recent meeting</p>
                        <div>
                            <input placeholder="FirstName" name="firstName" onChange={(e) => handleChange(e)} />
                        </div>
                        <div>
                            <input placeholder="LastName" name="lastName" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div>
                            <input placeholder="Email" name="email" onChange={(e) => handleChange(e)}/>
                        </div>
                        <div>
                            <input placeholder="Feedback" name="feedback" onChange={(e) => handleChange(e)}/>
                        </div>
                        <button onSubmit = {handleSubmit}>Submit</button>
                        <button className="" onClick={cancelClick}>Cancel</button>
                    </form>
                    )
                }

            </div>
        </div>
    )
}



// export default function FeedbackForm (props) {
    
//         const [feedBack,setFeedBack]=useState([]);

//         const handleSubmit = async (e) => {
//             e.preventDefault();
           
//         }

//         const cancelClick = () => {
//             window.location ="/profile"
//         }

//         return(
//             <div className="profileEditFormComponent">
//                 <div> 
//                     <h2 className="">Please, provide feedback for your meeting {props.feedBack} </h2>
//                 </div>
//                 <form className="">
//                     <label htmlFor="feedback">Feedback</label>
//                     <input 
//                         className=""
//                         onChange={(e)=> setFeedBack(e.target.value)}
//                         value={feedBack}
//                         type="text"
//                         name=""
//                         placeholder=""  
//                     />
//                 </form>
    
//                 <div className="">
//                 <button className=""
//                         onClick={handleSubmit}
//                     > Submit
//                     </button>
//                     <button className=""
//                         onClick={cancelClick}
//                     >Cancel
//                     </button>
//                 </div>
//             </div>
//         )
        
//         return (
//             <>
//             <div className="section">
              
//             </div>
//             </>
//         )
    
//     };


