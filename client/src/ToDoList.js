import React, {Component} from 'react'

class ToDoList extends Component {

    thisIsAMapFunction(eachItem) {
        return (
            <div>
                {/*<p>{eachItem._id}</p>*/}
                <p>{eachItem.username}</p>
                <p>{eachItem.todo}</p>
                <p>{eachItem.isDone.toString()}</p>
                <button onClick={() => this.props.deleteFunction(eachItem._id)}>Delete</button>
                <hr/>
            </div>
        )
    }

    render() {
        var forEachItem =
            this.props.arr.map(
                (eachItem) =>
                    this.thisIsAMapFunction(eachItem));

        return (
            <div>
                <h2> {forEachItem}</h2>
            </div>
        );
    }
}

export default ToDoList;