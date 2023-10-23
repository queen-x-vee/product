import Banner from '../banner'
import Catalogue from './catalogue'
import Header from './header'
import Session from './session'
import Training from './training'

const Programs = () => {
  return (
    <div>
      <Header/>
      <Training/>
      <Catalogue/>
      <Session/>
      <Banner/>
    </div>
  )
}

export default Programs
