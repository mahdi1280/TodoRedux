import React from "react";
import Header from "./fetures/header/Header";
import './index.css';
import TodoList from "./fetures/todos/TodoList";
import Footer from './fetures/footer/Footer';

export default function App(){
    return <div className="App">
        <nav>
            <section>
                <h1 className={"header-todos"}>Created By MK</h1>
            </section>
        </nav>
        <main>
            <section className="medium-container">
                <h2>Todos</h2>
                <div className="todoapp">
                    <Header />
                    <TodoList />
                    <Footer />
                </div>
            </section>
        </main>
    </div>
}