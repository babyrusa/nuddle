import React from 'react';
import FriendList from './FriendList';
const HomeMessage = () => {
  return (
    <div>
      <div className='form-group mt-2'>
        <input
          className='form-control border-0 bg-grey'
          type='text'
          name='messages'
          id='1'
          placeholder='Messages'
        />
      </div>
      <div className='Message-List'>
        <ul className='list-group'>
          <li className='list-group-item p-0 border-top-0 border-left-0 border-right-0 m-0 p-2'>
            <div className='d-flex'>
              <img
                src='/favicon.ico'
                alt='current-user'
                className='user-img mt-1'
              />
              <div className='d-flex flex-column ml-2 justify-content-center'>
                <span className='fw-600 text-capitalize font-size-15px'>
                  philip flores
                </span>
                <span class='message-text'>I really Like how your loook..</span>
              </div>
              <span className='align-self-center badge bg-salmon bagde-custom text-white '>
                1
              </span>
            </div>
          </li>
          <li className='list-group-item p-0 border-top-0 border-left-0 border-right-0 m-0 p-2'>
            <div className='d-flex'>
              <img
                src='/favicon.ico'
                alt='current-user'
                className='user-img mt-1'
              />
              <div className='d-flex flex-column ml-2 justify-content-center'>
                <span className='fw-600 text-capitalize font-size-15px'>
                  philip flores
                </span>
                <span class='message-text message-unread'>
                  I really Like how your loook..
                </span>
              </div>
              <span className='align-self-center badge bg-salmon bagde-custom text-white '>
                1
              </span>
            </div>
          </li>
          <li className='list-group-item p-0 border-top-0 border-left-0 border-right-0 m-0 p-2'>
            <div className='d-flex'>
              <img
                src='/favicon.ico'
                alt='current-user'
                className='user-img mt-1'
              />
              <div className='d-flex flex-column ml-2 justify-content-center'>
                <span className='fw-600 text-capitalize font-size-15px'>
                  philip flores
                </span>
                <span class='message-text'>I really Like how your loook..</span>
              </div>
              <span className='align-self-center badge bg-salmon bagde-custom text-white '>
                1
              </span>
            </div>
          </li>
          <li className='list-group-item p-0 border-top-0 border-left-0 border-right-0 m-0 p-2'>
            <div className='d-flex'>
              <img
                src='/favicon.ico'
                alt='current-user'
                className='user-img mt-1'
              />
              <div className='d-flex flex-column ml-2 justify-content-center'>
                <span className='fw-600 text-capitalize font-size-15px'>
                  philip flores
                </span>
                <span class='message-text'>I really Like how your loook..</span>
              </div>
              <span className='align-self-center badge bg-salmon bagde-custom text-white '>
                1
              </span>
            </div>
          </li>
          <li className='list-group-item p-0 border-top-0 border-left-0 border-right-0 m-0 p-2'>
            <div className='d-flex'>
              <img
                src='/favicon.ico'
                alt='current-user'
                className='user-img mt-1'
              />
              <div className='d-flex flex-column ml-2 justify-content-center'>
                <span className='fw-600 text-capitalize font-size-15px'>
                  philip flores
                </span>
                <span class='message-text'>I really Like how your loook..</span>
              </div>
              <span className='align-self-center badge bg-salmon bagde-custom text-white '>
                1
              </span>
            </div>
          </li>
        </ul>
      </div>
      <FriendList />
    </div>
  );
};

export default HomeMessage;
