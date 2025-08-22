import 'bootstrap/dist/css/bootstrap.min.css';
import './css/findHome.css';
import React, { Component } from 'react';
import CardProperties from '../component/CardProperties.jsx';
import listData from "../data/ListData.js";

class ListCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likedItems: [],
            chimMoiItems: [],
            hiddenItems: [],
            showListLiked: false,
            showListChimMoi:false,
            showListHidden:false
        };

    }

    listSomething = (listStateName, item) => {
        this.setState((prevState) => {
            const currentList = [...prevState[listStateName]];
            const index = currentList.findIndex(i => i.id === item.id);
            if (index > -1) {
                currentList.splice(index, 1);
                console.log(`${listStateName} after remove:`, currentList);
            } else {
                currentList.push(item);
                console.log(`${listStateName} after add:`, currentList);
            }
            return { [listStateName]: currentList };
        });
    };


    toggleList = (listType) => {
        this.setState((prevState) => {
            const newState = {
                showListLiked: false,
                showListChimMoi: false,
                showListHidden: false
            };
            newState[`showList${listType}`] = !prevState[`showList${listType}`];
            return newState;
        });
    };
    render() {
        const {likedItems,showListLiked} = this.state;
        return (

            <div className="cardHome container p-0 row">
                <button className="btn btnWhile " onClick={()=>this.toggleList('Liked')}>Liked</button>
                <button className="btn btnWhile " onClick={()=>this.toggleList('ChimMoi')}>ChimMoi</button>
                <button className="btn btnWhile " onClick={()=>this.toggleList('Hidden')}>Hidden</button>
                {!showListLiked ? (
                    <div className="row">
                        {listData.map((item) => (
                            <CardProperties
                                key={item.id}
                                item={item}
                                onLike={(item) => this.listSomething('likedItems', item)}
                                onChimMoi={(item) => this.listSomething('chimMoiItems', item)}
                                onHidden={(item) => this.listSomething('hiddenItems', item)}
                            />
                        ))}
                    </div>
                ) : likedItems.length > 0 ? (
                    <div className="row">
                        {likedItems.map((likedItem) => (
                            <CardProperties
                                key={likedItem.id}
                                item={likedItem}
                                oonLike={(item) => this.listSomething('likedItems', item)}
                                onChimMoi={(item) => this.listSomething('chimMoiItems', item)}
                                onHidden={(item) => this.listSomething('hiddenItems', item)}

                            />
                        ))}
                    </div>
                ) : (
                    <p>No one card liked.</p>
                )}

            </div>

        );
    }
}

export default ListCard;