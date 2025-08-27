import { Modal } from 'react-bootstrap';
import ReactPlayer from 'react-player';
interface modals {
  show:boolean,
  handleClose:any,
  videoUrl:string
}

const VideoModal = ({ show, handleClose, videoUrl }:modals) => {
  return (
    <Modal className='video-modal' show={show} centered size='xl' onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title></Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ReactPlayer oEmbedUrl={videoUrl} playing={true} controls={true} width='100%' height='80vh'/>
    </Modal.Body>
    
  </Modal>
  )
}

export default VideoModal