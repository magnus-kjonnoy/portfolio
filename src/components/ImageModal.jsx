
export default function ImageModal({ isOpen, src, alt, onClose }) {
  if (!isOpen) return null

  return (
    <div className='modal show'>
      <span className='close' onClick={onClose}>&times;</span>
      <img className='modal-content' src={src} alt={alt}/>
      <div id='caption'>{alt}</div>
    </div>
  )
}