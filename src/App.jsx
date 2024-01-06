import './App.css';
import { OneComponent } from './Components/1stComponent';
import { TwoComponent } from './Components/2ndComponent';
import { ThreeComponent } from './Components/3rdComponent';
import { FourComponent } from './Components/4thComponent';
import { FiveComponent } from './Components/5thComponent';
import { SixComponent } from './Components/6thComponent';
import { SevenComponent } from './Components/7thComponent';
import {EightComponent} from './Components/8thComponent'
import { NineComponent } from './Components/9thComponent';
import { TenComponent } from './Components/10thComponent';
import ElevenComponent from './Components/11thComponent';





const App = () => {
  return <>
  
  <div className='nav'>
  <OneComponent />
  <TwoComponent/>
  
</div>
<ThreeComponent/>
{/* <ElevenComponent /> */}
<FourComponent label='SHOP NOW'/>
<ElevenComponent />



 
<div className='level2'>
<ElevenComponent />
<FiveComponent/>
</div>

<h1  className='level2h'>Premium Home<br/>Decorator</h1>
<a className='an' href="#">LEARN MORE</a>
  

  <div className='level3'>
  <h1>Best Sell</h1>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
     Lorem Ipsum has been the industry's standard dummy text</p>

  </div>
<ElevenComponent />
  <SixComponent />

<div className='level4'>
<ElevenComponent />
<SevenComponent />
</div>

<div className='level5'>
<h1>All Products</h1>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry.
 Lorem Ipsum has been theindustry's standard dummy text</p>

</div>
<SixComponent/>

<EightComponent/>
<ElevenComponent />

<div className='footer'>
<NineComponent/>

<TenComponent/>
</div>





  </>
 
}

export default App;
