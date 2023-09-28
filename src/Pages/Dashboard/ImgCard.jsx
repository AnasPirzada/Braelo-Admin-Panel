import Card from 'react-bootstrap/Card';

const ImgCard = (props) => {
  return (
 <>
   <Card
        style={{
            margin: '5px',
          width: '100%',
          height: '183.23px',
          backgroundColor: '#FDE09680',
        }}
      >
        <Card.Body className='text-center'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                backgroundColor: '#EE9E03',
                borderRadius: '50%',
                width: '70px',
                height: '70px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={props.img} width='50%' alt='icon' />
            </div>

            <h3 className='text-black fs-6 mt-4'>{props.title}</h3>
          </div>
        </Card.Body>
      </Card>
 
 
 </>
  )
}

export default ImgCard