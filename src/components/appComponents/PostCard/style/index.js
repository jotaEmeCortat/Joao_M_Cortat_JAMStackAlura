import styled from 'styled-components';

const PostsCardWrapper = styled.div`
  margin: 10px;
  flex: 1;
`;

PostsCardWrapper.Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
`;

PostsCardWrapper.Stats = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  align-items: 'center';
  padding: 10px;
`;

export default PostsCardWrapper;
