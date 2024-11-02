import "./App.css";
import Header from './components/Header'
import Footer from './components/Footer'
import TextArea from "./components/TextArea";
import Result from "./components/Result";

function App() {
	return (
		<div className="App bg-[#fafafa] flex flex-col justify-center items-center">
            <Header/>
            <main className="flex justify-center min-h-[85vh] mb-5">
                <div className="container-main lg:flex 2xl:px-3">
                    <TextArea/>
					<Result/>
                </div>
            </main>
            <Footer/>
		</div>
	);
}

export default App;
