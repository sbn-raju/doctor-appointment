import React, { useEffect, useState } from 'react'
import { whatsappTemplates } from '../constants/index.js';
import { useLocation, useNavigate } from 'react-router-dom';
import {useMutation, useQuery} from "@tanstack/react-query";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SendIcon from '@mui/icons-material/Send';
import toast from 'react-hot-toast';
import axios from "axios";

const WhataAppMessanger = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [templateId, setTemplateId] = useState();
    const [selectedTemplate, setSelectedTemplate] = useState()


    const numbers = location.state?.numbers || [];
    console.log(numbers)


    const handleBackPage = () =>{
        navigate(-1)
    }

    const sendWhatsAppMessage = async (numbers) =>{
        console.log(numbers)
        const response = await axios.post("/api/v1/admin/message/send/Message",{
            numbers,
            template_id:templateId
        });
        console.log(response);
        return response?.data;
    }

    const postMessages = useMutation({
        mutationFn:sendWhatsAppMessage,
        onSuccess:async(response)=>{
            console.log(response)
            toast.success(response?.message)
            navigate(-1);
        }
    })

    console.log(postMessages);


    const handleTemplateId = (id)=>{
        console.log(id);
        if(selectedTemplate == id){
            setSelectedTemplate();
        }
        else{
            setSelectedTemplate(id)
        }
        setTemplateId(id)
    }


    const handleSubmit = (event)=>{
        event.preventDefault();
        postMessages.mutate(numbers, templateId)
    }



    


  
    return (
        <div className='h-auto bg-gray-1 w-full p-10'>
            <div className='w-full flex justify-start my-4'>
                    <button className='bg-green-3 text-white px-4 py-2 font-medium rounded-xl'
                    onClick={handleBackPage}><KeyboardBackspaceIcon/>&nbsp;Back</button>
                </div>
            <form onSubmit={handleSubmit}>
                <div className='h-[600px] overflow-y-scroll grid grid-cols-2 gap-4 admin-scrollbar'>
                    {whatsappTemplates?.map((msg, index) => (
                        <div key={msg.id} className={`bg-white p-4 rounded-lg shadow-md m-10 cursor-pointer hover:border-[1px] ${selectedTemplate === msg.id ? 'bg-green-700 text-white' : 'hover:bg-green-400' } border-green-2`}
                        onClick={()=>handleTemplateId(msg.id)}> 
                            <h1 className={``}>{msg.Title}</h1>
                            <h2 className=''>{msg.subTitle}</h2>
                            <p>{msg.Des}</p>
                            <p>{msg.Date}</p>
                            <p>{msg.Time}</p>
                            <p>{msg.Instructions}</p>
                        </div>
                    ))}
                    <div className='bg-white p-4 rounded-lg shadow-md m-10 cursor-pointer col-span-2'>
                        <h1 className='text-green-4 my-2'>Custom Text</h1>
                        <textarea className='border-[1px] border-green-700 p-4 rounded-xl w-full h-24' placeholder='Enter your message here' />
                    </div>
                </div>
                <div className='w-full flex justify-end my-4'>
                    <button className='bg-green-3 text-white px-4 py-2 font-medium rounded-xl'><SendIcon/>&nbsp;Send Messages</button>
                </div>
            </form>
        </div>
    ) 
}

export default WhataAppMessanger