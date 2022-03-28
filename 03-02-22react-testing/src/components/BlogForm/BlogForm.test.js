import {render, unmountComponentAtNode} from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import {BlogForm} from './BlogForm';

describe('BlogForm', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove()
    container = null;
  });

  it('renders a form', () => {
    render(<BlogForm />, container)
    expect(container.querySelector('form')).not.toBeNull();
  });

  it('has a submit button', () => {
    render(<BlogForm />, container);
    expect(container.querySelector('button[type="submit"]')).not.toBeNull();
  });
  
  const rendersAnInputOfTypeText = (fieldName) => {
    it(`renders an input of type ${fieldName}`, () => {
      render(<BlogForm />, container);
      const formField = container.querySelector('form').elements[fieldName];
      expect(formField.tagName).toEqual('INPUT');
      expect(formField.type).toEqual(fieldName);
    })
  }

  const saveTheCurrentStateValueWhenSubmitted = (fieldName, value) => {
    it('saves the current value when submitted', () => {
      let submitArg;
      render(
        <BlogForm
          {...{ [fieldName]: value }}
          handleSubmit={(blog) => (submitArg = blog)}
        />,
        container
      );
      const formElement = container.querySelector('form');
      ReactTestUtils.Simulate.submit(formElement);
      expect(submitArg[fieldName]).toBe(value);
    })
  }
  

  describe('title field', () => {
    // it('renders an input of type text', () => {


      let value = 'value';
      let fieldName = 'title';
      rendersAnInputOfTypeText(fieldName)
      // saveTheCurrentStateValueWhenSubmitted(fieldName, value)
    // });
  });

  describe('body field', () => {
    // it('renders an input of type body', () => {
      let value = 'value';
      let fieldName = 'body';
      rendersAnInputOfTypeText(fieldName)
      // saveTheCurrentStateValueWhenSubmitted(fieldName, value)
    // });
  });
});