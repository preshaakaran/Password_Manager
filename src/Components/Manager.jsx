import React, { useState } from 'react'
import { useRef,useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const ref=useRef()
    const passwordRef=useRef()
    const [form, setform] = useState({site:"",username:"",password:""})
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords=localStorage.getItem("passwords");
        if(passwords){
            setpasswordArray(JSON.parse(passwords));
        }
        
    
      
    }, [])
    


    const showPassword = () => {
      passwordRef.current.type="text"
      if(ref.current.src.includes("icons/eyecross.png")){
        ref.current.src="icons/eye.png"
        passwordRef.current.type="password"
      }
      else{
        ref.current.src="icons/eyecross.png"
        passwordRef.current.type="text"
      }
      
    }


    const savePassword = () => {
        if(form.site.length>3 && form.username.length>3 && form.password.length >3){
            setpasswordArray([...passwordArray,{...form,id:uuidv4()}])
            localStorage.setItem("passwords",JSON.stringify([...passwordArray,{...form,id:uuidv4()}]))
            setform({ site: "", username: "", password: "" })
            toast('Password saved!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else{
            toast('Error:Password not saved!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    const handleChange=(e) => {
      setform({...form,[e.target.name]:e.target.value})
    }

    const copyText=(text) => {
        toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
      navigator.clipboard.writeText(text)
    }

    const deletePassword = (id) => {
        
        let c = confirm("Do you really want to delete this password?")
        if(c){
            setpasswordArray(passwordArray.filter(item=>item.id!==id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id))) 
            toast('Password Deleted!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
            
    }
    const editPassword = (id) => {
        setform(passwordArray.filter(i=>i.id===id)[0]) 
        setpasswordArray(passwordArray.filter(item=>item.id!==id)) 

    }
    
    
    
    
    
  return (
    <div>
        <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />
     


      

      <div className="mt-16  md:p-0 md:mycontainer max-w-2xl text-black flex flex-col p-4 items-center">
        <h1 className='text-2xl text font-bold text-center'>
            <span className="text-green-700">
                &lt;
            </span>
            Pass
            <span className="text-green-700">
                LOCK/ &gt;
            </span>
        </h1>
        <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>
        <input value={form.site} onChange={handleChange} className="rounded-full border border-green-500 w-full px-4" type="text" name="site" id="site" placeholder='Enter Website Name'/>
        <div className='flex flex-col md:flex-row w-full justify-between gap-8 my-3'>
            <input value={form.username} onChange={handleChange} className="rounded-full border border-green-500 w-full px-4" type="text" name="username" id="username" placeholder='Enter Username'/>

            <div className="relative">
            <input ref={passwordRef} value={form.password} onChange={handleChange} className="rounded-full border border-green-500 w-full px-4" type="password" name="password" id="password" placeholder='Enter Password'/>
            <span className='absolute right-[1px] top-[1px] cursor-pointer' onClick={showPassword}>
                <img ref={ref} className="p-1" width={26} src="icons/eye.png" alt="eye" />
            </span>
            </div>
            
        </div>
        
        <button onClick={savePassword} className='flex justify-center m-4 items-center bg-green-500 w-fit px-3 py-1 rounded-full hover:bg-green-400 border-1 border-green-900'><lord-icon
                    src="https://cdn.lordicon.com/jgnvfzqg.json"
                    trigger="hover">
                </lord-icon>
                Save
        </button>
        </div>

        <div className="passwords">
           <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
           {passwordArray.length==0 && <div>No passwords to show</div>} 
           {passwordArray.length!=0 && 
           <table className="table-auto w-full rounded-md overflow-hidden mb-10">
            <thead className='bg-green-800 text-white'>
                <tr>
                <th className='py-2'>Site</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
                <th className='py-2'>Actions</th>
                </tr>
            </thead>
            <tbody className='bg-green-100'>
                {passwordArray.map((item)=>{
                    return <tr>
                    <td className=' py-2 border border-white text-center'>
                        <div className="flex items-center justify-center">
                           <a href="{item.site}" target='_blank'>{item.site}</a>
                    <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                <lord-icon 
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                            </div>
                                            </td>
                    <td className=' py-2 border border-white text-center'>
                    <div className="flex items-center justify-center"><span>{item.username}</span>
                    <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                <lord-icon 
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                            </div>
                    </td>
                    <td className=' py-2 border border-white text-center'>
                    <div className="flex items-center justify-center"><span>{item.password}</span>
                    <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                <lord-icon 
                                                    style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover" >
                                                </lord-icon>
                                            </div>
                                            </div>
                    </td>

                    <td className='justify-center py-2 border border-white text-center'>
                                        <span className='cursor-pointer mx-1' onClick={()=>{editPassword(item.id)}}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                                trigger="hover"
                                                style={{"width":"25px", "height":"25px"}}>
                                            </lord-icon>
                                        </span>
                                        <span className='cursor-pointer mx-1'onClick={()=>{deletePassword(item.id)}}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                style={{"width":"25px", "height":"25px"}}>
                                            </lord-icon>
                                        </span>
                        </td>
                    </tr>
                })}
                
               
            </tbody>
            </table>}
        </div>
    </div>

    
  )
}

export default Manager
