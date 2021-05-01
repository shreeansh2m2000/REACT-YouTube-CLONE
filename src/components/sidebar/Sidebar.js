import React, { useState } from 'react'
import './_sidebar.scss'
import { Modal, Button } from 'react-bootstrap'
import {
   MdSubscriptions,
   MdExitToApp,
   MdThumbUp,
   MdLibraryBooks,
   MdHome,
   MdAccessibility,
} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { log_out } from '../../redux/actions/auth.action'
import { Link } from 'react-router-dom'

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
   // Model Code
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);


   const dispatch = useDispatch()
   const logOutHandler = () => {
      dispatch(log_out())
   }
   return (
      <nav
         className={sidebar ? 'sidebar open' : 'sidebar'}
         onClick={() => handleToggleSidebar(false)}>
         <Link to='/'>
            <li>
               <MdHome size={23} />
               <span>Home</span>
            </li>
         </Link>
         <Link to='/feed/subscriptions'>
            <li>
               <MdSubscriptions size={23} />
               <span>Subscriptions</span>
            </li>
         </Link>
         <Link to='/feed/likedVideos'>
            <li>
               <MdThumbUp size={23} />
               <span>Liked Video</span>
            </li>
         </Link>
         <hr />
         <li>
            <MdLibraryBooks size={23} />
            <span onClick={handleShow}>What you can do</span>
         </li>


         <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
         >
            <Modal.Header closeButton>
               <Modal.Title className="MT">You can</Modal.Title>
            </Modal.Header>
            <Modal.Body>

               <ul>
                  <li> Comment on videos</li>
                  <li>Access your Liked videos</li>
                  <li>Search YouTube videos</li>
                  <li>See your Subscriptions</li>
                  <li>You can sort your videos on the basis of categorys</li>
               </ul>

            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>

            </Modal.Footer>
         </Modal>

         <li>
            <MdAccessibility size={23} />
            <span><a href="https://github.com/shreeansh2m2000">Github</a></span>
         </li>

         <hr />

         <li onClick={logOutHandler}>
            <MdExitToApp size={23} />
            <span>Log Out</span>
         </li>

         <hr />
      </nav>
   )
}

export default Sidebar
