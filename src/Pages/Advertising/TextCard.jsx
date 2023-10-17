
import { Col, Row ,Badge} from "react-bootstrap"
const TextCard = () => {
  return (
   <>
       <div className="w-100 pt-3 rounded-3  pb-3 mt-3" style={{background: 'linear-gradient(0deg, rgba(73, 80, 87, 0.75), rgba(73, 80, 87, 0.75)), linear-gradient(95.42deg, #000000 2.45%, #CD9403 105.69%)'}}>
      <Row className='my-2'>
            <div className='align-items-center  justify-content-between  d-flex '>
          
            <label className='custom-checkbox'>
              <input type='checkbox' />
              <span className='checkmark'></span>
            </label>
    
          <div className='d-flex pe-3'>
            <Badge
              className='bg bg-secondary rounded-circle '
              style={{
                borderRadius: '22px',
                marginLeft: '50px',
                width: '38px',
                height: '35px',
              }}
            >
              <img
                src='./Group 1000004491.svg'
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                alt='Icon 1'
              />
            </Badge>

            <div
              className='bg bg-secondary d-flex justify-content-center align-items-center '
              style={{
                borderRadius: '22px',
                marginLeft: '10px',
                width: '38px',
                height: '35px',
              }}
            >
              <img
                src='./Pen, Edit.svg'
                style={{  objectFit: 'contain' }}
                alt='Icon 2'
              />
            </div>
            <div
              className='bg bg-danger d-flex justify-content-center align-items-center'
              style={{
                borderRadius: '22px',
                marginLeft: '10px',
                width: '38px',
                height: '35px',
              }}
            >
              <img
                src='./Trash, Delete, Bin.svg'
                style={{ width: '', height: '', objectFit: 'contain' }}
                alt='Icon 3'
              />
            </div>
          </div>
          </div>
        </Row>

      <div className="text-center "  >
<h4 className="text-light"> <b>Advertise your business! </b></h4>
<div className="w-75 ms-5">
<p className=" text-light" style={{fontSize:'12px'}}>Choose the plan according to your business needs and get access to exclusive benefits!</p>
</div>
      </div>
      </div>
   </>
  )
}

export default TextCard