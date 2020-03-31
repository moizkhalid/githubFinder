import React, { useState, useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');
  const onSubmitHandle = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);

      setText('');
    }
  };
  const onChangeHandle = e => setText(e.target.value);
  return (
    <div>
      <Container>
        <form onSubmit={onSubmitHandle} className='searchForm'>
          <input type='text' name='text' value={text} onChange={onChangeHandle} />
          <input type='submit' value='Search' />
        </form>
        {githubContext.users.length > 0 && (
          <Button variant='secondary' block className='mt-3' onClick={githubContext.clearUsers}>
            Clear
          </Button>
        )}
      </Container>
    </div>
  );
};
export default Search;
