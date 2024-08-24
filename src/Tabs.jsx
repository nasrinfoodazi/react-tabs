import {useState} from "react";
import "./App.css";

function Tabs() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (

        <div className="container">

            <h1>Tabs component with react
            </h1>
            <div className="block-tabs">
                <div
                    className={toggleState === 1
                        ? "tabs active-tabs"
                        : "tabs"}
                    onClick={() => toggleTab(1)}>Tab 1</div>
                <div
                    className={toggleState === 2
                        ? "tabs active-tabs"
                        : "tabs"}
                    onClick={() => toggleTab(2)}>Tab 2</div>
                <div
                    className={toggleState === 3
                        ? "tabs active-tabs"
                        : "tabs"}
                    onClick={() => toggleTab(3)}>Tab 3</div>
                <div
                    className={toggleState === 4
                        ? "tabs active-tabs"
                        : "tabs"}
                    onClick={() => toggleTab(4)}>Tab 4</div>
            </div>
            <div className="content-tabs">
                <div
                    className={toggleState === 1
                        ? "content active-content"
                        : "content"}>
                    <h2>content 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, velit. Quod,
                        quaerat porro omnis, alias at quis optio commodi, eius labore tempore sunt
                        nostrum saepe cum nihil corrupti doloribus officiis? Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Rerum, velit. Quod, quaerat porro omnis, alias at
                        quis optio commodi, eius labore tempore sunt nostrum saepe cum nihil corrupti
                        doloribus officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rerum, velit. Quod, quaerat porro omnis, alias at quis optio commodi, eius
                        labore tempore sunt nostrum saepe cum nihil corrupti doloribus officiis?
                    </p>
                </div>
                <div
                    className={toggleState === 2
                        ? "content active-content"
                        : "content"}>
                    <h2>content 2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, velit. Quod,
                        quaerat porro omnis, alias at quis optio commodi, eius labore tempore sunt
                        nostrum saepe cum nihil corrupti doloribus officiis?
                    </p>
                </div>
                <div
                    className={toggleState === 3
                        ? "content active-content"
                        : "content"}>
                    <h2>content 3</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, velit. Quod,
                        quaerat porro omnis, alias at quis optio commodi, eius labore tempore sunt
                        nostrum saepe cum nihil corrupti doloribus officiis?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, velit. Quod,
                        quaerat porro omnis, alias at quis optio commodi, eius labore tempore sunt
                        nostrum saepe cum nihil corrupti doloribus officiis?
                    </p>
                </div>
                <div
                    className={toggleState === 4
                        ? "content active-content"
                        : "content"}>
                    <h2>content 4</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, velit. Quod,
                        quaerat porro omnis, alias at quis optio commodi, eius labore tempore sunt
                        nostrum saepe cum nihil corrupti doloribus officiis?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, velit. Quod,
                        quaerat 
                    </p>
                </div>
            </div>

        </div>
    )
}
export default Tabs;