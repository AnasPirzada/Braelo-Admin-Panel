import React, { useState } from 'react';

function ResponsiveExample() {
  const tableData = [
    {
      name: 'Criss Germano',
      Date: 'Set 29, 2023 At 08.00 PM',
      Time: 'At 08.00 PM',
      UserId: '@crissgermano',
      Local: 'MA',
      Actions: 'Enable',
    },
  ];
  const [selectedValue, setSelectedValue] = useState('');

  const handleDropdownChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <div
      className='mt-4 m-auto '
      style={{ maxHeight: '60vh', overflowY: 'auto', width: '90%' }}
    >
      <table className='table p-5'>
        <thead
          style={{
            backgroundColor: ' #5498',
            borderRadius: '15px',
          }}
        >
          <tr>
            <th scope='col' className='thead p-3 '>
              Name/Business <img src='./arrowtble.svg' className='ms-2' />
            </th>
            <th scope='col' className='thead p-3 '>
              Date <img src='./arrowtble.svg' className='ms-2' />
            </th>
            <th scope='col' className='thead p-3 '>
              User Id <img src='./arrowtble.svg' className='ms-2' />
            </th>
            <th scope='col' className='thead p-3 '>
              Local <img src='./arrowtble.svg' className='ms-2' />
            </th>
            <th scope='col' className='thead p-3 '>
              Actions <img src='./arrowtble.svg' className='ms-2' />
            </th>
          </tr>
        </thead>

        <tbody style={{ paddingTop: '30px !important' }}>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td className='d-flex text-secondary'>
                <div className='d-flex '>
                  <img
                    src='./image/userKellyimage.png'
                    style={{ width: '40px' }}
                  />
                  <img
                    src='./table dull active.svg'
                    style={{ transform: 'translateY(-10px) translateX(-10px)' }}
                  />
                </div>

                <p className='m-0 pt-1 ms-3'>{data.name}</p>
              </td>
              <td className='text-secondary'>{data.Date}</td>
              <td className='text-secondary'>{data.UserId}</td>
              <td className='text-secondary'>{data.Local}</td>
              <tr>
                <td className='text-secondary'>{selectedValue}</td>
                <td>
                  <select
                    className='input-with-icon'
                    style={{
                      paddingLeft: '42px',
                      backgroundColor: '#fff !important',
                      outline: 'none',
                    }}
                    value={selectedValue}
                    onChange={handleDropdownChange}
                  >
                    <option value=''>Bed & Bath</option>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                  </select>
                </td>
              </tr>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResponsiveExample;
