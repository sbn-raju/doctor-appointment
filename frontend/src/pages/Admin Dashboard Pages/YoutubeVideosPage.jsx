import React, { useState, useEffect } from 'react'
// import { testimonialVideos, youtubeVideos } from '../../constants';
import {useMutation, useQuery} from "@tanstack/react-query";
import { useForm } from 'react-hook-form';
import axios from "axios";
import toast from 'react-hot-toast';
import { queryClient } from '../../main';

const YoutubeVideosPage = () => {
  document.title = "Youtube Videos | Admin"
  const [videoType, setVideoType] = useState('youtube');
  const { register, handleSubmit, reset } = useForm();

  //Youtube videos
  const fetchYouTubeVideos = async()=>{
    const response = await axios.get("/api/v1/youtube/get/videos")
    return response.data.data  
  } 

  const {data: fetchedYoutubeVideos} = useQuery({
    queryKey:['fetchedYoutubeVideos'],
    queryFn:fetchYouTubeVideos,
  })

  console.log(fetchedYoutubeVideos);


  // Setting the Link of the Iframe for the Youtube Video 
  const setYoutube = async(link)=>{
    const response = await axios.post("/api/v1/youtube/video", link)
    return response
  }

  const setYoutubeVideos = useMutation({
    mutationFn:setYoutube,
    onSuccess: async()=>{
      return await queryClient.invalidateQueries({queryKey:['fetchedYoutubeVideos']})
    }
  })

  const onSubmitForYoutube = (link) =>{
    console.log(link);
    setYoutubeVideos.mutate(link)
  }

  useEffect(() => {
    if(setYoutubeVideos.isSuccess){
     toast.success("Video SuccessFully created")
     reset()
    }
    else if(setYoutubeVideos.isError) {
     toast.error("Videos are not set")
    }
 }, [setYoutubeVideos.isSuccess, setYoutubeVideos.isError, reset])
 

 const deletePrevYoutube = async(id)=>{
  const response = await axios.delete(`/api/v1/youtube/video/?id=${id}`)
  return response
 }

 const deleteYoutubeVideo = useMutation({
  mutationFn:deletePrevYoutube,
  onSuccess:async()=>{
    return await queryClient.invalidateQueries({queryKey:['fetchedYoutubeVideos']}) 
  }
 })

 console.log(deleteYoutubeVideo);

 const handleDeleteYoutube = (id)=>{
   deleteYoutubeVideo.mutate(id)
 }

 useEffect(() => {
  if(deleteYoutubeVideo.isSuccess){
   toast.success("Successfully deleted the Youtube Video")
  }
  else if(deleteYoutubeVideo.isError) {
   toast.error("Youtube Video is not deleted")
  }
}, [deleteYoutubeVideo.isSuccess, deleteYoutubeVideo.isError])
 







  //Testimonials 
  const fetchTestimonialVideos = async()=>{
    const response = await axios.get("/api/v1/youtube/get/testimonials")
    return response.data.data  
  }

  const {data: fetchedTestimonialsVideos} = useQuery({
    queryKey:['fetchedTestimonialsVideos'],
    queryFn:fetchTestimonialVideos
  })

  console.log(fetchedTestimonialsVideos);


  // Setting the Link of the Iframe for the testiomonials Video
  const setTestimonials = async(link_test)=>{
    const response = await axios.post("/api/v1/youtube/testimonials", link_test)
    return response
  }

  const setTestimonialsVideos = useMutation({
    mutationFn:setTestimonials,
    onSuccess: async()=>{
      return await queryClient.invalidateQueries({queryKey:['fetchedTestimonialsVideos']})
    }
  })

  const onSubmitForTestimonials = (link_test) =>{
    console.log(link_test);
    setTestimonialsVideos.mutate(link_test)
  }

  useEffect(() => {
    if(setTestimonialsVideos.isSuccess){
     toast.success("Testimonials SuccessFully created")
     reset()
    }
    else if(setTestimonialsVideos.isError) {
     toast.error("Testimonials are not set")
    }
 }, [setTestimonialsVideos.isSuccess, setTestimonialsVideos.isError, reset])


 const deletetestimonialsYoutube = async(id)=>{
  const response = await axios.delete(`/api/v1/youtube/testimonials?id=${id}`)
  return response
 }

 const deleteTestimonialsVideo = useMutation({
  mutationFn:deletetestimonialsYoutube,
  onSuccess:async()=>{
    return await queryClient.invalidateQueries({queryKey:['fetchedTestimonialsVideos']}) 
  }
 })

 console.log(deleteTestimonialsVideo);

 const handleDeleteTestimonials = (id)=>{
  deleteTestimonialsVideo.mutate(id)
 }

 useEffect(() => {
  if(deleteTestimonialsVideo.isSuccess){
   toast.success("Successfully deleted the Testimonials Video")
   
  }
  else if(deleteTestimonialsVideo.isError) {
   toast.error("Testimonials Video is not deleted")
  }
}, [deleteTestimonialsVideo.isSuccess, deleteTestimonialsVideo.isError])
 
 
 



  return (
    <div className='h-auto w-full bg-gray-1 flex flex-col justify-center items-center px-8'>
      <div className='w-full'>
        <div className='flex flex-row items-center mb-4'>
          <h1 className="text-md md:text-xl lg:text-2xl">Hello <span className="font-medium">Admin!!</span></h1>
          
          {/* Vertical Line */}
          <span className="ml-4 border-[1px] border-l-gray-500 h-12"></span>
          
          <div className="flex justify-center items-center ml-3">
            <span className="text-sm ml-0 md:ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
              </svg>
            </span>
            <p className="text-sm ml-1">Youtube Videos & Testimonials</p>
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center items-center mb-6'>
        <button className={`w-1/2 py-2 shadow-md mx-2 rounded-xl text-medium ${videoType === 'youtube' ? 'bg-green-3 text-white' : 'bg-white text-green-3'}`} onClick={() => setVideoType('youtube')}>Youtube Videos</button>
        <button className={`w-1/2 py-2 shadow-md mx-2 rounded-xl text-medium ${videoType === 'testimonial' ? 'bg-green-3 text-white' : 'bg-white text-green-3'}`} onClick={() => setVideoType('testimonial')}>Testimonials</button>
      </div>

      { videoType === 'youtube' ? (
        <>
          <div className='w-full px-20 bg-white p-8 rounded-2xl shadow-md'>
            <p className='text-lg mb-2'>Youtube Videos*</p>
            <form onSubmit={handleSubmit(onSubmitForYoutube)}>
              <input 
               id='link_iframe'
               className='border-[1px] border-green-700 p-4 rounded-xl w-full h-24' placeholder='Copy Iframe from youtube and paste here' 
               {...register("link_iframe",{required:true})}
              />
              <div className='w-full flex justify-end mt-2'>
                <button className='bg-green-3 text-white px-4 py-2 font-medium rounded-xl'>Submit</button>
              </div>
            </form>
          </div>

          <div className='w-full rounded-2xl shadow-md bg-white my-6 pb-4 overflow-x-auto admin-scrollbar'>
            <div className='pt-4 sticky top-0 z-10 bg-white border-b-[1px] border-b-gray-2'>
              <ul className='grid grid-cols-3 pb-2'>
                <li className='mx-auto'>Video</li>
                <li className='mx-auto'>Operation</li>
              </ul>
            </div>
            <div className='overflow-auto scrollbar h-52'>
              {fetchedYoutubeVideos?.map((vid, index) => (
                <div key={index} className='grid grid-cols-3 p-4'>
                  <iframe width="300" height="200" src={vid.link_iframe} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                  </iframe>
                  <button className='mx-auto' key={vid.id} onClick={()=>handleDeleteYoutube(vid.id)}>
                    <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1333_134)">
                      <path d="M7.00004 23.2877C7.00004 24.6168 8.05004 25.7043 9.33337 25.7043H18.6667C19.95 25.7043 21 24.6168 21 23.2877V8.78768H7.00004V23.2877ZM22.1667 5.16268H18.0834L16.9167 3.95435H11.0834L9.91671 5.16268H5.83337V7.57935H22.1667V5.16268Z" fill="#497246"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_1333_134">
                      <rect width="28" height="29" fill="white" transform="translate(0 0.329346)"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='w-full px-20 bg-white p-8 rounded-2xl shadow-md'>
            <p className='text-lg mb-2'>Testimonial Videos*</p>
            <form onSubmit={handleSubmit(onSubmitForTestimonials)}>
              <input className='border-[1px] border-green-700 p-4 rounded-xl w-full h-24' placeholder='Copy Iframe of the testimonial and paste here' 
              {...register("links_iframe_testimonials",{required:true})}
              />
              <div className='w-full flex justify-end mt-2'>
                <button className='bg-green-3 text-white px-4 py-2 font-medium rounded-xl'>Submit</button>
              </div>
            </form>
          </div>

          <div className='w-full rounded-2xl shadow-md bg-white my-6 pb-4 overflow-x-auto admin-scrollbar'>
            <div className='pt-4 sticky top-0 z-10 bg-white border-b-[1px] border-b-gray-2'>
              <ul className='grid grid-cols-3 pb-2'>
                <li className='mx-auto'>Video</li>
                <li className=''>Title</li>
                <li className='mx-auto'>Operation</li>
              </ul>
            </div>
            <div className='overflow-auto scrollbar h-52'>
              {fetchedTestimonialsVideos?.map((vid, index) => (
                <div key={index} className='grid grid-cols-3 p-4'>
                  <iframe width="300" height="200" src={vid.links_iframe_testimonials} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                  </iframe>
                  <button className='mx-auto' key={vid.id} onClick={()=>handleDeleteTestimonials(vid.id)}>
                    <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1333_134)">
                      <path d="M7.00004 23.2877C7.00004 24.6168 8.05004 25.7043 9.33337 25.7043H18.6667C19.95 25.7043 21 24.6168 21 23.2877V8.78768H7.00004V23.2877ZM22.1667 5.16268H18.0834L16.9167 3.95435H11.0834L9.91671 5.16268H5.83337V7.57935H22.1667V5.16268Z" fill="#497246"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_1333_134">
                      <rect width="28" height="29" fill="white" transform="translate(0 0.329346)"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )
      }
    </div>
  )
}

export default YoutubeVideosPage