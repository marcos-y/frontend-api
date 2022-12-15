import Card from 'react-bootstrap/Card';

function BasicCard(props) {

  var summary = props.summary.replace(/<[^>]+>/g, '');

  return (
    <Card style={{ 
        width: '14rem', 
        fontFamily:'roboto', 
        backgroundColor:'wheat', 
        display:'flex', 
        flexDirection:'column',
        marginLeft:'5px', 
        marginRight:'5px',
        marginTop:'5px', 
        borderRadius:'5px', 
        padding:'10px', 
        marginBottom:'5px'
    }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title style={{ fontWeight:'regular', fontSize:'18px'}} >{props.name}</Card.Title>
        <Card.Text style={{ fontWeight:'regular', fontSize:'10px'}}>
            Summary: <br></br>
            {summary} <br></br>
                      <br></br>
            Languages: {props.language} <br></br>
            Genres: {props.genres} <br></br>
            Premiered: {props.premiered} <br></br>
            Rating: {props.rating} <br></br>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;