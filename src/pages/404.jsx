import { useEffect } from 'react'

export default function Status404() {
  useEffect(() => {
    document.title = `404 Error - page not found`
  }, [])

  return (
    <div className='main'>
      <div className='error'>404 Error - page not found.</div>
    </div>
  )
}