import React, { useState } from 'react'
import { Container,InputGroup,Form,Button,} from 'react-bootstrap'

const Searchbar = ({handleSubmit}) => {
  const [search,setSearch] =useState('')
  
  return (
    
    <Container fluid style={{marginTop:'2%'}}>
        <Form onSubmit={(e)=>{
          e.preventDefault()
          handleSubmit(search)
         

        }}>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder=""
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={search}
          onChange={e=> setSearch(e.target.value)}
        />
         <Button variant="primary" type="submit">
        Submit
      </Button>
      </InputGroup>
      </Form>

    </Container>
  )
}

export default Searchbar