import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
const RepoItem = ({ repo }) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Text>
            <a href={repo.html_url}>{repo.name}</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};
export default RepoItem;
