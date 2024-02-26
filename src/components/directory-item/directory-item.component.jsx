import './directory-item.styles.jsx';
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles.jsx';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const OnNavigatehandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={OnNavigatehandler}>
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;