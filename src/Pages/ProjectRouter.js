import React from 'react';

import SeisMixPage from './ProjectsComponents/SeisMixPage'
import BudgetWebPage from './ProjectsComponents/BudgetWebPage'
import TopoGlobePage from './ProjectsComponents/TopoGlobePage'
import GraphJSPage from './ProjectsComponents/GraphJSPage'
import GPDotComPage from './ProjectsComponents/GPDotComPage'
import JavaTodoPage from './ProjectsComponents/JavaTodoPage'
import PythonRoguelikePage from './ProjectsComponents/PythonRoguelikePage'
import CLIDnDPage from './ProjectsComponents/CLIDnDPage'

import '../CSS/Project.css'

function ProjectRouter(props) {

    console.log(props)

    function getProjectContent(){
        switch(props.match.params.name){
            case 'SeisMix':
                return <SeisMixPage/>
            case 'Budget.web':
                return <BudgetWebPage/>
            case 'TopoGlobe':
                return <TopoGlobePage/>
            case 'Graph.js':
                return <GraphJSPage/>
            case 'GP.com':
                return <GPDotComPage/>
            case 'JavaTodo':
                return <JavaTodoPage/>
            case 'Python Roguelike':
                return <PythonRoguelikePage/>
            case 'CLI DnD':
                return <CLIDnDPage/>
            default:
                return '404 Project Not Found'
        }
    }

    return (
        <div className={'card-container'} style={{height:'1470em'}}>
            <div className={'card'}>
                {getProjectContent()}
            </div>
        </div>
    );
}

export default ProjectRouter;