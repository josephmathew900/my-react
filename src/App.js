import React, { useState, useEffect, useRef } from 'react';
import "./assets/css/style.css";
import Images from './components/Images';

function App() {
    const [title, setTitle] = useState("Hello React");
    const [isShowing, setIsShowing] = useState(false);
//  const [didMount, setdidMount] = useState(false);
    const mountRef = useRef(false);

    useEffect(() => {
//      setdidMount(true);
        console.log("App Mounted");
    }, []);

    
    useEffect(() => {
        if(mountRef.current){
            console.log("App Updated");
        }else{
            mountRef.current = true;
        }
    },[isShowing]);

    function handleClick(){
        setIsShowing( !isShowing );
    }

    return (
            <section className="flex justify-center">
                { console.log('re-rendered') }
                <div className="w-1\/2">
                    <div className="text-center">
                        <div className="my-4">{ title }</div>
                        <button className="p-1 bg-blue-700 text-white my-2" onClick={ handleClick }>
                            Toggle Image</button>
                    </div>
                    {
                        isShowing ? (
                            <Images />
                        ) : null
                    }
                </div>
            </section>
    );
}

// class App extends React.Component {

//     constructor(props){
//         console.log("App Constructor");

//         super(props);
//         this.state = { title: "Hello React", isShowing: false };
//     }

//     componentDidMount(){
//         console.log("App Mounted");
//         this.setState({ title: "Hello Lifecycle" });
//     }

//     componentDidUpdate(){
//         console.log("App Updated");
//     }

//     handleClick = () => {
//         this.setState({ isShowing: !this.state.isShowing });
//     }

//     render(){
//         console.log("App Render");
//         return (
//             <section className="flex justify-center">
//                 <div className="w-1\/2">
//                     <div className="text-center">
//                         <div className="my-4">{ this.state.title }</div>
//                         <button className="p-1 bg-blue-700 text-white my-2" onClick={ this.handleClick }>
//                             Toggle Image</button>
//                     </div>
//                     {
//                         this.state.isShowing ? (
//                             <Images />
//                         ) : null
//                     }
//                 </div>
//             </section>
//         );
//     }
// }

export default App;