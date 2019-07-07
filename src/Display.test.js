import "react-native";
import { shallow } from "enzyme";
import { createSerializer } from "enzyme-to-json";
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
import { findComponent,checkProps } from "../Utils/TestUtil";
import Display from "./Display";

const setUp = (props = {}) => {
  const wrapper = shallow(<Display {...props} />);
  return wrapper;
};

describe("Display", () => {
  describe("With props", () => {

    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Test tilte"
      };
      wrapper = setUp(props);
    });

    it("should render", () => {
      // console.log(wrapper.debug());
      const component = findComponent(wrapper, "title");
      expect(component.length).toBe(1);
    });

    describe('Checking PropType', () => {
        it('it show not throw a warning',()=>{
            const expectedProps={
                title:'Tile'
            }
            const propsErr=checkProps(Display,expectedProps)
            expect(propsErr).toBeUndefined()
        })
    });
  });
});
