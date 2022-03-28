import {render, unmountComponentAtNode} from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils'
import {sampleBlogs} from './../../sampleData.js';
import {BlogList} from './BlogList';

describe('BlogList', () => {

  let container;
  const fakeData = sampleBlogs;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove()
    container = null;
  });

  it('renders without blogs', () => {
    render(<BlogList />, container);
    expect(container.textContent).toBe("No blogs!")
  });

  it('renders with blogs', () => {
    render(<BlogList blogs={fakeData} />, container);
    expect(container.textContent).toMatch(fakeData[0].title);
  })

  it('renders with fetch data', () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
      Promise.resolve({
        json: () => Promise.resolve(fakeData),
      });
    });
    render(<BlogList blogs={fakeData} />, container);
    expect(container.textContent).toMatch(fakeData[0].title);
  });

  it('renders the first blog by default', () => {
    render(<BlogList blogs={fakeData} />, container)
    expect(container.textContent).toMatch(fakeData[0].body)
  })

  it('renders another blog when selected', () => {
    render(<BlogList blogs={fakeData} />, container);
    const button = container.querySelectorAll('button')[1];
    ReactTestUtils.Simulate.click(button);
    expect(container.textContent).toMatch(fakeData[1].body);
  })
});

// Go to mockaroo.com for fake data!
// id, ROw Number
// title, Movie Title
//body Paragraphs
// created_at Datetime