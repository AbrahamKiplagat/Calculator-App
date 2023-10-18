
import Sample1 from './sample1.js';
import './App.css';
import Sample from './sample.js';
// import  ParentComponent from './Parent.js'
import ClassComponents from './Class-Component.js'
import Class_Component from './State/Class-Component.js';
import Counter_Functional from './State/CounterFunctional.js';
import  Use_Effect_Hook from './Effect/UseEffectHook.js'
import Class_Use_Effect_Hook from './Effect/ClassUseEffectHook.js';
import AddNum from './add.js'
import Calculator from './Calculator.js';

function App() {
  return (
    <div className="App">
     <Sample name = 'John'/>
     <Sample1 name='jane'/>
     {/* <ParentComponent/> */}
     <ClassComponents name='Abraham'/>
     <Class_Component/>
     <Counter_Functional/>
     <Use_Effect_Hook/>
     <Class_Use_Effect_Hook/>
     <AddNum />
     <Calculator/>
    </div>
  );
}

export default App;
/***
 * props are immutable- one cannot change the value or assigned a value
 * to be able to change the vallue assigned, then you will learn how to use state, Hooks.
 * 
 */