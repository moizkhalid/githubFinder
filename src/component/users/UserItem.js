import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const UserItem = ({ user: { id, login, avatar_url, html_url } }) => {
  return (
    <div className='sec-item'>
      <Card style={{ textAlign: 'center' }}>
        <Card.Img variant='top' className='Circle' src={avatar_url} />
        <Card.Body>
          <Card.Title>{login}</Card.Title>
          <Button>
            <Link to={`/user/${login}`} style={{ color: 'white ' }}>
              More
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
UserItem.propType = {
  user: PropTypes.object.isRequired
};
export default UserItem;
