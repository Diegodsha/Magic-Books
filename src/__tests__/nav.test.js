import renderer from 'react-test-renderer';
import Nav from '../Components/Nav';

describe('Booklist Component', () => {
  test('Renders correctly component', () => {
    const tree = renderer.create(<Nav />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
