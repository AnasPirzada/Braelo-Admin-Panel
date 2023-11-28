import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import './chatstyle.css';

export const Index = () => {
  const [selectedUser, setSelectedUser] = useState(0);
  const [inputMessage, setInputMessage] = useState('');

  const users = [
    {
      name: 'Ryan Renold',
      picture: './Chat Images/Renato.png',
      header: 'Request ID BRLO 09202315',
    },
    {
      name: 'John Knedy',
      picture: './Chat Images/JohnKnedy.png',
      header: 'Request ID ABCD 123456',
    },
    {
      name: 'Anna Mulana',
      picture: './Chat Images/Anna.png',
      header: 'Request ID ABCD 0679461',
    },
  ];

  const messages = [
    [
      {
        message: 'First message for Ryan Renold',
        isOwner: false,
      },
      {
        message: 'Another message for Ryan Renold',
        isOwner: true,
      },
    ],
    [
      {
        message: 'First message for Another User',
        isOwner: false,
      },
      {
        message: 'Another message for Another User',
        isOwner: true,
      },
    ],
  ];

  const handleUserClick = index => {
    setSelectedUser(index);
  };

  const [data, setData] = useState([
    {
      userIndex: 0,
      messages: [
        {
          date: 'December 12, 2023',
          content: 'How I Want to Ask May I ?',
          time: '08:00 PM',
        },
      ],
    },
    {
      userIndex: 1,
      messages: [
        {
          date: 'January 15, 2023',
          content: 'Another content for Another User',
          time: '10:30 AM',
        },
      ],
    },
    {
      userIndex: 2,
      messages: [
        {
          date: 'January 1, 2023',
          content: ' for Another User',
          time: '10:03AM',
        },
      ],
    },
  ]);

  const handleMessageSend = () => {
    if (inputMessage.trim() === '') {
      // Check if the input message is empty or only contains whitespace
      return;
    }

    const newMessage = {
      date: new Date().toLocaleDateString(),
      content: inputMessage,
      time: new Date().toLocaleTimeString(),
    };

    const updatedData = [...data];
    updatedData[selectedUser].messages.push(newMessage);
    setData(updatedData);

    setInputMessage(''); // Clear the input field after sending the message
  };

  const selectedUserData = data.find(item => item.userIndex === selectedUser);

  const renderedContent = selectedUserData
    ? selectedUserData.messages.map((item, index) => (
        <div key={index}>
          <div
            className='ps-4 pt-5'
            style={{ backgroundColor: '#F9F9FB', height: '90vh' }}
          >
            <div className='text-center m-auto w-75'>
              <p
                className='p-3 rounded-4 m-auto'
                style={{
                  backgroundColor: '#F3F3F3',
                  color: '#757575',
                  width: '30%',
                }}
              >
                {item.date}
              </p>
            </div>
            <div>
              {item.content && (
                <div>
                  <p
                    className='p-3 rounded-3'
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#75818D',
                      width: '30%',
                    }}
                  >
                    {item.content}
                  </p>

                  <p
                    className='mt-2'
                    style={{ color: '#BABABA', fontSize: '11.42px' }}
                  >
                    {item.time}
                  </p>
                </div>
              )}{' '}
              {index === selectedUserData.messages.length - 1 && (
                <div className='text-end'>
                  <p
                    className='mt-2 p-3'
                    style={{
                      color: '#F3F3F3',
                      fontSize: '13.33px',
                      backgroundColor: '#75818D',
                    }}
                  >
                    {inputMessage}
                  </p>
                </div>
              )}
              {inputMessage && ( // Conditionally render the input message below the input field
                <div className='text-end'>
                  <p
                    className='mt-2 p-3'
                    style={{
                      color: '#F3F3F3',
                      fontSize: '13.33px',
                      backgroundColor: '#75818D',
                    }}
                  >
                    {inputMessage}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div
            className=' m-auto'
            style={{
              width: '70%',
              zIndex: '1',
              transform: 'translateY(-80px) translateX(0%)',
            }}
          >
            <div className='d-flex justify-content-between align-items-center bg-white rounded-3 m-auto p-2'>
              <input
                type='text'
                placeholder='Write A Message ...'
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
              />
              <img
                src='./Chat Images/send button.svg'
                alt=''
                role='button'
                onClick={handleMessageSend}
              />
            </div>
          </div>
        </div>
      ))
    : null;
  const selectedUserDetails = users[selectedUser];

  const selectedUserName = selectedUserDetails.name;
  const selectedUserImage = selectedUserDetails.picture;
  return (
    <div>
      <Row className='m-1'>
        <div
          className='my-4 border m-auto rounded-2 p-2 d-flex justify-content-between align-items-center'
          style={{ width: '105%' }}
        >
          <input type='search' placeholder='Search |' className='w-100' />
          <img src='./Seacrh.svg' alt='' />
        </div>
      </Row>

      <div className='d-flex'>
        <div style={{ width: '20%' }}>
          {users.map((user, index) => (
            <div
              key={index}
              onClick={() => handleUserClick(index)}
              className={`d-flex justify-content-start align-items-center p-3 mt-3 border-bottom`}
              style={{
                cursor: 'pointer',
                backgroundColor: selectedUser === index ? '#E9ECEF' : '#FFFFFF',
              }}
            >
              <div>
                <img src={user.picture} alt='' />
              </div>
              <div className='ms-3'>
                <p
                  style={{
                    color: '#75818D',
                    fontSize: '15.59px',
                    fontWeight: '600',
                  }}
                >
                  {user.name}
                </p>
                <div className='d-flex justify-content-between align-items-center '>
                  <div>
                    <p
                      style={{
                        color: '#75818D',
                        fontSize: '11.7px',
                        fontWeight: '600',
                      }}
                    >
                      <img src='./Chat Images/Vector.svg' alt='' />
                      <img src='./Chat Images/gallery.svg' alt='' />I would like
                      to..
                    </p>
                  </div>
                  <div
                    className='d-flex justify-content-center align-items-center text-white ms-5'
                    style={{
                      borderRadius: '50%',
                      backgroundColor: '#CD9403',
                      width: '19.49px',
                      height: '19.49px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: '11.7px',
                    }}
                  >
                    1
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ width: '80%' }}>
          <div>
            <div>
              <div
                className='d-flex justify-content-between align-items-center mt-3 p-3 border'
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className='d-flex justify-content-center align-items-center'>
                  <img
                    src='./Chat Images/window-finder-resize-arrow.1.svg'
                    alt=''
                    className='me-3'
                  />
                  <img src={selectedUserImage} alt='' className='me-2' />
                  <p className='fs-6 me-5' style={{ color: '#75818D' }}>
                    {selectedUserName}
                  </p>
                  <p style={{ color: '#ACB6BE' }}>
                    {selectedUserDetails.header}
                  </p>
                </div>
                <div>
                  <img src='./Chat Images/more.svg' alt='' />
                </div>
              </div>
            </div>
            {renderedContent}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
