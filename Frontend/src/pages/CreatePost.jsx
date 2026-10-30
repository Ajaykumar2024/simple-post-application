import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreatePost = () => {
  const [caption, setCaption] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)

 const navigate = useNavigate() 
  useEffect(() => {
    if (!selectedImage) {
      return
    }

    return () => URL.revokeObjectURL(selectedImage.previewUrl)
  }, [selectedImage])


  const handleSubmit = async (e)=>{
    e.preventDefault()

    const formData = new FormData()

    // Suraksha check: Agar image nahi hai toh submit na karein
  
    formData.append('caption',caption)
    if (!selectedImage) {
    return alert("Please select an image first!");
  }
    formData.append('image',selectedImage.file)
    // console.log(formData);

    axios.post('http://localhost:3000/create-post',formData)
    .then((res)=>{
      console.log(res);
      navigate('/posts')
      
    })
    .catch((err)=>{
      console.log(err)
      alert("error ocurred")
      
    })
    setCaption("")
    setSelectedImage(null)
    

  }

  return (
    <main className="min-h-screen bg-slate-50 px-3 py-5 text-slate-900 sm:px-6 sm:py-7 lg:h-screen lg:min-h-[620px] lg:overflow-hidden lg:p-5">
      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-6xl flex-col sm:min-h-[calc(100vh-3.5rem)] lg:h-full lg:min-h-0">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl pb-5">
            Create a post
          </h1>
        
         

        <form
          onSubmit={handleSubmit}
          // action="http://localhost:3000/create-post"
          // method='post'
          className="flex flex-1 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm lg:min-h-0"
        >
          <div className="grid flex-1 lg:min-h-0 lg:grid-cols-[1.05fr_0.95fr]">
            <section className="p-4 sm:p-6 lg:min-h-0 lg:p-6 xl:p-7" aria-labelledby="post-details">
                 <h2 id="post-details" className="text-base font-semibold text-slate-950 sm:text-lg mb-5">
                    Post details
                </h2>
              

              <div>
                    <label
                        htmlFor="caption"
                        className="mb-2 block text-sm font-medium text-slate-800"
                    >
                        Caption <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                    id="caption"
                    name="caption"
                    value={caption}
                    onChange={(event) => setCaption(event.target.value)}
                    placeholder="What would you like to share?"
                    required
                    rows={4}
                    className="block min-h-28 w-full resize-y rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm leading-5 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 sm:min-h-32"
                    />
                </div>

                <div className="mt-5 sm:mt-6">
                    <div className="mb-2.5">
                    <label
                        htmlFor="image-upload"
                        className="text-sm font-medium text-slate-800"
                    >
                        Cover image
                        <span className="ml-2 font-normal text-slate-500">Optional</span>
                    </label>
                    </div>

                <div className="group relative flex min-h-32 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/70 px-4 py-4 text-center transition hover:border-indigo-400 hover:bg-indigo-50/40 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10 sm:min-h-36">
                   {/* <span className="mb-2 flex size-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:bg-white sm:size-11">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-5"
                    >
                      <path
                        d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M5 14.5v3A2.5 2.5 0 0 0 7.5 20h9a2.5 2.5 0 0 0 2.5-2.5v-3"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.7"
                      />
                    </svg>
                  </span> */}
                
                  {/* <p className="text-sm font-semibold text-slate-800">
                     Add a cover image
                   </p> */}

                  
                  {selectedImage && (
                    <span className="mt-2 max-w-full truncate text-xs text-slate-500">
                      {selectedImage.file.name}
                    </span>
                  )}
                    
                  <span className="mt-2.5 inline-flex min-h-8 items-center rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition group-hover:border-indigo-200 group-hover:text-indigo-700">
                    Browse files
                  </span> 
                  <input
                    id="image-upload"
                    type="file"
                    name="image"
                    accept="image/*"
                    aria-label="Choose a cover image"
                    onChange={(event) => {
                      const file = event.target.files?.[0]
                      setSelectedImage(
                        file
                          ? { file, previewUrl: URL.createObjectURL(file) }
                          : null,
                      )
                    }}
                    className="absolute h-full w-full cursor-pointer opacity-0"
                  />
                </div>
              </div>
            </section>
        {/* preview */}
            <aside className="border-t border-slate-200 bg-slate-50/70 p-4 sm:p-6 lg:min-h-0 lg:border-l lg:border-t-0 lg:p-6 xl:p-7">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-base font-semibold text-slate-950 sm:text-lg">Preview</h2>
                <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700">
                  Live
                </span>
              </div>

              <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center gap-3 px-3.5 py-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-xs font-bold text-white ring-4 ring-indigo-50">
                    P
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-900">Your page</p>
                    <p className="text-xs text-slate-500">Post preview</p>
                  </div>
                </div>
                <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-slate-100 lg:aspect-[16/9]">
                  {selectedImage ? (
                    <img
                      src={selectedImage.previewUrl}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex size-16 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-400 shadow-sm">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="size-8"
                      >
                        <path
                          d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="m5 17 5-5 3 3 2-2 4 4M15.5 8.5h.01"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="min-h-14 px-3.5 py-3">
                  <p className="max-h-24 overflow-y-auto whitespace-pre-wrap break-words text-sm leading-5 text-slate-700">
                    {caption || (
                      <span className="text-slate-400">
                        Your caption will show here.
                      </span>
                    )}
                  </p>
                </div>
              </article>
            </aside>
          </div>

          <footer className="flex  justify-center items-center gap-2 border-t border-slate-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-end sm:px-6">
            {/* <p className="text-center text-xs text-slate-500 sm:text-left">
              Fields marked <span className="text-rose-600">*</span> are required.
            </p> */}
            <button
              type="submit"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-600/20 active:bg-indigo-800 sm:w-auto"
            >
              Create post
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="size-4"
              >
                <path
                  d="M4 10h12m0 0-5-5m5 5-5 5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                />
              </svg>
            </button>
          </footer>
        </form>
      </div>
    </main>
  )
}

export default CreatePost
