import React, { Fragment, useEffect, useContext } from 'react';
// import { Spinner } from 'react-bootstrap';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { Card, Badge } from 'react-bootstrap';

import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';
const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);
  const { name, avatar_url, location, bio, login, html_url, followers, following, public_repos, public_gist, hireable } = user;
  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Card>
        <Card.Header>
          {' '}
          <button className='btn btn-light'>
            <Link to={'/'}> Back to Search </Link>
          </button>
          {'  '}
          hireable:{'  '} {hireable ? <i className='fas fa-check' style={{ color: 'green' }} /> : <i className='fas fa-times-circle ' style={{ color: 'red' }} />}
        </Card.Header>
        <Card.Body>
          <img src={avatar_url} alt='avatar img' className='card-img-top Circle center' />

          <Card.Title>{name}</Card.Title>
          <div className='right-text'>
            {location && (
              <div>
                <p className='blockquote'>
                  <strong>Location:</strong> {location}
                </p>
                <p className='blockquote'>
                  <strong>User Name:</strong> {login}
                </p>
              </div>
            )}

            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-secondary'>
              Visit GitHub Profile{' '}
            </a>
          </div>
          <div>
            <Badge variant='primary'>Followers: {followers}</Badge> {'  '}
            <Badge variant='secondary'>Following: {following}</Badge> {'  '}
            <Badge variant='success'>Public Repos {public_repos}</Badge> {'  '}
            <Badge variant='danger'>Public Gist{public_gist}</Badge>
          </div>
        </Card.Body>
      </Card>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
