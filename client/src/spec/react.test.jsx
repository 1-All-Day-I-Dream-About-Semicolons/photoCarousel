import React from 'react'
import Window from '../components/Window.jsx';
import ColorSelector from '../components/ColorSelector.jsx';
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Window/>', () => {
    it('should render a <ColorSelector/> component', () => {
        const wrapper = shallow(<Window/>);
        const contents = wrapper.find('div');
        expect(contents).toContainMatchingElement(ColorSelector);
    });
});

