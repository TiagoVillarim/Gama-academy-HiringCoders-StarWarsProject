import floatImage from '../components/Float/floatImage';
import HomeSectionOne from '../components/homeSectionOne';
import HomeSectionTwo from '../components/homeSectionTwo';


let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            ${HomeSectionOne}
            ${HomeSectionTwo}
            ${floatImage}
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;