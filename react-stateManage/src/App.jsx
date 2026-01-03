import React, { useState } from 'react'
import { Trash2, PlusCircle, StickyNote } from 'lucide-react' // Icons ke liye

const App = () => {
  const [allNotes, setAllNotes] = useState([])
  const [heading, setHeading] = useState('')
  const [notes, setNotes] = useState('')

  const deleteHandler = (idx) => {
    const copyNotes = allNotes.filter((_, i) => i !== idx) // Splice se better filter hai
    setAllNotes(copyNotes)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (!heading.trim() || !notes.trim()) return alert("Dono fields bharo bhai!")
    
    setAllNotes([...allNotes, { heading, notes }])
    setHeading('')
    setNotes('')
  }

  return (
    <div className='h-screen w-screen bg-[#0a0a0a] flex text-white font-sans overflow-hidden'>
      
      {/* LEFT SIDE: Form Section */}
      <div className='w-[40%] h-full flex flex-col justify-center items-center border-r border-gray-800 bg-[#0f0f0f] shadow-2xl'>
        <div className='w-[80%] flex flex-col gap-2 mb-8'>
          <h1 className='text-4xl font-bold flex items-center gap-3'>
            <StickyNote className='text-amber-400' size={35}/> My Notes
          </h1>
          <p className='text-gray-500'>Capture your thoughts instantly.</p>
        </div>

        <form onSubmit={submitHandler} className='w-[80%] flex flex-col gap-5'>
          <input 
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            type="text" 
            placeholder="Note Title..." 
            className='px-5 py-4 w-full bg-[#1a1a1a] border border-gray-700 focus:border-amber-400 outline-none rounded-xl transition-all'
          />
          <textarea 
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write your message here..."
            rows="5" 
            className='px-5 py-4 bg-[#1a1a1a] border border-gray-700 focus:border-amber-400 outline-none rounded-xl resize-none transition-all'
          ></textarea>
          
          <button 
            type='submit'
            className='bg-amber-400 hover:bg-amber-500 py-4 w-full rounded-xl text-black font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-amber-400/20'
          >
            <PlusCircle size={20}/> Add Note
          </button>
        </form>
      </div>

      {/* RIGHT SIDE: Notes Display Section */}
      <div className='w-[60%] h-full bg-[#0a0a0a] p-10 overflow-y-auto custom-scrollbar'>
        {allNotes.length === 0 ? (
          <div className='h-full flex flex-col items-center justify-center text-gray-600 italic'>
            <p className='text-xl'>No notes added yet. Start writing!</p>
          </div>
        ) : (
          <div className='columns-1 sm:columns-2 gap-5 space-y-5'>
            {allNotes.map((elem, idx) => (
              <div 
                key={idx} 
                className='break-inside-avoid bg-[#161616] border border-gray-800 p-6 rounded-2xl flex flex-col gap-3 hover:border-amber-400/50 transition-all group relative shadow-xl'
              >
                <h4 className='font-bold text-xl text-amber-400'>{elem.heading}</h4>
                <p className='text-gray-300 leading-relaxed'>{elem.notes}</p>
                
                <div className='flex justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity'>
                  <button 
                    onClick={() => deleteHandler(idx)} 
                    className='p-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-lg transition-colors'
                  >
                    <Trash2 size={18}/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default App